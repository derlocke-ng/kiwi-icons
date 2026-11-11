# kiwi icon kit

Build any Kiwi-family icon from the stock kiwi base: pick a **glyph** (or bring
your own icon), a **color** (or two), and a **style**. Same output from Python,
JavaScript and the [icon builder](https://derlocke-ng.github.io/kiwi-icons/builder.html)
(`builder.html`), which runs on `kiwi-icon.js` and shows the matching Python,
JS and CLI call for whatever you build.

```
kit/
  kiwi_icon.py        Python module + CLI, no dependencies
  kiwi-icon.js        same thing for JS (UMD: <script>, require, bundlers)
  templates/          classic/flat/night SVGs themed with CSS variables
  glyphs.json         every stock glyph + each app's default hue
  colorways.json      color roles (OKLCH) and the named colorways
colorways/kiwi-fox/   pre-rendered kiwi fox in every colorway and style
```

## The pieces

| Input | What it does |
|---|---|
| `glyph` | Stock glyph in the core: `fox`, `vault`, `cli`, `mail`, ... (`--list`) |
| `path` | Your own icon: an SVG path `d` on a 24×24 grid (Lucide, Tabler, Material outline all work). Stroked by default, `path_fill` to fill |
| `colorway` | Named preset: ember, crimson, rose, orchid, violet, indigo, ocean, teal, forest, kiwi, honey, graphite, plus duo-* two-tones |
| `hue` + `tone` | Any main color as OKLCH hue 0–360; `tone` 1 = family saturation, 0.1 = near grey |
| `color` | Main color as hex; hue and tone are derived from it |
| `accent` / `accent_color` | Second color: tints the core disc and the glyph |
| `colors` / `--set` | Force one role by hex: `rim flesh core ink deep glyph night_glyph` |
| `style` | `classic` (rim + seeds), `flat` (bigger core), `night` (line mark on dark) |

All role colors come from the same OKLCH lightness/chroma steps as the family
palette, so any hue you pick stays consistent with the other kiwi apps.

## Python

Copy `kiwi_icon.py` into your app (one file, standard library only) or run it
from a checkout of this repo.

```bash
python3 kiwi_icon.py --glyph fox --colorway ocean -o kiwi-fox.svg
python3 kiwi_icon.py --glyph fox --color "#3a7bd5" --accent-color "#f5a623" --style flat -o icon.svg
python3 kiwi_icon.py --path "M4 12h16M12 4v16" --hue 300 -o custom.svg --png 256
python3 kiwi_icon.py --glyph fox --colorway forest --install kiwi-fox
python3 kiwi_icon.py --colorway violet --palette       # role colors as JSON
```

```python
from kiwi_icon import render, palette, COLORWAYS

svg = render("fox", colorway="ocean")
svg = render("fox", hue=50, accent=240, style="night")
svg = render(None, path="M4 12h16M12 4v16", color="#7c3aed")
```

### Let users pick the icon color (GTK / desktop app)

```python
import kiwi_icon

def apply_icon_choice(colorway: str, style: str = "classic"):
    svg = kiwi_icon.render("fox", colorway=colorway, style=style, title="kiwi fox")
    kiwi_icon.install(svg, "kiwi-fox")  # ~/.local/share/icons/hicolor/scalable/apps/kiwi-fox.svg
    # Icon=kiwi-fox in the .desktop file (or window.set_icon_name("kiwi-fox")) picks it up

# Build the picker from the presets
for key, cw in kiwi_icon.COLORWAYS.items():
    print(key, cw["label"], kiwi_icon.palette(cw["hue"], cw.get("tone", 1), cw.get("accent"))["flesh"])
```

`install()` writes into the user's hicolor theme and refreshes the GTK icon
cache when `gtk-update-icon-cache` exists. Flatpak apps: write to
`$XDG_DATA_HOME/icons/...` inside the sandbox, or ship the pre-rendered files
from `colorways/kiwi-fox/` and switch between them.

## JavaScript

Copy `kiwi-icon.js` into your project, or load it straight from GitHub Pages
(pin a release tag in production).

```html
<script src="https://derlocke-ng.github.io/kiwi-icons/kit/kiwi-icon.js"></script>
<script>
  document.querySelector('#logo').innerHTML =
    KiwiIcon.render({ glyph: 'fox', colorway: 'teal', size: 64 });
  document.querySelector('link[rel=icon]').href =
    KiwiIcon.dataUri(KiwiIcon.render({ glyph: 'fox', color: '#e11d48' }));
</script>
```

```js
const KiwiIcon = require('./kiwi-icon.js');
const svg = KiwiIcon.render({ path: 'M4 12h16M12 4v16', hue: 300, style: 'flat' });
```

## CSS-variable templates

`templates/{classic,flat,night}.svg` take their colors from CSS custom
properties, so a web app can recolor the icon live with no JS. Inline the SVG
(variables do not reach into `<img>`), then set any of:

```css
.my-app {
  --kiwi-rim: #1d4ed8;  --kiwi-flesh: #93c5fd;  --kiwi-core: #eff6ff;
  --kiwi-ink: #1e3a8a;  --kiwi-deep: #172554;
  --kiwi-glyph: #c2410c;          /* classic + flat glyph */
  --kiwi-night-glyph: #fdba74;    /* night glyph */
}
```

Swap the glyph by replacing the contents of `<g id="kiwi-glyph">`; draw with
`currentColor`. Glyphs from `glyphs.json` drop straight in (128 space). A 24×24
icon goes in as `<path transform="translate(52 52)" ... />`.

## Pre-rendered kiwi fox colorways

`colorways/kiwi-fox/{style}/{colorway}.svg` — 15 colorways × 3 styles.
`colorways/kiwi-fox/colorways.json` lists each with its resolved hex roles,
ready to drive a settings picker. Default is `ember`, the original kiwi fox.

## Keeping it in sync

`kiwi_icon.py` is the source of truth. After changing glyphs, role colors or
colorways there, mirror the change in `kiwi-icon.js` and run
`python3 tools/build-kit.py`: it regenerates `colorways/`, `glyphs.json`,
`colorways.json` and `templates/`, and (with node installed) checks that the
JS kit renders byte-identical SVGs.
