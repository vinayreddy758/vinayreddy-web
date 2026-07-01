# Portfolio Refinement Plan — Vinay Reddy AD

Preserve existing visual identity (colors, typography, layout, Reveal animations). Content, structure and polish only — no redesign. Copy across the site will be tightened: shorter sentences, less filler, same meaning.

## Personal details (wired everywhere)
- Name: **Vinay Reddy AD**
- Phone / WhatsApp: **+91 93532 61314**
- Email: **vinayad1776@gmail.com**
- Portrait: uploaded photo → `src/assets/portrait.jpg`
- Wordmark in `Nav` + `Footer`: "Vinay Reddy AD"

## Hero (`Hero.tsx`)
- 2-line paragraph, tightened.
- Primary CTA **Book a Free Consultation** → `#contact`. Secondary **View Selected Work** → `#work`.
- Trust bar: Replies within 24h · Mobile-first · SEO Ready · Based in India · Serving clients worldwide.
- Reduce bottom padding on mobile.

## About (`About.tsx`)
- Real portrait.
- Badge: **Founder — Freelance Web Designer & Developer**.
- Rewrite body (short, confident, in Vinay's voice — 2–3 tight paragraphs, not 5).
- Add small **Why I Started** block: one short paragraph on helping small businesses build credibility online.

## Services (`Services.tsx`)
- Keep 11 cards + styling.
- Rewrite each description to one outcome-focused line (Business = trust + enquiries, Clinic = patient confidence + bookings, Landing = single conversion goal, Restaurant = menus/ambience + reservations, etc.).

## Projects (`Projects.tsx`)
- Keep case-study layout, image, hover.
- Replace Problem/Solution wall of text with a compact meta block per project: **Industry · Goal · Pages Designed · Key Features**.
- Checklist row: Responsive · SEO Ready · Contact Forms · Performance Optimized.
- Two buttons: **Visit Website** (external), **View Case Study** (anchors to project detail on same section — placeholder `#`).
- Remove any implied fake results.

## Why Work With Me (`WhyMe.tsx`)
- 8 one-line premium cards: Direct Communication · No Outsourcing · Premium UI · Fast Performance · Mobile Optimized · SEO Ready · Long-Term Support · Transparent Pricing.

## Process (`Process.tsx`)
- 7 steps with lucide icons + one concise line each:
  Discovery (Search) · Strategy (Compass) · Design (Palette) · Development (Code2) · Testing (ShieldCheck) · Launch (Rocket) · Support (LifeBuoy).

## Trust (new `Trust.tsx`, placed before Pricing)
- Headline: **Why Businesses Trust Me**.
- 6 short cards: Responsive on Every Device · Performance Focused · Clean Modern Design · SEO Best Practices · Clear Communication · Support After Launch.

## Pricing (`Pricing.tsx`) — full rewrite of tier content
Section title: **Simple & Transparent Pricing**. Each card: **Best for**, **Includes**, **Delivery**, CTA **Request Quote** (→ `#contact`).

**Essential Website — Starting at ₹8k**
- Best for: New businesses, personal brands, landing pages
- Includes: 1–3 pages · Mobile responsive · Contact form · WhatsApp integration · Basic SEO
- Delivery: 5–7 days

**Business Website — Starting at ₹12k · Most Popular**
- Best for: Clinics, salons, restaurants, local businesses
- Includes: Up to 8 pages · Custom design · Contact forms · WhatsApp integration · Google Maps · Basic SEO · Speed optimization · 30 days support
- Delivery: 7–14 days

**Premium Website — Starting at ₹25k**
- Best for: Established businesses needing a stronger online presence
- Includes: Everything in Business · Advanced animations · Blog or CMS · Booking or enquiry system · Premium UI/UX · Performance optimization

Small note under the grid:
> *Domain, hosting, business email, premium third-party services and annual renewals are billed separately and remain the client's responsibility.*

## FAQ
- Remove `FAQ` section, import and nav/footer links.

## Contact (`Contact.tsx`)
- Headline: **Let's Build Something Your Customers Will Trust.**
- Short 1-line intro; average reply within 24 hours.
- Contact block: Email `vinayad1776@gmail.com` · Phone `+91 93532 61314` · WhatsApp button.
- Form **Submit Enquiry** → opens WhatsApp deep-link `https://wa.me/919353261314?text=…` with prefilled name / business / budget / message (validated required fields; no backend/toast flow).

## Footer (`Footer.tsx`)
- Wordmark: Vinay Reddy AD.
- Nav: Projects · Services · Process · Pricing · Contact.
- Contact: Email · Phone · LinkedIn · GitHub (placeholder `#` where unknown).
- Back to Top · Copyright year.

## Nav (`Nav.tsx`)
- Wordmark update, remove FAQ, primary CTA "Book a Free Consultation".

## Responsiveness & spacing
- Trim vertical section padding on mobile (`py-24 → py-16 md:py-24`).
- Guard header rows with `min-w-0` / `truncate` / `shrink-0`.
- Verify 44px min touch targets, check at 360px preview.

## SEO / head
- Update `routes/index.tsx` (and `__root.tsx` defaults where applicable): title/description feature Vinay Reddy AD — Freelance Web Designer & Developer for small businesses.

## Animations
- Keep existing `Reveal` fade-up + subtle hover. Nothing new, nothing flashy.

## Out of scope
- No branding/typography/color changes.
- No fake testimonials, clients, stats, awards or experience claims.
- No backend — WhatsApp deep-link handles enquiries.

**Files touched:** `Hero.tsx`, `About.tsx`, `Services.tsx`, `Projects.tsx`, `WhyMe.tsx`, `Process.tsx`, `Pricing.tsx`, `Contact.tsx`, `Footer.tsx`, `Nav.tsx`, `routes/index.tsx`, `routes/__root.tsx`, new `Trust.tsx`, replace `src/assets/portrait.jpg`. Delete `FAQ.tsx`.
