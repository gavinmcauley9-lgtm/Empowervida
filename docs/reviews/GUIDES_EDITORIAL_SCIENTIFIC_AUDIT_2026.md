# EmpowerVida Guides — editorial and scientific audit (6 November 2026)

Status: editorial review only; no guide copy or public URLs changed. Scope: current main-branch source in src/views/MitochondrialGuide.jsx, src/views/LongevityGuide.jsx, navigation and guide metadata. The Insulin Story and Advanced Diagnostics need their own full audits.

## Priority 1 — Mitochondrial Guide (high)

1. **Medical claims in FAQ structured data**: Claims that mitochondria determine the rate of ageing, and that nonspecific fatigue or brain fog indicate mitochondrial underproduction of ATP, are misleading. Fatigue and brain fog have many causes. Rewrite as cautious, non-diagnostic explanations.
2. **Supplement 'core stack' with doses**: FAQ promotes CoQ10, ALCAR, PQQ, alpha-lipoic acid, NMN/NR and creatine as a synergistic evidence-based stack. There is no established clinical evidence for such a combination to improve longevity in generally healthy adults. Remove the protocol and doses from FAQ; discuss each intervention by outcome and evidence quality in the body.
3. **NAD+**: FAQ says NAD+ declines 50% by age 40 and that NMN/NR improves energy, cognition and metabolic health. The exact population-wide decline and clinical benefits are not established. Distinguish raising biomarkers from improving patient outcomes.
4. **Causality**: Phrases such as 'That 2:00 PM wall? ... your cellular engines running on fumes' turn a metaphor into an unsupported diagnosis. Retain the approachable engine analogy but label it an analogy and avoid diagnosing symptoms.
5. **Fisetin**: Claims of senolytic action in humans, '25x better absorption' and proposed pulsed dosing need strong human evidence and product-specific substantiation; otherwise remove. Do not promote liposomal product superiority as established.
6. **ME/CFS and neurodegenerative disorders**: Separate mechanistic hypotheses and associations from proven causal explanations or therapies.
7. **Copy quality**: Correct 'Manageing', 'damageing', inconsistent 'Glutathione' capitalization and promotional language ('most expensive phase', 'for those serious'). Replace sales-funnel structure 'fuel/protect/rebuild' with 'how mitochondria work / what can go wrong / what human evidence supports'.

## Priority 2 — Longevity Guide (medium-high)

1. Opening contrasts vegetables with manipulating mTOR/AMPK; too jargon-heavy and risks dismissing foundational prevention. Open with accessible healthspan and proven measures.
2. '12–16 hour fasting windows trigger cellular recycling' asserts human autophagy effects not demonstrated by clinically meaningful endpoints. Qualify mechanistic research; discuss limitations and suitability.
3. Sleep section gives rigid sleep-stage percentages and latency targets as if universal clinical goals. Remove or contextualize consumer tracker variability and individual differences.
4. 'Scrubs neurotoxins (amyloid and tau proteins)' overstates direct evidence about human sleep and Alzheimer's prevention; describe emerging glymphatic research cautiously.
5. Pillar 5 groups supplements, senolytics and off-label prescriptions with interventions supported by stronger evidence. Separate established prevention from experimental longevity interventions; explain risks and gaps.
6. Improve heading hierarchy, glossary, scannable summaries, clinical references and consistent editorial styling.

## Shared design, accessibility and SEO

- Guides dropdown is a hover-oriented span rather than a semantic keyboard-operable button; test touch, keyboard and focus behavior. Preserve existing guide URLs and internal links.
- Both guide page metadata files use an Open Graph image URL ending in '/water_refraction.png/' (trailing slash after image extension), which appears malformed. Verify actual image asset and fix URL.
- Use consistent hero treatment, readable type, section navigation and responsive scientific figures. Avoid generic decorative images and unsupported mechanism diagrams.
- Validate all citations, dates and external URLs before publishing. Run build, 320/375/390px checks, keyboard navigation and Netlify preview. No medical copy should ship without evidence review.

## Recommended execution

1. Rewrite Mitochondrial Guide and its FAQ schema to match cautious human-outcome evidence, retaining the route and valuable illustrations.
2. Rewrite Longevity Guide with plain-English opening and tiered evidence.
3. Audit Insulin Story and Advanced Diagnostics separately, including their links from Guides dropdown.
4. Run build, accessibility and visual checks; request explicit publication approval.
