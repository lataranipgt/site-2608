/** Discovers and groups book preview images bundled by Astro at build time. */

import type { ImageMetadata } from "astro";

export interface BookPreviewPage {
  filename: string;
  image: ImageMetadata;
}

const previewPageModules = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/books/*/pages/*.{png,jpg,jpeg,webp}",
  { eager: true }
);
const filenameCollator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base",
});
const previewPathPattern = /books\/([^/]+)\/pages\/([^/]+)$/;
const previewPagesBySlug = createPreviewPagesBySlug();

/** Returns the preview pages discovered for a book slug. */
export function getBookPreviewPages(slug: string): readonly BookPreviewPage[] {
  return previewPagesBySlug.get(slug) ?? [];
}

/** Returns whether at least one preview page exists for a book slug. */
export function hasBookPreview(slug: string): boolean {
  return getBookPreviewPages(slug).length > 0;
}

/** Groups eager image imports by their book slug and sorts their filenames naturally. */
function createPreviewPagesBySlug(): ReadonlyMap<
  string,
  readonly BookPreviewPage[]
> {
  const pagesBySlug = new Map<string, BookPreviewPage[]>();

  for (const [path, imageModule] of Object.entries(previewPageModules)) {
    const previewPath = parsePreviewPath(path);

    if (!previewPath) {
      continue;
    }

    const pages = pagesBySlug.get(previewPath.slug) ?? [];
    pages.push({ filename: previewPath.filename, image: imageModule.default });
    pagesBySlug.set(previewPath.slug, pages);
  }

  for (const pages of pagesBySlug.values()) {
    pages.sort((firstPage, secondPage) =>
      filenameCollator.compare(firstPage.filename, secondPage.filename)
    );
  }

  return pagesBySlug;
}

/** Extracts a book slug and filename from a preview asset import path. */
function parsePreviewPath(
  path: string
): { filename: string; slug: string } | undefined {
  const match = previewPathPattern.exec(path);

  if (!match) {
    return undefined;
  }

  const [, slug, filename] = match;

  return { filename, slug };
}
