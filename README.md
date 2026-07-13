# Kshitij Dani — personal site

Portfolio and writing archive for [Kshitij Dani](https://kshitijdani.github.io), a software engineer and AI systems researcher based in Seattle.

## What is here

- Selected engineering and research case studies
- Professional experience, education, and recognition
- A text-first résumé and downloadable PDF
- The original 2020 blog, migrated without rewriting its voice
- Semantic metadata, structured profile data, RSS, sitemap, and machine-readable profile endpoints

## Local development

```bash
npm install
npm run dev
```

The production build is generated with:

```bash
npm run build
```

## Content

- `src/content/work/` — case studies
- `src/content/writing/` — published writing and retained drafts
- `src/data/profile.ts` — experience, education, awards, and profile facts
- `public/archive/legacy-blog/` — verbatim copies of the original Jekyll posts

The site deploys to GitHub Pages through `.github/workflows/deploy.yml`.
