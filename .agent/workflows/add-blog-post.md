---
description: How to add a blog post to the EMPOWERVIDA website — content preservation is the #1 priority
---

# Adding a Blog Post to EMPOWERVIDA

## ⚠️ RULE #1: ABSOLUTE CONTENT PRESERVATION

**The user's article content must be inserted EXACTLY as provided — word for word, paragraph for paragraph, with ZERO truncation, condensing, summarising, or omission.**

This is the highest priority rule. Violating this rule is unacceptable.

### Specific Requirements:

1. **Do NOT condense, shorten, summarise, or abbreviate any section of the article**
2. **Do NOT rephrase or reword any sentences** — use the user's exact wording
3. **Do NOT omit paragraphs, bullet points, or sections** even if they seem redundant
4. **Do NOT merge sections together** — preserve the original structure
5. **Every heading, subheading, paragraph, list item, and sentence must be present** in the final output
6. **If the article is very long, split the insertion into multiple steps** (e.g., first half, then second half) to avoid any context-related truncation
7. **After insertion, perform a verification step:**
   - Count the number of H2 headings in the original vs inserted content
   - Count the number of paragraphs in the original vs inserted content
   - Report both counts to the user for confirmation
8. **If in doubt, ask the user** rather than making assumptions about what to include/exclude

### Formatting Rules:

- Wrap paragraphs in `<p>` tags with appropriate inline styles
- Wrap headings in `<h2>` tags with appropriate inline styles
- Wrap lists in `<ul>` or `<ol>` tags
- Use `<strong>` for bold text
- Use `<em>` for italic text
- Preserve any clinical callout boxes, disclaimers, or special formatting the user specifies
- Add the standard Medical Disclaimer box at the end if not already present

### Post Metadata:

Each post needs the following fields in `posts.js` or `humanized_posts.js`:
- `id` — next available integer
- `title` — the article's title (as provided by user)
- `category` — appropriate category from CATEGORIES
- `image` — appropriate image path
- `excerpt` — a compelling meta description (confirm with user)
- `date` — publication date
- `references` — array of citation objects with `text` and `url` fields (ALL must have valid URLs)
- `content` — the FULL article content in HTML (template literal)

### Verification Checklist (MUST complete before confirming to user):

- [ ] All original headings are present
- [ ] All original paragraphs are present
- [ ] All original list items are present
- [ ] All original citations/references are included with valid URLs
- [ ] Word count of inserted content approximately matches original
- [ ] Medical disclaimer is present
- [ ] No sections were merged, shortened, or rephrased
