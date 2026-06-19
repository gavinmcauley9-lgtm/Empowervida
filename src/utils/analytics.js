/**
 * GA4 Analytics Utility for EmpowerVida
 * Centralised event tracking for all conversion-critical interactions.
 * 
 * Usage:
 *   import { trackEvent, trackCTAClick, trackOutboundLink } from '../utils/analytics';
 *   trackEvent('newsletter_signup', { method: 'inline_form' });
 */

const GA_MEASUREMENT_ID = 'G-KT0YQ12H33';

/**
 * Core event tracking function.
 * Safely calls gtag() only if it exists (respects cookie consent / ad blockers).
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
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
    transport_type: 'beacon', // Ensures event fires even on page unload
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
