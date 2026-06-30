## Direction

Build the chosen "Editorial Bold" direction as a single-page premium portfolio for a freelance web designer/developer. Tone: confident, trustworthy, agency-grade — never developer-resume.

Per the user's note, frame it as a **personal portfolio** with a clear "the person behind the work" block (photo + name + role + short bio) — not anonymous studio branding.

## Tokens (locked from the chosen direction)

- Primary `#2563EB`, accent `#F97316` (used sparingly for emphasis only), neutrals white/black/zinc.
- Type: Inter (400/600/800) + JetBrains Mono for small labels.
- Rounded-2xl cards, soft shadows, generous whitespace.
- Subtle fade-up scroll reveal, hover lift on cards.

Tokens go into `src/styles.css` (oklch where required by template) and Inter + JetBrains Mono load via a `<link>` in `__root.tsx` head (per Tailwind v4 rule against remote `@import`).

## Page structure (single route `/`)

1. **Sticky nav** — wordmark left, "Start a project" pill right. Anchor links to sections.
2. **Hero** — Editorial headline ("Building high-performing websites for *ambitious* small businesses."), supporting line, primary CTA → contact, secondary "See work" → projects.
3. **About / Personal block** *(new per user direction)* — left: portrait photo placeholder (square, rounded-2xl); right: mono eyebrow "About", name "[Your Name]", role line, the 5-paragraph bio verbatim, small tag row (Freelance · Available worldwide · Replies in 24h). Photo is a `data-lov-image-placeholder` so a real portrait is generated.
4. **What I Do (Services)** — modern card grid, all 11 items: Business Websites, Landing Pages, Clinic Websites, Restaurant Websites, Portfolio Websites, Website Redesign, Website Maintenance, Responsive Design, SEO-Friendly Development, WhatsApp Integration, Contact Forms.
5. **Featured Projects** — dark section (`bg-neutral-900`), 3 large project cards stacked, each with screenshot, category chip, accent chip, title, problem→solution copy, key feature bullets, "Visit Website ↗" link:
   - Trust Advocate → https://trust-advocate-web.lovable.app/
   - GlowCare → https://glowcare-site.lovable.app/
   - Prestige Events → https://prestigeeevents.com/about.php
6. **Industries Served** — chip grid: Clinics, Doctors, Salons, Restaurants, Law Firms, Real Estate, Gyms, Hotels, Educational Institutions, Local Businesses, Startups.
7. **My Approach (Process)** — clean numbered timeline, all 7 steps (Understand → Plan UX → Design → Develop → Test → Launch → Support).
8. **Why Work With Me** — premium feature cards, all 8 items (Business-focused, Premium design, Mobile-first, Fast, SEO-ready, Clean UX, Reliable communication, Post-launch support).
9. **Pricing** — three transparent tiers (Starter / Professional / Custom) with what's included. No fake numbers presented as guarantees — clearly framed as "from".
10. **FAQ** — accordion with ~6 honest questions (timeline, revisions, content, hosting, support, payments).
11. **Contact** — brand-blue panel, headline "Let's Build a Website That Grows Your Business", form (name, email, business type, message), submit button. Form is client-side only (toast on submit) — no backend wiring requested.
12. **Footer** — wordmark, nav links, copyright. No fake socials/testimonials/stats.

## Component breakdown

- `src/routes/index.tsx` — composes sections, sets per-page SEO (title, description, og:title, og:description).
- `src/components/site/` — `Nav.tsx`, `Hero.tsx`, `About.tsx`, `Services.tsx`, `Projects.tsx`, `Industries.tsx`, `Process.tsx`, `WhyMe.tsx`, `Pricing.tsx`, `FAQ.tsx`, `Contact.tsx`, `Footer.tsx`.
- Reuse existing shadcn `accordion`, `button`, `input`, `textarea`, `sonner` (toast).
- Subtle scroll-reveal via a small `useInView` + `IntersectionObserver` hook (no new dependency).

## Image assets

Generate with `imagegen` and save under `src/assets/`:
- `portrait.jpg` — professional male/neutral portrait, soft natural light, neutral background (about section).
- `trust-advocate.jpg`, `glowcare.jpg`, `prestige-events.jpg` — clean device/browser mockups reflecting each site's category.

All imported as ES6 image imports, no remote URLs in JSX.

## Copy guardrails

- Never mention HTML/CSS/JS/React/Next, "passionate developer", "coding since childhood", "available for hire", "student", "beginner".
- No invented testimonials, awards, client logos, or numeric stats.
- Confident, value-led wording focused on trust, enquiries, growth.

## Out of scope

- No backend, no Lovable Cloud, no auth, no DB — purely a marketing site.
- Contact form shows a success toast; no email sending.
- Dark-mode toggle not requested; light theme only.

## Technical notes

- TanStack Start route in `src/routes/index.tsx` replaces the placeholder.
- Fonts via `<link>` in `__root.tsx` head.
- Single `<h1>` (hero), semantic section/h2 headings, alt text on all images.
- Responsive: mobile-first matching the chosen prototype, expanded to comfortable desktop grids at `md:`/`lg:`.

## One open detail

I'll need a real name to put on the About block. I'll use the placeholder **"Your Name"** with a `{/* TODO: replace */}` comment so you can swap it in one place — unless you'd like me to use a specific name now.
