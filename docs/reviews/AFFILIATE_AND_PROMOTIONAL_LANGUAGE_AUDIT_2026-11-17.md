# EmpowerVida commercial-language and affiliate-removal audit — 17 November 2026

## Scope and method
Read the current `main` branch, scanning 46 selected production source files (31 view/component files and 15 route/app/component files), including the complete `src/data/posts.js` collection (67 entries). Searched for iHerb, referral codes, affiliate language, commercial calls to action, branded supplement-stack language, and medical-product endorsements. Also enumerated external URL domains in the Journal collection. This is a targeted source audit, **not** a comprehensive validation of all content, external links, production HTML, generated assets, or historical drafts.

## Confirmed findings

### P0 — remaining affiliate promotions
`src/data/posts.js`, Forest Bathing article (`id: 84`), contains **two** iHerb referral URLs with `rcode=FKX4668`, accompanying referral-code language and product recommendations. These are incompatible with the November 5 shop/affiliate suspension. The same article also uses `doctor-verified nutraceuticals` and `therapeutic-grade` claims. **Remediation drafted in PR #56; not yet merged.**

### P1 — clinical and promotional wording
The Forest Bathing article contains strong clinical assertions from small mechanistic and observational studies, including immune-cell changes, alpha/theta brainwaves and a claimed two-hour threshold. PR #56 proposes more measured language; independent source verification remains outstanding.

Several supplement pairing excerpts in `src/data/posts.js` use the phrase `medical protocols for dosing` (examples around lines 6108, 6639, 7264, 7873, 8484). These are not affiliate links, but warrant later editorial review for implied medical advice and accuracy.

### P2 — legacy wording, not evidence of active selling
`src/views/Privacy.jsx` states that affiliate links have been suspended, which is consistent with the policy.
`src/views/TermsConditions.jsx` includes ordinary legal uses of `affiliates` and `We recommend you read...`; these are not product endorsements.
`src/views/DiagnosticsPortal.jsx` suggests third-party labs; review for international applicability and accuracy, but no direct referral URL was identified by the keyword scan.

## Link inventory
In `src/data/posts.js`, the only clearly commercial domain identified in the enumerated HTTP(S) links was `uk.iherb.com` (2 URLs). Other observed domains primarily link to research or public health organisations, including PubMed and DOI. This does not guarantee that every link is accurate, functional, non-commercial or complete.

## Status and next steps
1. Finish scientific reference verification and review PR #56, then merge and verify live deployment.
2. Review flagged supplement-pairing excerpts one article at a time.
3. Extend checks to generated production HTML, any static or historical pages, and a broader link-validation crawl before declaring the entire site affiliate-free.
4. Add an automated CI check for referral parameters/domains and explicitly prohibited commercial phrases to prevent recurrence.

No claims are made here that the entire repository or live site is clean.
