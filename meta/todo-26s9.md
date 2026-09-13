Now that the author/book site is actually hosted, the work shifts from **building → making it discoverable, measurable, trustworthy, and useful**.

A sensible order is:

1. **Finish the production-domain setup**

   * Confirm custom domain works on both `domain.com` and `www.domain.com`.
   * HTTPS works and GitHub Pages forces HTTPS.
   * Pick one canonical hostname and redirect the other.
   * Check every major route after deployment: `/`, `/books`, `/about`, `/contact`, individual book pages, preview pages.
   * Check mobile + dark mode + broken images/links.

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

3. **Connect Google Search Console**
   This is probably the most important immediate post-launch task. Verify the domain, submit the sitemap, and then Google will start showing:

   * whether pages are indexed;
   * search queries that found the site;
   * impressions/clicks;
   * indexing errors.

   Don't expect `site:domain.com` to immediately show everything. New sites can take time to be crawled.

4. **Add analytics**
   For a small author site, the useful questions are fairly simple:

   * How many people visit?
   * Which books get viewed?
   * Where did visitors come from?
   * Do people click Amazon/Flipkart?
   * Do they open/read previews?
   * Do they subscribe?

   Google Analytics works, although something lighter like Plausible/Umami is worth considering if simple privacy-friendly stats are preferred.

5. **Wire up conversion events**
   Raw pageviews aren't enough. Track things such as:

   `book_view → preview_open → buy_amazon_click`

   and:

   `landing → email_signup`

   That makes it possible later to tell whether the site is actually doing anything rather than merely getting traffic.

6. **Finish the email system**
   Since the site intends to collect visitor emails, don't merely have Web3Forms email submissions accumulating in an inbox.

   Use an actual mailing-list provider such as Brevo, MailerLite, Buttondown, Kit, etc. Ideally the form adds someone directly to a list.

   Before actively promoting it:

   * create the mailing list;
   * configure sender address like `books@domain.com` or `hello@domain.com`;
   * configure SPF;
   * configure DKIM;
   * preferably configure DMARC;
   * send a few real test emails;
   * create unsubscribe handling;
   * decide what subscribers are signing up **for**.

   "Get updates when a new book/poem is published" is much more meaningful than "Subscribe to newsletter."

7. **Do a technical launch audit**
   Run:

   * Chrome Lighthouse;
   * PageSpeed Insights;
   * Google Rich Results Test;
   * Schema validator;
   * broken-link checker.

   Pay particular attention to the giant book-page images discussed earlier. Those are probably the site's biggest performance risk. Astro's image optimization/WebP/AVIF and sensible responsive image widths matter much more than shaving a few KB from CSS.

8. **Check accessibility**
   At minimum:

   * sensible heading hierarchy;
   * meaningful image `alt`;
   * sufficient contrast;
   * keyboard navigation;
   * visible focus states;
   * buttons are buttons, links are links;
   * forms have labels;
   * don't put essential book information exclusively inside images.

9. **Add the boring-but-important pages**
   If collecting emails/contact-form submissions:

   * Privacy Policy.
   * Contact information.
   * Possibly Terms, though a basic author portfolio generally doesn't need elaborate Terms.

   For a simple Indian author site that isn't selling directly, there is no need to manufacture a giant American-style legal footer.

10. **Protect against deployment accidents**
    Since GitHub Actions deploys automatically:

* make sure the repository is backed up;
* don't commit API secrets;
* keep GitHub Pages deployment restricted to the intended branch/workflow;
* verify the Web3Forms key being public is an **access key intended for client-side use**, rather than treating it like a secret.
* ideally add basic automated checks/build before deployment.

11. **Give Google actual reasons to rank individual pages**
    This becomes the next significant project.

Instead of the site being mostly:

`Home → Books → Book cover → Buy`

each book should eventually have its own useful page containing things like:

* synopsis;
* genre;
* publication information;
* excerpts;
* themes;
* author note;
* preview;
* buying links.

That produces pages capable of ranking for queries around individual books, Hindi poetry, themes, author name, book titles, etc.

12. **Establish the author's identity across the web**
    Use the same canonical site URL from:

* Instagram;
* Facebook;
* Amazon author/profile pages where possible;
* publisher listing;
* Goodreads if relevant;
* YouTube if used;
* other author profiles.

And link those profiles back from the site. The goal is to make it very obvious that **Lata Thakur + these books + this domain** represent the same entity.

13. **Start distribution**
    Only after the above is basically sound:

* announce the website to existing readers;
* put it in Instagram bio;
* share individual book pages rather than only the homepage;
* use WhatsApp preview cards;
* link specific poems/book previews from social posts;
* collect subscribers.

The immediate sequence I'd use for this particular site is therefore:

**Production sanity check → Search Console → sitemap/robots/canonical → analytics → email-list provider → SPF/DKIM/DMARC → Book structured data → Lighthouse/performance → privacy page → start promoting it.**

The website being online is basically **version 1 of the infrastructure**. The next meaningful milestone isn't adding more visual polish; it's getting the first cycle working:

**person discovers author → lands on book → reads enough to care → buys/follows/subscribes → site measures that outcome.**
