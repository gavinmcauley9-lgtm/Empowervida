/**
 * GA4 Analytics Utility for EmpowerVida
 * Centralised consent enforcement and event tracking for conversion-critical interactions.
 *
 * Usage:
 *   import { trackEvent, trackCTAClick, trackOutboundLink } from '../utils/analytics';
 *   trackEvent('newsletter_signup', { method: 'inline_form' });
 */

export const GA_MEASUREMENT_ID = 'G-KT0YQ12H33';
export const CONSENT_STORAGE_KEY = 'cookieConsent';
export const GA_SCRIPT_ID = 'ev-ga4-script';
/**
 * Only the canonical public site should contribute to GA4 reporting.
 * Netlify deploy previews, localhost and other staging hosts must not be tracked.
 */
export function isProductionAnalyticsHost() {
  if (typeof window === 'undefined') return false;
  return window.location.hostname === 'empowervida.com' ||
    window.location.hostname === 'www.empowervida.com';
}


/**
 * Returns true only when the visitor has explicitly granted analytics consent ('all').
 */
export function hasAnalyticsConsent() {
  if (typeof window === 'undefined') return false;
  try {
    return window.localStorage.getItem(CONSENT_STORAGE_KEY) === 'all';
  } catch {
    return false;
  }
}

/**
 * Deletes Google Analytics cookies (_ga, _gid, _gat, _ga_*) across current and parent domains.
 */
export function clearAnalyticsCookies() {
  if (typeof document === 'undefined' || !document.cookie) return;
  const cookies = document.cookie.split(';');
  const host = typeof window !== 'undefined' ? window.location.hostname : '';
  const domainParts = host.split('.');
  const rootDomain = domainParts.length >= 2 ? `.${domainParts.slice(-2).join('.')}` : host;
  const domains = ['', host, `.${host}`, rootDomain];

  for (const rawCookie of cookies) {
    const name = rawCookie.split('=')[0].trim();
    if (/^(_ga|_gid|_gat|_gac_)/.test(name)) {
      for (const d of domains) {
        const domainAttr = d ? `; domain=${d}` : '';
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domainAttr}`;
      }
    }
  }
}

/**
 * Enables and loads GA4 only when optional analytics consent has been granted.
 * Avoids duplicate script tags and duplicate initial page_path config events.
 */
export function enableAnalytics(pagePath) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  if (!isProductionAnalyticsHost() || !hasAnalyticsConsent()) return;

  window[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
  window.dataLayer = window.dataLayer || [];

  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
  }

  if (!window.__evGaConsentGranted) {
    window.__evGaConsentGranted = true;
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  }

  if (
    !document.getElementById(GA_SCRIPT_ID) &&
    !document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)
  ) {
    const script = document.createElement('script');
    script.id = GA_SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }

  const targetPath = pagePath || window.location.pathname;
  if (window.__evLastGaPath !== targetPath) {
    window.__evLastGaPath = targetPath;
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: targetPath,
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure',
    });
  }
}

/**
 * Disables GA4 tracking, revokes analytics_storage consent, removes the GA script tag,
 * and clears existing GA cookies when consent is unset or set to 'necessary'.
 */
export function disableAnalytics() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
  window.__evLastGaPath = null;
  window.__evGaConsentGranted = false;

  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  }

  window.gtag = undefined;

  const existingScripts = document.querySelectorAll(
    `#${GA_SCRIPT_ID}, script[src*="googletagmanager.com/gtag/js"]`
  );
  existingScripts.forEach((node) => node.parentNode?.removeChild(node));

  clearAnalyticsCookies();
}

/**
 * Core event tracking function.
 * Safely calls gtag() only when optional analytics consent is granted and GA is active.
 */
export function trackEvent(eventName, params = {}) {
  if (
    typeof window !== 'undefined' &&
    isProductionAnalyticsHost() &&
    hasAnalyticsConsent() &&
    !window[`ga-disable-${GA_MEASUREMENT_ID}`] &&
    typeof window.gtag === 'function'
  ) {
    window.gtag('event', eventName, {
      send_to: GA_MEASUREMENT_ID,
      ...params,
    });
  }
}

/**
 * Track CTA button clicks with standardised parameters.
 * @param {string} ctaName - Human-readable CTA identifier (e.g., 'hero_explore_protocol')
 * @param {string} location - Where on the page (e.g., 'hero', 'ecosystem', 'footer')
 */
export function trackCTAClick(ctaName, location = 'unknown') {
  trackEvent('cta_click', {
    event_category: 'engagement',
    event_label: ctaName,
    cta_location: location,
  });
}

/**
 * Track outbound link clicks (Substack, social media, affiliate links).
 * @param {string} url - The destination URL
 * @param {string} linkType - Type of link (e.g., 'social', 'newsletter', 'affiliate')
 */
export function trackOutboundLink(url, linkType = 'outbound') {
  trackEvent('outbound_link', {
    event_category: 'outbound',
    event_label: url,
    link_type: linkType,
    transport_type: 'beacon',
  });
}

/**
 * Track newsletter signup (key conversion event).
 * @param {string} method - How they signed up (e.g., 'inline_form', 'popup', 'footer')
 */
export function trackNewsletterSignup(method = 'inline_form') {
  trackEvent('newsletter_signup', {
    event_category: 'conversion',
    event_label: method,
    value: 1,
  });
}

/**
 * Track contact form submission (key conversion event).
 */
export function trackContactFormSubmit() {
  trackEvent('contact_form_submit', {
    event_category: 'conversion',
    event_label: 'contact_page',
    value: 1,
  });
}

/**
 * Track shop/product link clicks.
 * @param {string} productName - Name of the product or protocol clicked
 */
export function trackShopClick(productName) {
  trackEvent('shop_click', {
    event_category: 'ecommerce',
    event_label: productName,
  });
}
