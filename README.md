# BookPetal — Lata Thakur Author Website

An author portfolio website for **Lata Thakur** — a retired teacher, lifelong learner, and published Hindi author. Built with **Astro 7**, **TypeScript**, and **Sass**, this site showcases her biography, book catalogue, scanned book previews, and contact information.

---

## Architecture Overview

```
site-2608/
├── public/                  # Static assets served verbatim (favicon)
├── src/
│   ├── assets/
│   │   ├── abstract/        # Decorative SVGs, sprites, backgrounds, noise textures
│   │   ├── books/           # Book cover images + scanned page previews
│   │   │   └── {slug}/
│   │   │       ├── {slug}-cover.jpg/png
│   │   │       └── pages/   # Scanned book pages for the preview viewer
│   │   ├── meta/            # Design mockup screenshots
│   │   ├── outbound/        # Purchase-platform button images (Amazon, Flipkart)
│   │   └── profile/         # Author portrait photos and name graphics
│   ├── components/          # Reusable Astro UI components
│   ├── layouts/             # Shared page layouts
│   ├── pages/               # Route definitions (file-based routing)
│   ├── utils/               # Pure utility functions
│   ├── data.mjs             # Author metadata and book catalogue (single source of truth)
│   ├── global.scss          # Global style resets
│   └── global-utils.scss    # CSS custom properties, theming variables, mixins, breakpoints
├── dist/                    # Static build output (gitignored)
├── astro.config.mjs         # Astro configuration (server host/port, SCSS preprocessor)
├── tsconfig.json            # TypeScript configuration (strict, Astro extended)
├── biome.jsonc              # Linting/formatting via Ultracite preset
├── package.json             # Dependencies and scripts
└── AGENTS.md                # Working principles and code style guide
```

---

## Data Layer

### `src/data.mjs` — Single Source of Truth

All content is centralized in a single ES module that exports a `data` object:

- **`data.author`** — Author profile, biography sections (About page), contact data (form fields, social links, reach details), and stat accomplishments (books published, years teaching, etc.)
- **`data.books`** — Array of book objects, each containing:
  - Metadata: `title`, `slug`, `genre`, `language`, `pages`, `isbn`, `publisher`, `publicationDate`, `formats`
  - `description` — Full Hindi-language book description with paragraph breaks
  - `cover` — Imported image asset (Astro-optimized at build time)
  - `buyLinks` — Amazon/Flipkart purchase URLs (nullable)
  - `rating`, `reviewCount` — Placeholder reader rating data

Book cover images are statically imported at the top of the module so Astro can hash and optimize them during build. No runtime data fetching occurs — the site is fully static.

---

## Routing (File-Based)

All routes are defined via Astro's file-based routing in `src/pages/`:

| Route                     | File                                | Description                                  |
|--------------------------|-------------------------------------|----------------------------------------------|
| `/`                      | `pages/index.astro`                 | Home page — hero, accomplishments, featured books, quote |
| `/about`                 | `pages/about.astro`                 | Biography, journey milestones, photo         |
| `/contact`               | `pages/contact.astro`               | Contact form, reach details, social links    |
| `/books`                 | `pages/books/index.astro`           | Full book catalogue                          |
| `/books/[slug]`          | `pages/books/[slug].astro`          | Individual book detail page (static paths)   |
| `/books/[slug]/preview`  | `pages/books/[slug]/preview.astro`  | Scanned page preview viewer (static paths)   |

### Static Path Generation

`/books/[slug]` and `/books/[slug]/preview` use `getStaticPaths()` to generate a build-time page per book. The detail page filters the `data.books` array by `slug` param; the preview page additionally checks for scanned page images via the `book-previews` utility.

---

## Components

### Layout

**`src/layouts/layout.astro`** — The shell wrapping every page:

- Sets `<html>` structure with favicon links (light/dark variants from sprite)
- Injects CSS custom properties for sprite and noise image URLs via inline `style` on `<body>`
- Renders a persistent header with the author's Hindi name logo + navigation bar (`Home`, `Books`, `About`, `Contact`)
- Highlights the active nav link using `class:list` against `Astro.url.pathname`
- Contains a `<slot />` for page content
- Imports `global.scss` for base styles

### Reusable Components

| Component                    | File                          | Purpose                                                                 |
|------------------------------|-------------------------------|-------------------------------------------------------------------------|
| `Books`                     | `components/books.astro`      | Renders a grid of book cards with cover, title, and genre; prop `display` controls size (`"full"` or `"short"`) |
| `BuyBox`                    | `components/buy-box.astro`    | Displays purchase buttons (Amazon, Flipkart with dark/light images) and optional preview link with dark/light responsive `<picture>` elements |
| `Separator`                 | `components/separator.astro`  | Decorative leaf-themed horizontal rule used between sections            |
| `Welcome`                   | `components/welcome.astro`    | Default Astro starter component (unused; can be removed)                |

### `BuyBox` Design Details

Uses `<picture>` with `<source media="(prefers-color-scheme: dark)">` and `srcset` to swap between dark/light purchase button images based on the user's OS color scheme preference. `rel="noopener noreferrer"` is set on all external purchase links.

---

## Page Implementations

### Home (`pages/index.astro`)

- Hero section with author profile photo (CSS `shape-outside` for text wrapping), name/credentials, and short bio
- `Separator` component between sections
- Accomplishments bar (books published, genres, teaching years, readers)
- Featured books grid via `<Books display="short" />`
- Inspirational author quote blockquote

### About (`pages/about.astro`)

- Two-column introduction: portrait photo + biographical text with highlights grid (Educator, Author, Lifelong Learner, For My Readers)
- Decorative quote banner with background placeholder
- Journey section with milestones timeline (Years in Education, Life Experiences, Published Author, Still Exploring) in a three-column grid
- Responsive: single-column layout below `$media-medium` (1000px)
- Image placeholders use a transparent GIF `data:` URI as fallback source

### Contact (`pages/contact.astro`)

- Hero banner with decorative placeholder image
- Two-column layout: contact form (name, email, subject, message fields mapped from `data`) + sidebar with reach details (email, phone, location), social links (Facebook, Instagram, LinkedIn, YouTube, Goodreads), and response time
- Audience section at bottom explaining common reasons to reach out (Readers, Events & Speaking, Media & Publishers)
- `field-wide` CSS class spans textarea across both grid columns

### Book Detail (`pages/books/[slug].astro`)

- Two-column layout: cover image + metadata
- Metadata displayed as a `<dl>` (Genre, Publisher, Publication Date, Language, Pages, ISBN)
- Expandable "About the Book" section with preview/full toggle via client-side JavaScript (`aria-expanded`, `hidden`, `data-preview-id`/`data-full-id` attributes)
- Format badges (Paperback, eBook)
- `BuyBox` component for purchase links
- "You may also like" recommendations (up to 4 related books)
- Back link to `/books`
- Responsive: stacks to single column below `$media-small`

### Book Preview (`pages/books/[slug]/preview.astro`)

- Interactive image-based page viewer for scanned book pages
- Left/right side buttons with circular icons, bottom Previous/Next navigation buttons
- Keyboard support: `ArrowLeft`/`ArrowRight` for page navigation
- Touch support: horizontal swipe detection with configurable threshold (48px)
- Semantic `aria-live="polite"` status announcing "Page N of M"
- Responsive: `preview-image` inverts in dark mode for readability of scanned pages
- Bottom `BuyBox` for purchase CTA

---

## Utility Layer

### `src/utils/book-previews.ts`

A pure utility module that:

- Uses `import.meta.glob` (eager) to discover all scanned page images at build time under `src/assets/books/*/pages/`
- Groups images by book slug using regex parsing on the import path
- Sorts pages naturally using `Intl.Collator` with `numeric: true`
- Exports `getBookPreviewPages(slug)` and `hasBookPreview(slug)` — used by the preview route to validate and supply data

The glob pattern `../assets/books/*/pages/*.{png,jpg,jpeg,webp}` ensures only image files in the `pages/` subdirectory are matched.

---

## Styling Architecture

### `src/global-utils.scss` — Design Token & Mixin Foundation

- **CSS Custom Properties (Design Tokens):**
  - `--background`, `--background-secondary`, `--surface`, `--text`, `--text-muted` — Core color palette
  - `--primary`, `--primary-text` — Primary button/quote backgrounds
  - `--accent`, `--accent-text` — Accent color (buttons, headings)
  - `--border`, `--link` — Borders and link colors
  - Full dark-mode equivalents via `@media (prefers-color-scheme: dark)`

- **Breakpoint Variables (SCSS):**
  - `$media-large: 1200px`
  - `$media-medium: 1000px`
  - `$media-small: 600px`
  - `$media-extra-small: 400px`

- **Mixin:**
  - `@mixin a-button` — Standard button styling (primary background, white text, padding, border-radius)

- **Auto-Import via Vite SCSS Preprocessor:**
  - `astro.config.mjs` injects `@use "global-utils" as *;` into every SCSS block automatically (except `global-utils.scss` itself to avoid circular import)

### `src/global.scss` — Base Reset

- Resets `ul`, `li` padding/margin/list-style
- Sets `display: flow-root` on list items for containment
- Dark mode body background/text colors
- `a` inherits `--text` by default

### Per-Component/Page Styles

Each `.astro` file includes its own `<style lang="scss">` block using the pre-injected `global-utils` mixins and variables.

---

## Image Asset Strategy

| Category               | Directory                          | Purpose                                         |
|------------------------|------------------------------------|-------------------------------------------------|
| Book Covers            | `src/assets/books/{slug}/`         | Imported into `data.mjs` for catalogue display  |
| Book Preview Pages     | `src/assets/books/{slug}/pages/`   | Discovered at build time by `book-previews.ts`  |
| Abstract/Decorative    | `src/assets/abstract/`             | Sprites, backgrounds, icons, favicons, textures |
| Profile Photos         | `src/assets/profile/`              | Author portraits, name graphics                 |
| Outbound/Purchase      | `src/assets/outbound/`             | Amazon/Flipkart buy buttons (light + dark)      |
| Meta/Mockups           | `src/assets/meta/`                 | Design reference screenshots                    |

All assets are imported directly in `.astro` frontmatter, which Astro processes at build time for hashing and optimization.

---

## Build & Tooling

### Scripts (from `package.json`)

| Command               | Action                                         |
|-----------------------|------------------------------------------------|
| `bun start`           | Start dev server on `http://0.0.0.0:6003`      |
| `bun build`           | Build static site to `./dist/`                  |
| `bun preview`         | Preview the built site locally                  |
| `bun check`           | Run Ultracite lint + Astro type checking        |
| `bun fix`             | Auto-fix lint/format issues via Ultracite + Astro check |
| `bun prepare`         | Husky git hooks setup                           |

### Configuration Highlights

- **Astro 7** with strict TypeScript (`astro/tsconfigs/strict`)
- **Vite/Sass** preprocessor with `additionalData` injection for design tokens
- **Ultracite 7.10.7** (Biome-based) for formatting and linting with Astro-specific rules
- **Husky 9** for git hooks
- **Node >= 22.12.0** requirement

---

## Theme & Dark Mode

The site supports OS-level dark mode via `prefers-color-scheme`:

- **SCSS variables** in `global-utils.scss` define a warm, earthy palette (beige/sage) in light mode and deeper browns/olives in dark mode
- **Favicons** have separate light/dark variants
- **Noise texture** (`noise.jpg`) overlay is hidden in dark mode
- **Profile photo** uses `mix-blend-mode: lighten` in dark mode
- **Scanned book preview pages** use `filter: invert(1)` in dark mode for readability
- **Purchase buttons** use `<picture>` with `prefers-color-scheme` media queries for appropriate imagery

---

## Data Flow Summary

```
data.mjs (author + books)
  │
  ├──► layouts/layout.astro (nav, shell)
  │
  ├──► pages/index.astro ─── components/books.astro ──── components/separator.astro
  ├──► pages/about.astro
  ├──► pages/contact.astro
  │
  ├──► pages/books/index.astro ─── components/books.astro
  │
  ├──► pages/books/[slug].astro ─── components/buy-box.astro
  │                                 utils/book-previews.ts (for preview-availability check)
  │
  └──► pages/books/[slug]/preview.astro ─── utils/book-previews.ts (preview pages)
                                              components/buy-box.astro
```

All content flows from `data.mjs` → pages/components. No API calls, no CMS, no runtime data fetching — 100% statically generated at build time.

---

## Project Conventions

- **Functions:** Small, focused, top-level; async/await over Promise chains; JSDoc one-line descriptions
- **Classes:** Static async `.create()` factory instead of public constructors where initialization is async
- **Types:** Derived from authoritative data sources rather than duplicated
- **Logging:** `console.debug()` for diagnostics with descriptive prefixes like `[functionName:label]`; `console.log()` reserved for end-user visibility
- **Commits:** Short keyword-heavy one-line messages for small changes, detailed descriptions for larger ones; AI agent author identity
- **Changelog:** Maintained in reverse chronological order with version headings inferred from `package.json`