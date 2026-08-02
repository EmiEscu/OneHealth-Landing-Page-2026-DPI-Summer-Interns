# DPI OneHealth Landing Page

The public landing page for the DPI One Health program — introducing One Health to K-12 students, undergraduates, and educators, and routing each audience to the right program.

**Status:** 🚧 In development

**Live site:** Not yet deployed

**Design file:** https://www.figma.com/design/CuN1XZpOwCQJgZieCWlcyg/Wireframe-for-One-Health?node-id=49-293&t=774BgJfIDF0duMvz-1 

---

## Table of Contents

- [About the Project](#about-the-project)
- [Audiences](#audiences)
- [Goals & Success Criteria](#goals--success-criteria)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
  - [Resolved decisions](#resolved-decisions-from-the-wireframe-review)
  - [Still open](#still-open)
- [Design](#design)
- [Content](#content)
- [Accessibility](#accessibility)
- [Development Workflow](#development-workflow)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Team](#team)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## About the Project

- What One Health is:

    One Health is the study of Animal, Enviromental, and Humans Health. The purpose of One Health is to understand how these three pillars corrilate to one another to impact the health of the Earth as a whole.

- What the DPI One Health *program* does (the educational program itself): 

    Our mission at the DPI One Health program is to educate K-12 and Undergraduate college students about the vital connections between human, animal, and environmental health. We aim to inspire an informed generation equipped to make better decisions for our planet.
    
- What this *repository* does:

    The purpose of this repository is to simply create a DEMO landing page for the `High School` and `Under Grad` One Health programs.
    
    - Simple summary of the program
    - Guide on what the program has to offer
    - Links to the actual program
    - A dedicated Support page (FAQ + contact form) to learn more about the program
        
- Who is behind it (DPI, summer 2026 intern cohort, sponsoring department):

    - Host: Rukmini, and DPI
    - Interns: Emily, and Emiliano

### What this repo is *not*:

- Not the learning platform / course delivery system
- Not a CMS — copy is hand-written directly in `index.html` / `curriculum.html`; drafts are staged in `docs/content/` before going in
- Not the application/registration portal (links out to <where?>) 

---

## Audiences

This site serves distinct audiences with different reading levels, goals, and calls to action. Every page and component should be traceable to one of them.

| Audience | What they need | Primary CTA | Tone / reading level |
|---|---|---|---|
| K-12 students | Simple explanation of One Health, fun/visual examples, sense of "this could be for me" | "Join the High School Network" (or "Start Your One Health Journey") | Playful, ~5th–7th grade reading level, short sentences |
| Undergraduate students | What does the program actually involve, credit/time commitment, how do I apply | "Join the Undergrad Network" (or "Start Your One Health Journey") | Serious and Actionable, Under Grad reading level, short sentences |

> **Confirmed from Figma:** "High School Lab" and "Undergraduate Lab" (seen as quick-nav buttons in the Curriculum page hero, and again as headings on `curriculum.html`) are navigation into each track's section — not the sign-up action. The actual registration CTAs are the buttons at the end of each track's section: "Join the High School Network" / "Start Your One Health Journey" for K-12, and "Join the Undergrad Network" / "Start Your One Health Journey" for Undergrad. 


**Where these buttons link:** `curriculum.html` — deliberately the curriculum rather than a sign-up form, so students see what the program involves before committing. See [Resolved decisions](#resolved-decisions-from-the-wireframe-review).

**How the two tracks are separated in the UI:** Both K-12 and Undergraduate content live on the same page — [`curriculum.html`](#project-structure) — each occupying its own section ("High School Lab" and "Undergrad Lab"). They are not separate routes/pages. See [Project Structure](#project-structure) for the full page/section breakdown.

---

## Goals & Success Criteria

**Goals**

1. Explain One Health clearly to a K-12 & Undergraduate students in under 60 seconds of reading the Landing Page.

2. Get an interested student to the right program's sign-up in ≤ 2 clicks.

3. Give educators something credible to forward to their department. 

**Non-goals**
<!-- Things you are deliberately not doing in v1. -->

1. No heavy information: A students is not shown paragraphs of Academic information of One Health. All content should be reserved for the program other than Demo datasets and games.


**How we'll know it worked**
1. Sign-up click-through rate

2. Loads in under 2s on a school Chromebook over 4G



---

## Tech Stack

No framework, no backend, no database. This is a static, content-driven landing page — the actual program logic lives elsewhere. So the whole point is to keep the pipeline as thin as possible: write HTML/CSS/JS, push to GitHub, GitHub Pages serves it. No build step to learn, no npm dependency tree to maintain, nothing to go stale.

| Layer | Choice | Why |
|---|---|---|
| Framework | None — plain HTML/CSS/JS | No login, no dynamic data, no app state to manage. A framework (React, Next.js) buys you nothing here and adds a build step + new syntax to learn on your first project. |
| Language | HTML5, CSS3, vanilla JavaScript | Runs directly in the browser — no compiler, no transpiler. What you write is what ships. |
| Styling | Plain CSS with custom properties (`:root { --color-primary: ... }`) | Keeps colors/fonts from the Design Tokens section in one place without needing a CSS framework. Add Tailwind later only if hand-written CSS starts feeling slow. |
| Routing | Four static HTML pages (`index.html`, `curriculum.html`, `interactive-center.html`, `support.html`), linked by `<a href>`; K-12 and Undergrad are `<section id="...">` anchors within `curriculum.html` (e.g. `curriculum.html#high-school-lab`) | No client-side router needed — see [Project Structure](#project-structure) for the confirmed page/section layout. Real `.html` files also means each page is independently indexable and shareable. |
| Forms | [Formspree](https://formspree.io) (free tier) for the FAQ/contact form, or a plain `mailto:` link if you want zero third-party dependency | There's no backend to receive form submissions, and building one is out of scope for a landing page. Formspree emails you the submission with one `<form action>` attribute — no server code. |
| Analytics | [Plausible](https://plausible.io) or Google Analytics (GA4), added as a single `<script>` tag | Answers your "sign-up click-through rate" success metric without any backend. Plausible is simpler and more privacy-friendly if DPI doesn't require GA specifically. |
| Hosting | GitHub Pages | Free, deploys straight from this repo, no separate hosting account to set up. Settings → Pages → deploy from `main` branch. Pairs naturally with a GitHub-hosted student project. |
| Linting / formatting | [Prettier](https://prettier.io) (optional, via the VS Code extension) | Auto-formats HTML/CSS/JS on save so multiple interns' code looks consistent — no command-line setup required. |
| Testing | None | Not worth it for static marketing content. Verify by opening the page and clicking through it (see [Definition of Done](#development-workflow)) rather than writing automated tests. |

---

## Getting Started

This is a **draft/demo landing page** — plain HTML, CSS, and JavaScript, no framework and no build step (see [Tech Stack](#tech-stack) for why). Its job is to explain the program and route interested students toward sign-up; the actual application/enrollment process will live on a separate site once the program is live. Because there's no real backend or account system to stand up, there's also nothing to build or compile — you edit files and open them in a browser.

### Prerequisites

- A web browser (Chrome, Edge, Firefox, Safari — anything recent)
- [VS Code](https://code.visualstudio.com/) (or any text editor)
- [Git](https://git-scm.com/)
- Recommended: the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VS Code extension, for auto-reload while editing

No Node.js, no npm, no package manager — there's no JavaScript tooling to install because there's nothing to compile.

### Installation

```bash
git clone https://github.com/EmiEscu/OneHealth-Landing-Page-2026-DPI-Summer-Interns.git
```

```bash
cd OneHealth-Landing-Page-2026-DPI-Summer-Interns
```

That's it — no install step. The repo is the site.

### Running locally

Two ways to preview the page, easiest first:

1. **Live Server (recommended):** in VS Code, right-click `index.html` (or any of the site's four pages — see [Project Structure](#project-structure)) → "Open with Live Server." It opens in your browser and auto-refreshes every time you save a file.
2. **Open directly:** double-click any `.html` file in File Explorer to open it straight in your browser. Works fine for quick checks, but you'll need to manually refresh after each edit, and any JavaScript that expects to `fetch()` local files may be blocked by the browser's file:// security rules.

### Deploying a preview

Since hosting is GitHub Pages (see [Deployment](#deployment)), every push to `main` updates the live draft automatically — there's no separate "build and deploy" command to run.

---

## Project Structure

Flat and static, matching the plain HTML/CSS/JS choice above — no `src/`, no build output folder, because nothing here gets compiled or bundled. GitHub Pages serves these files exactly as they sit in the repo. Keep this tree in sync with reality as pages get added; a stale tree is worse than none.

The site is **four pages**, confirmed directly from the Figma wireframe exports (`docs/design/`) — matching the nav bar present on every page: Home | Curriculum Modules | Interactive Center | Support. Each page is a single `.html` file — sections live inside that file as `<section id="...">` blocks (not separate files; see [Getting Started](#getting-started) for why), which also gives each section a stable anchor link (e.g. `curriculum.html#high-school-lab`).

```
OneHealth-Landing-Page-2026-DPI-Summer-Interns/
├── docs/                   # Design notes, content drafts, meeting decisions — not part of the live site
│   ├── design/             # Figma exports, screenshots of the approved draft
│   └── content/            # Copy decks before they move into the site
├── assets/
│   ├── images/             # Photos, illustrations
│   ├── icons/              # SVG icons, favicon source
│   └── fonts/              # Any self-hosted font files
├── css/
│   ├── tokens.css          # Design tokens as CSS custom properties (colors, type scale, spacing)
│   └── styles.css          # Shared site styles
├── js/
│   └── main.js             # Any interactivity (nav toggle, FAQ accordion, arcade game embeds, etc.)
├── index.html              # Home page — see section breakdown below
├── curriculum.html         # Curriculum Modules page — see section breakdown below
├── interactive-center.html # Interactive Center page — see section breakdown below
├── support.html            # Support page (FAQ + contact form) — see section breakdown below
├── favicon.svg
├── robots.txt
├── .gitignore
├── LICENSE
└── README.md
```

**Page → section breakdown** (confirmed against the actual Figma exports in `docs/design/`):

| Page | Sections |
|---|---|
| `index.html` (Home) | Hero ("Mission & Vision"), About Us (Breaking Down Silos / Proactive Prevention / Interactive Mastery), "One Health in Everyday Life" (dashboard teaser → links to Interactive Center), Current Roadmaps (K-12 vs. Undergrad teaser comparison — links into `curriculum.html`), CTA band ("Three kinds of health. One unified framework."), FAQ (accordion), Community Impact (Meet the Scholars / Faculty / Health Departments / Partner with Us), Footer |
| `curriculum.html` (Curriculum Modules) | Hero ("Ready to Begin your learning?" — quick-nav buttons to High School Lab / Undergraduate Lab / FAQ / Contact Us), High School Lab (module roadmap 1-4 + descriptions), One Health Arcade (Catch the Virus / Eco-System Rescue games — **also appears on Interactive Center, see open question below**), CTA band ("Step Outside the Classroom. Impact the World."), Undergrad Lab (5-step roadmap: Intro to One Health → Data/Dashboards/Health Equity → Values & Ethics → Systems Thinking → Capstone Project), Career Advantages of One Health (High Earning Potential / Standout Resume / Workplace Readiness), Footer |
| `interactive-center.html` (Interactive Center) | Hero ("The Interactive Center"), Live Dashboards (Human Outbreak / Animal Recorded Cases / Environmental Records tabs), One Health Arcade (same games as `curriculum.html`), Footer |
| `support.html` (Support) | Hero ("Have Any Questions?" + FAQ button), Contact form (Name, Surname, Email, Message, Submit) |

### Resolved decisions from the wireframe review

1. **One Health Arcade / Live Dashboards are duplicated on purpose.** Both appear on `curriculum.html` and `interactive-center.html`. The Interactive Center is intentionally the one page that gathers every interactive section of the site in a single place; the copies on other pages are teasers pointing into it.
2. **Links with no page on this site point to the live One Health Scholars site** — <https://gihri.github.io/one-health-scholars/>, which already hosts them:

   | Link on this site | Destination |
   |---|---|
   | Footer → Team | `.../team.html` |
   | Footer → Faculty | `.../faculty.html` |
   | Footer → Project | `.../project.html` |
   | Footer → Home | `index.html` (this site) |
   | Footer → Contact Us | `support.html` (this site) |
   | Meet the Scholars | `.../students.html` ("Student Ambassadors," 2026 cohort) |
   | Meet the Faculty | `.../faculty.html` |
   | Meet the Health Departments | `.../lhd.html` ("Partner Health Departments") |
   | Partner with Us | `.../contact.html` — ⚠️ best guess, no dedicated partner page exists; confirm |

3. **Registration CTAs point to `curriculum.html`, not a sign-up form.** "Start Learning," "Join the High School Network," and "Join the Undergrad Network" all route to the curriculum so prospective students understand the program before committing. The external registration portal is still out of scope for this repo.
4. **Filenames confirmed:** `index.html`, `curriculum.html`, `interactive-center.html`, `support.html` — matching the nav labels shown in the address bar.

### Still open

- **High School roadmap content** — not yet supplied by the program team; `index.html` and `curriculum.html` both carry a visual placeholder until it exists.
- **Brand assets** — logo, section photography, dashboard map visual, and the three footer social icons are all placeholders pending real files in `assets/`.
- **Breakpoint values** — see [Design → Breakpoints](#design); `styles.css` currently uses a provisional 900px.

### Where things go

| If you're adding… | Put it in… |
|---|---|
| A new top-level page (rare — confirm with the team first, since the site is intentionally just these four) | A new `.html` file at the repo root |
| A new section on an existing page | A new `<section id="...">` inside the relevant `.html` file — not a new file |
| Shared styling (colors, fonts, spacing) | `css/tokens.css` |
| Styling for one page or section only | `css/styles.css`, scoped with a class name |
| Any click/toggle/interactive behavior | `js/main.js` |
| A photo or illustration used on the page | `assets/images/` |
| An icon | `assets/icons/` |
| Figma exports or content drafts (not live on the site) | `docs/design/` or `docs/content/` |

---

## Design

**Figma file:** https://www.figma.com/design/CuN1XZpOwCQJgZieCWlcyg/Wireframe-for-One-Health?node-id=49-293&t=m2FdcOKgLDi4ALkD-1



### Design tokens


**Colors**

| Token | Hex | Used for |
|---|---|---|
| `--color-primary`            | 13294B | |
| `--color-secondary`          | FFFFFF | |
| `--color-accent`             | E84A27 | |
| `--color-human-domain`       | C2453B | |
| `--color-animal-domain`      | C98A2B | | 
| `--color-environment-domain` | 3E7C59 | |

**Typography**

| Role | Font |
|---|---|
| Heading | Newsreader | 
| Body | Inter | 

**Breakpoints**

| Name | Min width |
|---|---|
| Mobile | <!-- FILL --> |
| Tablet | <!-- FILL --> |
| Desktop | <!-- FILL --> |

### Assets

<!-- FILL: Where the logo files, photography, and illustration live; who owns the
     rights; any usage rules from DPI's brand guidelines. -->

---

## Content

<!-- FILL: Who writes the copy, who approves it, and where the approved version lives.
     Note whether any content is subject to review (e.g. anything describing the
     K-12 program may need faculty or district sign-off before it goes public). -->

The Curriculum Modules page shows a **roadmap and module descriptions only** — what a student can expect to learn and the takeaways per module. It is not the course delivery platform itself (see [What this repo is not](#about-the-project)); actual coursework happens elsewhere.

| Page | Sections | Owner | Status |
|---|---|---|---|
| `index.html` (Home) | Hero, About Us, "One Health in Everyday Life," Current Roadmaps, CTA band, FAQ, Community Impact, Footer | Emiliano | Draft |
| `curriculum.html` (Curriculum Modules) | Hero, High School Lab, One Health Arcade, CTA band, Undergrad Lab, Career Advantages, Footer | Emiliano | Draft |
| `interactive-center.html` (Interactive Center) | Hero, Live Dashboards, One Health Arcade, Footer | Emiliano | Draft |
| `support.html` (Support) | Hero, Contact form | Emiliano | Draft |

See [Project Structure](#project-structure) for the full section-by-section breakdown and the open questions about the duplicated Arcade section and the unresolved Team/Faculty/Project footer links.

---

## Accessibility

This site is used by minors and will likely be viewed on school-issued devices, so accessibility is a requirement, not a nice-to-have.

**Target:** <!-- FILL: WCAG 2.1 Level AA -->

Checklist before any PR merges:

- [ ] All images have meaningful `alt` text (or `alt=""` if decorative)
- [ ] Color contrast ≥ 4.5:1 for body text, ≥ 3:1 for large text
- [ ] Every interactive element is reachable and operable by keyboard alone
- [ ] Visible focus indicator on all focusable elements
- [ ] Headings run in order (`h1` → `h2` → `h3`), no skipped levels
- [ ] Forms have real `<label>` elements, not just placeholders
- [ ] Page is usable at 200% zoom
- [ ] Respects `prefers-reduced-motion`

**Browser support:** last 2 versions of Chrome, Edge, Safari, Firefox

---

## Development Workflow

### Branching

<!-- FILL: e.g.
     - `main` — always deployable, protected
     - `dev` — integration branch
     - `feature/<short-name>` — one feature or section per branch -->

### Commit messages

<!-- FILL: e.g. Conventional Commits — feat:, fix:, docs:, style:, refactor:, chore: -->

### Pull requests

<!-- FILL: e.g. at least one reviewer, CI green, screenshots for any visual change,
     link the Figma frame the PR implements. -->

### Definition of done

- Matches Figma Design
- Runs in a browser  

---

## Deployment

**Host:** GitHub Pages

**Production URL:** Under Construction

**Preview builds:** None. GitHub Pages only serves one branch at a time, so there's no automatic per-PR preview URL. To review someone else's change before merging, pull their branch and open `index.html` locally (or with Live Server) — see [Getting Started](#getting-started).

**Deploy trigger:** Automatic. Every push to `main` updates the live site within a minute or two — no build step, no manual publish action, because the repo *is* the site (plain HTML/CSS/JS, nothing to compile).

**One-time setup (do this once the site has a real `index.html`):**
1. On GitHub, go to the repo → **Settings → Pages**
2. Under "Build and deployment," set **Source** to `Deploy from a branch`
3. Set **Branch** to `main`, folder `/ (root)`
4. Save — GitHub publishes the URL above within a few minutes

**No environment variables, no secrets, no DNS configuration** — this is a static demo site with no backend, so there's nothing sensitive to configure. If DPI later wants a custom domain (e.g. `onehealth.dpi.org`) instead of the default `github.io` URL, that's a CNAME record added in Pages settings — flag it here once that decision is made.

---

## Roadmap

- [x] Finalize Figma draft 
- [x] Scaffold project + design tokens 
- [ ] Build shared layout (header, footer, nav) 
- [ ] K-12 program section 
- [ ] Undergraduate program section 
- [ ] Responsive pass 
- [ ] Accessibility audit 
- [ ] Deploy to production 

---

## Team

| Name | Role | Contact |
|---|---|---|
| Avadhanam, Rukmini   | Host/Manager |  |
| Amezcua-Bravo, Emily | Intern       |  |
| Escutia, Emiliano    | Intern       |  |

**Program contact:** <!-- FILL: who to email about the One Health program itself, as
opposed to the website -->

---

## License

<!-- FILL: Pick one and add the matching LICENSE file. If DPI/the university owns
     the work, say so explicitly instead of dropping in MIT by default. -->

---

## Acknowledgments

<!-- FILL: Advisors, sponsoring department, funding source, anyone whose photos or
     illustrations you're using. -->
