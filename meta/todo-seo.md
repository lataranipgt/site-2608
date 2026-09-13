2. **Do the basic SEO plumbing**

   * Unique `<title>` + meta description for every important page.
   * Canonical URLs.
   * `sitemap.xml`.
   * `robots.txt`.
   * Proper Open Graph metadata for WhatsApp/Facebook/etc:
     `og:title`, `og:description`, `og:image`, `og:url`.
   * Twitter/X card equivalents.
   * Add structured data, especially:

     * `Person` / `ProfilePage` for Lata Thakur.
     * `Book` for individual books.
     * `WebSite` for the site itself.
   * Make sure every book page has actual crawlable text, not merely images.


-------

I reviewed the Astro source, generated HTML, build configuration, recent commits, and the 24 generated routes. The site has a solid static foundation, but its biggest SEO weakness is that search engines currently see most pages as “Lata Thakur” pages rather than distinct author, book, and preview pages.

Priority order:

1. Give every page unique SEO metadata

`src/layouts/layout.astro` currently applies the same values everywhere:

- `<title>Lata Thakur</title>`
- the same meta description
- the same Open Graph title and description
- the same `og:type="website"`

Examples of better titles:

- `Lata Thakur — Hindi Author, Poet & Retired Teacher`
- `Books by Lata Thakur — Hindi Poetry and Fiction`
- `About Lata Thakur — Teacher and Hindi Author`
- `Contact Lata Thakur`
- `Dard Ke Dariya by Lata Thakur — Hindi Poetry`
- `Dard Ke Dariya Preview — Lata Thakur`

Book detail pages should use the book’s actual description, title, genre, language, ISBN, and publication information in their metadata. Google recommends descriptive, page-specific titles rather than repeating the site name on every page. [Google title-link guidance](https://developers.google.com/search/docs/appearance/title-link)

2. Add canonical URLs

There are currently no `<link rel="canonical">` tags. Add a self-referencing canonical to every indexable page, based on `Astro.url` and `Astro.site`.

This is especially important for:

- book detail pages versus preview pages
- GitHub Pages base-path builds
- possible trailing-slash variations
- future alternate URLs

Google treats canonical tags and sitemap inclusion as important signals for choosing the preferred URL. [Google canonicalization guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)

3. Add `robots.txt` and a sitemap

I found neither in the project or generated `dist` output.

Add:

- `/robots.txt`
- `/sitemap-index.xml` or `/sitemap-0.xml`
- the sitemap URL inside `robots.txt`
- the production canonical URLs in the sitemap

The sitemap should include:

- homepage
- about
- contact
- books index
- each book detail page

I would probably exclude `/books/[slug]/preview` from the sitemap and either canonicalize it to the book detail page or mark it `noindex`, because those pages are primarily interactive viewers and have very little unique crawlable text. [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)

4. Fix semantic headings

The homepage currently has no `<h1>`; the hero identity is rendered as styled `<p>` elements.

The books index also appears to have no page-level `<h1>`; it renders the reusable book grid directly.

Recommended structure:

- Homepage: `<h1>Lata Thakur — Hindi Author and Poet</h1>`
- Books index: `<h1>Books by Lata Thakur</h1>`
- Individual book pages: existing book-title `<h1>` is good
- Preview pages: use a more descriptive `<h1>Preview: Dard Ke Dariya</h1>`

This helps both users and search engines understand the primary subject of each page.

5. Correct the document language

The shared layout declares:

```html
<html lang="en">
```

But the book descriptions are Hindi, and the author’s primary work is Hindi literature.

At minimum, the site should use the correct language for the page content. If the site remains mostly English UI with Hindi book descriptions, consider:

- `lang="en"` for the English author/about pages
- `lang="hi"` for Hindi book-description pages
- or a consistent `lang="en-IN"` if the overall site is intentionally English

If separate Hindi and English versions are eventually created, use separate URLs and `hreflang` annotations. Google specifically recommends making the page language obvious and using the same writing system in title elements as the primary content. [Google multilingual-site guidance](https://developers.google.com/search/docs/advanced/crawling/managing-multi-regional-sites)

6. Add structured data

There is currently no JSON-LD structured data.

Add:

- `Person` for Lata Thakur on the homepage/about page
- `WebSite` for the site
- `Book` on each book detail page
- `BreadcrumbList` on book pages and preview pages

Book structured data should include, where available:

- title
- author
- ISBN-13
- language
- genre
- publisher
- publication date
- cover image
- book format
- purchase URLs

The book metadata already exists in `src/data.mjs`, so this should be a relatively direct addition. Google’s book documentation emphasizes ISBN, author, title, canonical URLs, and edition information. [Google Book structured data guidance](https://developers.google.com/search/docs/appearance/structured-data/book)

7. Improve book page content and data quality

The generated HTML exposed several content problems that are more serious for SEO than minor technical details:

- several different book titles appear to reuse `dard-ke-dariya-cover`
- some records have placeholder values such as `"Pages placeholder"`
- some publisher, date, ISBN, and purchase fields are missing
- the book list claims “30+ Books Published” while only 10 book entries are currently generated

Search engines cannot compensate for inaccurate or mismatched content. Before adding more SEO markup, each book should have:

- the correct cover
- a consistent title spelling/transliteration
- a concise original summary
- verified ISBN
- verified publisher and publication date
- available purchase links where applicable

The book pages already have useful descriptive text, which is a strong starting point.

8. Improve title and description wording for Hindi search intent

The current metadata is English-only and fairly broad:

> Lata Thakur — Poetry, Books & a Retired Teacher’s Journey

The site should target phrases people might actually search for, without keyword stuffing. For example:

- `Hindi poet Lata Thakur`
- `Hindi poetry books by Lata Thakur`
- `Hindi short story collections`
- `Dard Ke Dariya Hindi poetry book`
- `Lata Thakur retired teacher author`

Use the Romanized title plus the original Hindi title where the authoritative Hindi spelling is known. Do not invent Hindi titles or metadata that has not been verified.

9. Strengthen internal linking

The basic internal linking is good, but it could be more intentional:

- link the homepage author description to About
- link each book’s genre to a future genre landing page, if there are enough books
- link from About to Books
- add “previous/next book” navigation on detail pages
- add breadcrumbs such as `Home → Books → Dard Ke Dariya`
- link the author name in book schema and visible page copy consistently

The existing book recommendation section is useful, but currently recommendations are simply the first four other records rather than related books by genre or type.

10. Make image SEO more accurate

The Astro image optimization is good: images have dimensions, responsive sources, and modern formats.

However:

- cover filenames and displayed covers must match the book title
- cover alt text should be `Cover of Dard Ke Dariya by Lata Thakur`
- decorative images are correctly hidden from assistive technology
- scanned preview pages should not be treated as major standalone search content unless each page has meaningful text/transcription

The social preview image should also ideally be a dedicated branded image with the author name and site context, rather than only the portrait.

11. Handle the GitHub Pages base path consistently

The build uses a `BASE` environment variable, but most links are hard-coded as root paths:

```astro
<a href="/books">
```

The generated local build therefore emits root URLs. Depending on how GitHub Pages and the custom domain are configured, this could create broken links or inconsistent canonical URLs.

Use Astro-aware URL construction consistently for:

- navigation
- internal links
- canonical tags
- Open Graph URLs
- sitemap URLs
- image URLs where relevant

This is both a crawlability and deployment correctness issue.

12. Set up measurement before judging results

After the technical changes:

- verify the custom domain in Google Search Console
- submit the sitemap
- inspect the homepage, books index, and several book URLs
- monitor indexing and search queries
- add privacy-conscious analytics if desired
- use PageSpeed Insights and Search Console’s Core Web Vitals reports

My recommended first implementation batch would be:

1. page-specific titles/descriptions/social metadata
2. canonical URLs
3. sitemap and robots.txt
4. homepage/books `<h1>` fixes
5. language handling
6. `Person`, `Book`, and breadcrumb JSON-LD
7. correction of mismatched covers and placeholder book metadata

Those changes would produce a meaningful SEO improvement without redesigning the site or adding a blog/CMS. I did not modify any files.