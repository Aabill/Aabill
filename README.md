# Aaron Bill B. Domingo

**Full-stack web developer** · Philippines · working remotely

I build and maintain production web applications — Laravel on the backend, Vue/Nuxt or React/Next on the front, with PostgreSQL or MySQL underneath. Most of my work lives in private repositories, so what follows describes the work rather than linking to it.

---

## What I work on

**Multi-tenant SaaS platforms**
Laravel 13 with Livewire 4 and Flux, tenant isolation via `stancl/tenancy`, Fortify for auth. PDF generation and processing, S3-backed document storage, and a test suite built on Pest with Larastan for static analysis.

**Case management and complaint portals**
Nuxt 4 on Supabase — PostgreSQL with row-level security, multi-language support, accessible form flows, server-side PDF export, and transactional email. Includes an AI-assisted triage step and full end-to-end coverage in Playwright against seeded databases.

**Interactive 3D product configuration**
Next.js 16 and React 19 with Babylon.js and A-Frame for in-browser 3D and WebXR product views. Supabase for data and auth, Zustand for client state, GSAP for motion.

**Long-running B2B commerce platform**
Roughly 1,000 commits across five years on a Laravel + Inertia + Vue application: product catalogue synchronisation between brand and retailer accounts, Algolia-powered search, spreadsheet import/export pipelines, and SOAP integrations with legacy partner systems.

---

## Tech

| | |
|---|---|
| **Backend** | PHP 8.3 · Laravel 7 → 13 · Livewire · Inertia · REST & SOAP integrations |
| **Frontend** | Vue 2/3 · Nuxt 3/4 · React 19 · Next.js · TypeScript · Tailwind CSS 4 · DaisyUI · Alpine.js · GSAP |
| **Data** | PostgreSQL · Supabase (RLS, PL/pgSQL) · MySQL |
| **Testing** | Pest · PHPUnit · Playwright · Vitest · Larastan / PHPStan · Pint · ESLint |
| **Infra** | GitHub Actions · Docker · Nginx · Vercel · AWS (S3, EC2) · DigitalOcean · Deployer |

---

## How I work

- Separate staging and production pipelines on every project, with linting, static analysis and tests gating deploys
- End-to-end tests against seeded databases rather than mocks, where the project allows it
- Conventional commits, pre-commit hooks, and consistent formatting enforced in CI
- AI-assisted development as part of the daily loop, with project context committed alongside the code

---

## Earlier work

Public repositories here are mostly older practice projects and experiments — Laravel CRUD apps, Vue dashboards, Nuxt sites on Netlify, and assorted front-end exercises. They're kept for history rather than as a portfolio.

---

## Contact

📫 **domingoaaronbill@gmail.com**
