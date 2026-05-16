# Qooee Contacts Brand

This directory contains the Qooee brand system for Qooee Contacts.

The canonical design document is [qooee-contacts-design-system.md](qooee-contacts-design-system.md).

## Directory Structure

```text
brand/
  assets/
    fonts/      Logo-supporting font assets and licence
    icon/       Icon-only mark and app icon SVG assets
    logo/       Full wordmark SVG and PNG assets
  palettes/    Supplied Apple `.clr` palettes, used as colour source files
  tokens/      Implementation-ready colour and spacing tokens
```

## Source Of Truth

The supplied `.clr` files in [palettes](palettes) are the canonical source palettes:

- `qooee-primary.clr`
- `qooee-secondary.clr`
- `qooee-tertiary.clr`

The token files mirror those palette values for implementation, but they do not replace the source palettes.

## Production Notes

The current wordmark SVGs are semantically named, but still contain live `Crete Round` text from the supplied assets. The font is included at [assets/fonts/CreteRound-Regular.ttf](assets/fonts/CreteRound-Regular.ttf), with its licence at [assets/fonts/OFL.txt](assets/fonts/OFL.txt), and can also be sourced from [Google Fonts](https://fonts.google.com/specimen/Crete+Round).

Before distributing the wordmark externally, export outlined SVG/PDF assets from the editable master so rendering does not depend on the viewer having that font installed.
