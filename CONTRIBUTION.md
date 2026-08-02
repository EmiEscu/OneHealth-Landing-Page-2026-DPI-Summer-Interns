# Contributing to Landing One Health Page

Thank you for contributing to One Health Landing page! This guide explains our development workflow and standards.


## Commit Message Convention

We use [Conventional Commits](https://www.conventionalcommits.org/). Every commit message must follow this format:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:** `fix`, `feat`, `docs`, `style`, `refactor`, `perf`, `chore`, `a11y`

**Scopes:** `home`, `curriculum`, `interactive-center`, `support`, `nav`, `footer`, `tokens`, `assets`

**Examples:**
```
feat(curriculum): add High School Lab module roadmap section

Adds the 4-step module roadmap and descriptions to curriculum.html per
the Figma wireframe. Content pulled from docs/content/high-school-lab.md.
```

```
fix(nav): correct curriculum.html anchor links from home page teasers

Current Roadmaps section linked to curriculum.html#undergrad-lab, which
didn't match the section id (curriculum.html#undergraduate-lab).

Fixes #17
```

```
style(tokens): update color tokens to match approved Figma palette
```

```
a11y(support): add labels to contact form inputs and fix focus indicator

Form fields relied on placeholder text only. Added <label> elements and
a visible focus outline so the form is usable via keyboard alone.
```

```
docs: fill in Breakpoints and Deployment sections of README
```

```
chore(assets): add placeholder logo and favicon until brand assets land
```

```
refactor(interactive-center): extract dashboard tab logic into js/main.js
```

