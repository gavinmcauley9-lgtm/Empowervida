# EmpowerVida — Project Status and Handover

Updated: 2026-10-28

## Mission and editorial standards
EmpowerVida is an Australian health and longevity publication focused on Medicine 3.0 and **Evidence-Led Optimism**: engaging, hopeful medical journalism that clearly distinguishes established evidence, promising research and experimental hypotheses. Use Australian English, verify scientific citations and external/internal links, avoid overstated causal claims and guarantees, and consider AHPRA/TGA obligations. Never fabricate the physician author's personal experiences.

## Publication safety
**Never merge a review PR into main or publish without the user's explicit final approval for that specific change.** Distinguish drafted, integrated, tested, approved, merged and verified live. Verify actual GitHub state before editing; local build success does not prove Netlify deployment.

## Website
Repository: `gavinmcauley9-lgtm/Empowervida`
Stack: Next.js 15 static export, React, Netlify. Articles live in `src/data/posts.js`; preserve existing article IDs/slugs and unrelated posts when editing.

## Completed earlier work
- Blog 1 (id 12): **The Sunscreen–Vitamin D Dilemma: What the Science Says About Sunlight, Mood and Health**, slug `sun-phobia-spf-vitamin-d-mood`.
- Blog 2 (id 10): **The Inflammation Question: Is a Slow-Burning Immune Response Shaping How We Age?**, slug `chronic-inflammation-symptoms-root-cause-fatigue-joint-pain`.
- Both editorial rewrites and navigation fixes passed Antigravity local build/mobile/reference tests. PR #4 merged into `main` at commit `55f4cd252f21402b254e9ac85747e128b20eea46`. **Live Netlify deployment not independently verified.**

## Current work — Blog 3
- Title: **Are Seed Oils Really Bad for You? The Surprising Science of Inflammation and Healthy Ageing**
- Post ID: 9
- Preserve slug: `seed-oils-inflammation-fatigue-weight-gain`
- Branch: `review/seed-oils-evidence-led-optimism`
- Draft PR: https://github.com/gavinmcauley9-lgtm/Empowervida/pull/5
- Integrated article commit: `070a9effadf462f8652924609e5cc8a328b21d51`.
- Editorial draft: `reviews/seed-oils-evidence-rewrite.md`.
- Antigravity reported seven of eight checks passed: desktop/mobile at 320/375/390, heading hierarchy, SEO metadata, five references, internal links, image loading, console. **One critical failure:** old hero `/cell_membrane_stiff_fluid.webp` falsely portrays seed oils causing rigid/diseased cell membranes.
- Replacement hero image generated and optimised as WebP, 1774×887, ~239 KB, in the conversation working files: `/mnt/data/empowervida_seed_oils_hero.webp`. **Not yet installed in GitHub.**
- Proposed destination: `public/seed-oils-hero.webp`; update post 9 `image` to `/seed-oils-hero.webp`. Check whether hero alt text comes from image component and add accurate accessible alt text there. Suggested alt: “Glass bottles of golden cooking oil surrounded by sunflower seeds, flaxseeds, soybeans and flowering oilseed plants.”
- Important: The image is a photographic-style editorial illustration, not proof of a scientific claim. A separate scientifically reviewed membrane diagram is optional, not required for publishing Blog 3.
- After upload, rerun production build, mobile/desktop checks, links and hero image check, and obtain explicit final publication approval.

## Workflow
ChatGPT/GitHub is the primary workspace. Antigravity is a last-resort helper for tasks unavailable through the connected GitHub interface, especially transferring binary image assets and local graphical QA. Avoid repeatedly asking the user to shuttle instructions. Keep status and precise next action here current.

## Visual direction
Premium, cinematic editorial medical and food imagery; navy/teal accents, restrained lighting, clear accessible labels, scientifically neutral presentation. Mobile-first: use responsive hero crops and avoid shrinking complex diagrams with tiny labels. Review old hero graphics in Blogs 1 and 2 for consistency and misleading implications; those updates require a separate review/approval process.

## Immediate next actions
1. Transfer the prepared WebP into `public/seed-oils-hero.webp` on the Blog 3 review branch.
2. Change post 9 image path and inspect hero alt text in rendering component.
3. Verify the build, images, links, and mobile presentation.
4. Present the final article and visual for explicit approval; only then merge PR #5.
