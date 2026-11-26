# Packages — LifeWell docs

**Last Updated:** 2026-11-26

Node 26.13.1 LTS (`.nvmrc`, `engines.node >=26.13.1`), Yarn 4.18.1 (`packageManager`), `npmMinimalAgeGate: 0`.
Upgraded with `npx -y npm-check-updates -u`, latest stable. This file is excluded from the published site
(`docusaurus.config.ts` → docs `exclude`).

| Package | Range | Kind | Purpose |
|---|---|---|---|
| `@docusaurus/core`, `faster`, `plugin-client-redirects`, `plugin-content-docs`, `plugin-ideal-image`, `preset-classic`, `theme-common`, `theme-mermaid` | 3.10.2 | runtime | The site generator, Rspack build, redirects, docs, images, theme and Mermaid diagrams |
| `@easyops-cn/docusaurus-search-local` | ^0.55.3 | runtime | Offline search, no third-party service |
| `@mdx-js/react` | ^3.1.1 | runtime | MDX rendering |
| `clsx` | ^2.1.1 | runtime | Class names in the custom components |
| `prism-react-renderer` | ^2.4.1 | runtime | Code highlighting |
| `react` / `react-dom` | ^19.3.1 | runtime | The UI runtime |
| `react-aria-components` | ^1.22.1 | runtime | Accessible carousel controls and the ecosystem directory view switcher |
| `@docusaurus/module-type-aliases`, `types` | 3.10.2 | dev | Types for `yarn typecheck` |
| `@types/react` | ^19.3.0 | dev | React types |
| `@biomejs/biome` | ^2.6.9 | dev | Lint TypeScript, React and CSS source with `yarn lint` |
| `cheerio` | ^1.2.0 | dev | Parse rendered HTML anchors in the post-build link-policy gate |
| `typescript` | ~7.0.2 | dev | `yarn typecheck`. The site runs no `typescript-eslint` and no Capacitor CLI, the two tools that hold the rest of the fleet on 6.0 |

## Workarounds

- `build` runs with `NODE_OPTIONS=--no-experimental-webstorage`: Docusaurus' SSG touches Node 26's disabled
  `localStorage` and prints an ExperimentalWarning. Upstream has no option; re-check on each Docusaurus minor and
  remove the flag when a build without it prints nothing.

## History

- 2026-11-26 — Declared Cheerio directly for the rendered-anchor SEO gate and Biome for a repo-wide source lint gate.
- 2026-11-25 — Added React Aria Components 1.22.1 for the ecosystem controls and refreshed caniuse-lite data to keep the production build free of Browserslist age warnings.
- 2026-11-16 — Node 26.13.1 LTS pass: `.nvmrc` created at 26.13.1, `engines.node` `>=20.0` → `>=26.13.1`. Every
  package was already on its latest stable (`npm-check-updates` reported nothing to move).
