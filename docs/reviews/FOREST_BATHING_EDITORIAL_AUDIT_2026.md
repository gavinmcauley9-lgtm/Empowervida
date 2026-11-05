# Forest Bathing — medical editorial review (2026)

**Target:** `src/data/posts.js`, post id 84, slug `forest-bathing-biochemistry-shinrin-yoku`.

**Status:** Audit started; article unchanged. Do not publish until references, copy, imagery and build are checked.

## Priority scientific corrections

1. **NK-cell activity:** The article presents a reported ~50% increase as though it were a general, established response. Check the primary Qing Li studies for exact endpoints, sample size, controls, duration and confounding. Distinguish measured NK-cell activity from clinically proven protection against infection or cancer.
2. **30-day residual effect:** Qualify the small-study observation and avoid implying a reliable month-long immune benefit after one weekend.
3. **Phytoncides and anti-cancer proteins:** Separate hypotheses and mechanistic biomarkers from demonstrated clinical outcomes. Remove any implication that forest air prevents or treats cancer.
4. **Brainwaves, fractals and autonomic effects:** Verify each cited study and avoid claiming that forest exposure directly switches beta to alpha brainwaves or reliably 'resets' the nervous system. Explain uncertainty and individual variation.
5. **Clinical prescription:** Avoid describing forest bathing as a validated medical treatment or 'precise biochemical intervention'. Prefer evidence-informed outdoor activity with possible stress, mood and blood-pressure benefits, noting variable study quality.
6. **Images and attribution:** Verify rights and attribution for images credited to third-party sites. Replace any unlicensed image rather than merely retaining a credit.
7. **References:** Replace empty reference URLs with verified primary or systematic-review sources. Check authors, publication years, titles, DOI/PMID, and whether each source actually supports the linked claim.

## Rewrite and release acceptance criteria

- Plain-English opening and an **In 30 Seconds** summary with 3–4 takeaways.
- An engaging, evidence-led optimism narrative without deterministic mechanisms or medical promises.
- Clear distinction between short-term physiological changes, self-reported wellbeing and long-term health outcomes.
- Practical, accessible suggestions without rigid clinical 'doses' or guaranteed effects.
- Retain existing slug, canonical URL and site navigation.
- Verify Australian English, medical disclaimer, AHPRA/TGA-sensitive claims, mobile layout and links.
- Run the production build and preview before requesting merge.

## Publication sequencing

Keep this on a dedicated review branch. Complete the scientific copy and reference verification, then preview. PR #9 (insulin resistance) and PR #7 (taurine) remain independent drafts.
