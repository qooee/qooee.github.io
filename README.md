# qooee.github.io

Hugo site for [qooee.net](https://qooee.net/), using the Ananke theme and GitHub Pages Actions deployment.

## Local development

Initialise the theme submodule, then run Hugo:

```bash
git submodule update --init --recursive
hugo server
```

## Qooee Where

The Mac WFH log has its own product, support and privacy pages at `/where/`,
`/where/support/` and `/where/privacy/`. Content lives in `content/where/`;
`layouts/where/`, the `where-*` partials and `qooee-where.css` isolate its layout
from the existing Qooee Contacts pages. The top-level page remains unchanged.
The existing brand assets and palette are reused. Where pages use local assets
and system fonts, with no added tracking scripts or external font requests.

The product screenshot uses a separately sandboxed native app with fictional
records. No personal diary data or network identifiers appear in public assets.
Keep the coming-soon wording until the real Mac App Store listing is available.

Build with `hugo --minify`; the existing Pages workflow publishes `public/` after
a push to `main`. Generated `docs/` files are legacy output and are not the
deployment source. Before publishing, check page links, desktop/mobile layouts,
and that existing page HTML remains unchanged.
