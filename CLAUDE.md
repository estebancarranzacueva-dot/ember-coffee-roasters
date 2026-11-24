# Ember Coffee Roasters

Marketing website for Ember Coffee Roasters, a small-batch coffee roaster in Bengaluru.

## Stack
- Next.js (App Router, TypeScript)
- Tailwind CSS

## Rules
- Write simple, readable code.
- One component per file, in the `components/` folder.
- Mobile first. Every section must work at 390px wide.
- Never use placeholder text like lorem ipsum. Write real copy.
- Ask before installing any new package.

## Design
Direction: "Night Roast". Dark, quiet and cinematic, like the roastery after closing.
The tokens live in `app/globals.css` and the fonts are loaded in `app/layout.tsx`. Use the tokens, never raw values.

### Fonts
- Display: Instrument Serif (`font-serif`). It has one weight, so never add `font-bold` to it.
- Body: Manrope (`font-sans`).

### Colours
| Token | Hex | Use |
|---|---|---|
| `bg` | `#1a1411` | Page background |
| `text` | `#f3ebe0` | Text, and light surfaces |
| `primary` | `#e0541b` | The accent: buttons and key highlights |
| `accent` | `#f2b66d` | Hover state of primary buttons only |
| `muted` | `#a39384` | Secondary text and subtle borders |

### Rules
- Only use colours from the palette. Opacity variants of palette colours are fine (`text/40`, `muted/30`). No raw hex values in components.
- Spacing between sections is consistent across the site. Every section uses the `section-y` utility for its vertical padding.
- Rounded corners are small and the same everywhere. Use `rounded-ui` (6px) on every element that has rounded corners. No `rounded-full` or larger radii.
- One accent colour, used only for buttons and key highlights. That colour is `primary`. Do not use it for backgrounds, body text or decoration.
- Flat surfaces: no gradients and no shadows.

### shadcn/ui
- Components live in `components/ui/` and are added with `npx shadcn@latest add <name>`. The style is `base-nova`, built on Base UI.
- shadcn's colour names (`background`, `foreground`, `border`, `ring`, and so on) are mapped onto the palette in `app/globals.css`. Do not add shadcn's default grey theme or a `.dark` block.
- Every radius token (`rounded-sm` to `rounded-4xl`) is 6px, so shadcn components already match `rounded-ui`.
- After adding a component, restyle it to the design system: the serif for headings, `muted` for secondary text, no shadows. Import `cn` from `@/lib/utils`.
- The shadcn CLI may re-add the `cn` npm package. Remove it and keep `lib/utils.ts` (it uses `clsx` and `tailwind-merge`).
