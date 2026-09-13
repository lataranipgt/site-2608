## Development

The dev server is assumed to be running separately — do not start or manage it.

After code changes, run code quality checks:

- **Format & lint**: `bun x ultracite fix`
- **Type check**: `bun run astro check`

Both commands produce output suitable for diagnosing and fixing issues without needing to see browser output.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Adding styles or using Sass](https://docs.astro.build/en/guides/styling/)
- [Static asset management](https://docs.astro.build/en/guides/images/)
- [Client-side scripts in Astro](https://docs.astro.build/en/guides/client-side-scripts/)


# Code Standards

This project is a **pure Astro** site — no React, Vue, Svelte, or other framework components. All interactivity is handled via vanilla `<script>` tags within Astro components.

## Quick Reference

- **Fix formatting & lint**: `bun x ultracite fix`
- **Type check**: `bun run astro check`
- **Check only** (no edits): `bun x ultracite check`

---

## Core Principles

Write code that is **accessible, performant, type-safe, and maintainable**. Focus on clarity and explicit intent over brevity.

### Type Safety & Explicitness

- Use explicit types for function parameters and return values when they enhance clarity
- Prefer `unknown` over `any` when the type is genuinely unknown
- Use const assertions (`as const`) for immutable values and literal types
- Leverage TypeScript's type narrowing instead of type assertions
- Use meaningful variable names instead of magic numbers — extract constants with descriptive names

### Modern JavaScript/TypeScript

- Use arrow functions for callbacks and short functions
- Prefer `for...of` loops over `.forEach()` and indexed `for` loops
- Use optional chaining (`?.`) and nullish coalescing (`??`) for safer property access
- Prefer template literals over string concatenation
- Use destructuring for object and array assignments
- Use `const` by default, `let` only when reassignment is needed, never `var`

### Async & Promises

- Always `await` promises in async functions
- Use `async/await` syntax instead of promise chains for better readability
- Handle errors appropriately in async code with try-catch blocks

### Astro Components & Scripts

- Use Astro component frontmatter (`---`) for server logic and data fetching
- Keep `<style lang="scss">` blocks scoped to their component (Astro's default)
- Use the injected `global-utils` SCSS module for design tokens and mixins rather than repeating values
- Place interactive logic in `<script>` (client-side, no TypeScript compilation) or `<script lang="ts">` (client-side, TypeScript-compiled) tags
- Prefer `querySelector`/`addEventListener` over inline event handler attributes
- Use `aria-*` attributes and semantic HTML for accessibility:
  - Provide meaningful alt text for images
  - Use proper heading hierarchy (`<h1>` → `<h2>` → `<h3>`)
  - Use `<button>` elements for clickable actions, not `<div>` or `<span>`
  - Use `aria-expanded` and `aria-controls` for expandable sections
  - Use `aria-live` regions for dynamic content updates
  - Include keyboard event handlers alongside mouse/touch events

### Error Handling & Debugging

- Remove `console.log`, `debugger`, and `alert` statements from production code
- Throw `Error` objects with descriptive messages, not strings or other values
- Use `try-catch` blocks meaningfully — don't catch errors just to rethrow them
- Prefer early returns over nested conditionals for error cases

### Code Organization

- Keep functions focused and under reasonable cognitive complexity limits
- Extract complex conditions into well-named boolean variables
- Use early returns to reduce nesting
- Prefer simple conditionals over nested ternary operators
- Group related code together and separate concerns

### Security

- Add `rel="noopener noreferrer"` when using `target="_blank"` on links
- Avoid `dangerouslySetInnerHTML` unless absolutely necessary
- Don't use `eval()` or assign directly to `document.cookie`

### Performance

- Avoid spread syntax in accumulators within loops
- Use top-level regex literals instead of creating them in loops
- Prefer specific imports over namespace imports
- Avoid barrel files (index files that re-export everything)
- Use Astro's built-in image handling (direct imports for hashing/optimization)

---

## When Biome & Astro Check Can't Help

Automated tools catch most issues. Focus your attention on:

1. **Business logic correctness** — validate your algorithms
2. **Meaningful naming** — use descriptive names for functions, variables, and types
3. **Architecture decisions** — component structure, data flow, and page organization
4. **Edge cases** — handle boundary conditions and empty/null states
5. **User experience** — accessibility, dark mode support, responsive layout
6. **Documentation** — add comments for complex logic, but prefer self-documenting code

---

Most formatting and common issues are automatically fixed by Biome. Run `bun x ultracite fix && bun run astro check` before committing to ensure compliance.