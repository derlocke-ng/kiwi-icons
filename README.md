# kiwi-icons

App icons for the [Kiwi Network](https://kiwi-network.eu). Every icon is the
same kiwi cross-section, and the core carries the app's glyph. Each one comes
in three styles:

- **classic** (default): the refined GTK icon, with rim, flesh, seeds and core
- **flat**: no rim, larger core
- **night**: an inverted line mark on a dark disc

**Preview:** [derlocke-ng.github.io/kiwi-icons](https://derlocke-ng.github.io/kiwi-icons/)
(it's [`index.html`](index.html) served by GitHub Pages). It has a style and
theme switcher, a palette for each app, and buttons that copy fetch URLs.

**Builder:** [derlocke-ng.github.io/kiwi-icons/builder.html](https://derlocke-ng.github.io/kiwi-icons/builder.html)
makes a new icon in the same style: any glyph or your own icon, any color or
two, SVG or PNG download.

## Quick start

| I want to... | Do this |
|---|---|
| use an existing icon | Grab `svg/<style>/<icon>.svg` (or a PNG from `png/<style>/<size>/`), or fetch it by URL — see [Fetching an icon](#fetching-an-icon) |
| let users pick a kiwi fox color | Use the 15 ready-made [kiwi fox colorways](#kiwi-fox-colorways) |
| make an icon for a new app, or any color | Open the [builder](https://derlocke-ng.github.io/kiwi-icons/builder.html), or generate it in code with the [icon kit](#build-your-own-icon) |
| use the colors in my UI | `palette/kiwi-palette.css` / `.json` — six colors per app |
| read everything by script | `icons.json` lists every icon, its colors, URL templates, the colorways and the kit |

## Icons

| classic | flat | night | app |
|:-:|:-:|:-:|---|
| <img src="svg/classic/kiwi-updater.svg" width="64" alt="kiwi-updater classic"> | <img src="svg/flat/kiwi-updater.svg" width="64" alt="kiwi-updater flat"> | <img src="svg/night/kiwi-updater.svg" width="64" alt="kiwi-updater night"> | **kiwi updater**<br>`kiwi-updater`<br>Tool updater, installer and app browser (also kiwi apps) |
| <img src="svg/classic/ensconce.svg" width="64" alt="ensconce classic"> | <img src="svg/flat/ensconce.svg" width="64" alt="ensconce flat"> | <img src="svg/night/ensconce.svg" width="64" alt="ensconce night"> | **ensconce**<br>`ensconce`<br>Post-install setup for Fedora Silverblue / Bluefin |
| <img src="svg/classic/kiwi-killswitch.svg" width="64" alt="kiwi-killswitch classic"> | <img src="svg/flat/kiwi-killswitch.svg" width="64" alt="kiwi-killswitch flat"> | <img src="svg/night/kiwi-killswitch.svg" width="64" alt="kiwi-killswitch night"> | **kiwi killswitch**<br>`kiwi-killswitch`<br>Drops traffic when the VPN goes down |
| <img src="svg/classic/kiwi-server.svg" width="64" alt="kiwi-server classic"> | <img src="svg/flat/kiwi-server.svg" width="64" alt="kiwi-server flat"> | <img src="svg/night/kiwi-server.svg" width="64" alt="kiwi-server night"> | **kiwi server**<br>`kiwi-server`<br>Creates and manages kiwi-network meshes |
| <img src="svg/classic/kiwi-cli-tools-desktop.svg" width="64" alt="kiwi-cli-tools-desktop classic"> | <img src="svg/flat/kiwi-cli-tools-desktop.svg" width="64" alt="kiwi-cli-tools-desktop flat"> | <img src="svg/night/kiwi-cli-tools-desktop.svg" width="64" alt="kiwi-cli-tools-desktop night"> | **kiwi cli tools**<br>`kiwi-cli-tools-desktop`<br>Desktop helpers for the command line |
| <img src="svg/classic/kiwi-fox.svg" width="64" alt="kiwi-fox classic"> | <img src="svg/flat/kiwi-fox.svg" width="64" alt="kiwi-fox flat"> | <img src="svg/night/kiwi-fox.svg" width="64" alt="kiwi-fox night"> | **kiwi fox**<br>`kiwi-fox`<br>Anonymization suite with integrated Firefox |
| <img src="svg/classic/kiwi-pentesting.svg" width="64" alt="kiwi-pentesting classic"> | <img src="svg/flat/kiwi-pentesting.svg" width="64" alt="kiwi-pentesting flat"> | <img src="svg/night/kiwi-pentesting.svg" width="64" alt="kiwi-pentesting night"> | **kiwi pentesting**<br>`kiwi-pentesting`<br>Pentesting module for kiwi fox |
| <img src="svg/classic/kiwi-network.svg" width="64" alt="kiwi-network classic"> | <img src="svg/flat/kiwi-network.svg" width="64" alt="kiwi-network flat"> | <img src="svg/night/kiwi-network.svg" width="64" alt="kiwi-network night"> | **kiwi network**<br>`kiwi-network`<br>VPN mesh |
| <img src="svg/classic/kiwi-os.svg" width="64" alt="kiwi-os classic"> | <img src="svg/flat/kiwi-os.svg" width="64" alt="kiwi-os flat"> | <img src="svg/night/kiwi-os.svg" width="64" alt="kiwi-os night"> | **kiwiOS**<br>`kiwi-os`<br>Operating system (planned) |
| <img src="svg/classic/kiwi-app.svg" width="64" alt="kiwi-app classic"> | <img src="svg/flat/kiwi-app.svg" width="64" alt="kiwi-app flat"> | <img src="svg/night/kiwi-app.svg" width="64" alt="kiwi-app night"> | **kiwi app**<br>`kiwi-app`<br>Android / smartphone app |
| <img src="svg/classic/kiwi-cloud.svg" width="64" alt="kiwi-cloud classic"> | <img src="svg/flat/kiwi-cloud.svg" width="64" alt="kiwi-cloud flat"> | <img src="svg/night/kiwi-cloud.svg" width="64" alt="kiwi-cloud night"> | **kiwi cloud**<br>`kiwi-cloud`<br>Placeholder: cloud / sync |
| <img src="svg/classic/kiwi-backup.svg" width="64" alt="kiwi-backup classic"> | <img src="svg/flat/kiwi-backup.svg" width="64" alt="kiwi-backup flat"> | <img src="svg/night/kiwi-backup.svg" width="64" alt="kiwi-backup night"> | **kiwi backup**<br>`kiwi-backup`<br>Placeholder: backup / restore |
| <img src="svg/classic/kiwi-plugin.svg" width="64" alt="kiwi-plugin classic"> | <img src="svg/flat/kiwi-plugin.svg" width="64" alt="kiwi-plugin flat"> | <img src="svg/night/kiwi-plugin.svg" width="64" alt="kiwi-plugin night"> | **kiwi plugin**<br>`kiwi-plugin`<br>Placeholder: module / plugin. Used by the kiwi-proxy provider modules |
| <img src="svg/classic/kiwi-files.svg" width="64" alt="kiwi-files classic"> | <img src="svg/flat/kiwi-files.svg" width="64" alt="kiwi-files flat"> | <img src="svg/night/kiwi-files.svg" width="64" alt="kiwi-files night"> | **kiwi files**<br>`kiwi-files`<br>Placeholder: files / storage |
| <img src="svg/classic/kiwi-chat.svg" width="64" alt="kiwi-chat classic"> | <img src="svg/flat/kiwi-chat.svg" width="64" alt="kiwi-chat flat"> | <img src="svg/night/kiwi-chat.svg" width="64" alt="kiwi-chat night"> | **kiwi chat**<br>`kiwi-chat`<br>Placeholder: chat / messaging |
| <img src="svg/classic/kiwi-docs.svg" width="64" alt="kiwi-docs classic"> | <img src="svg/flat/kiwi-docs.svg" width="64" alt="kiwi-docs flat"> | <img src="svg/night/kiwi-docs.svg" width="64" alt="kiwi-docs night"> | **kiwi docs**<br>`kiwi-docs`<br>Placeholder: documentation / notes |
| <img src="svg/classic/kiwi-monitor.svg" width="64" alt="kiwi-monitor classic"> | <img src="svg/flat/kiwi-monitor.svg" width="64" alt="kiwi-monitor flat"> | <img src="svg/night/kiwi-monitor.svg" width="64" alt="kiwi-monitor night"> | **kiwi monitor**<br>`kiwi-monitor`<br>Placeholder: status / monitoring |
| <img src="svg/classic/kiwi-vault.svg" width="64" alt="kiwi-vault classic"> | <img src="svg/flat/kiwi-vault.svg" width="64" alt="kiwi-vault flat"> | <img src="svg/night/kiwi-vault.svg" width="64" alt="kiwi-vault night"> | **kiwi vault**<br>`kiwi-vault`<br>Placeholder: passwords / keys |
| <img src="svg/classic/kiwi-dns.svg" width="64" alt="kiwi-dns classic"> | <img src="svg/flat/kiwi-dns.svg" width="64" alt="kiwi-dns flat"> | <img src="svg/night/kiwi-dns.svg" width="64" alt="kiwi-dns night"> | **kiwi dns**<br>`kiwi-dns`<br>Placeholder: DNS / domains |
| <img src="svg/classic/kiwi-mail.svg" width="64" alt="kiwi-mail classic"> | <img src="svg/flat/kiwi-mail.svg" width="64" alt="kiwi-mail flat"> | <img src="svg/night/kiwi-mail.svg" width="64" alt="kiwi-mail night"> | **kiwi mail**<br>`kiwi-mail`<br>Mail service (main icon) |
| <img src="svg/classic/kiwi-mail-private.svg" width="64" alt="kiwi-mail-private classic"> | <img src="svg/flat/kiwi-mail-private.svg" width="64" alt="kiwi-mail-private flat"> | <img src="svg/night/kiwi-mail-private.svg" width="64" alt="kiwi-mail-private night"> | **kiwi mail private**<br>`kiwi-mail-private`<br>Mail: encrypted / privacy mailbox |
| <img src="svg/classic/kiwi-mail-temp.svg" width="64" alt="kiwi-mail-temp classic"> | <img src="svg/flat/kiwi-mail-temp.svg" width="64" alt="kiwi-mail-temp flat"> | <img src="svg/night/kiwi-mail-temp.svg" width="64" alt="kiwi-mail-temp night"> | **kiwi mail temp**<br>`kiwi-mail-temp`<br>Mail: throwaway / disposable address |
| <img src="svg/classic/kiwi-mail-alias.svg" width="64" alt="kiwi-mail-alias classic"> | <img src="svg/flat/kiwi-mail-alias.svg" width="64" alt="kiwi-mail-alias flat"> | <img src="svg/night/kiwi-mail-alias.svg" width="64" alt="kiwi-mail-alias night"> | **kiwi mail alias**<br>`kiwi-mail-alias`<br>Mail: aliases / forwarding |
| <img src="svg/classic/kiwi-mail-send.svg" width="64" alt="kiwi-mail-send classic"> | <img src="svg/flat/kiwi-mail-send.svg" width="64" alt="kiwi-mail-send flat"> | <img src="svg/night/kiwi-mail-send.svg" width="64" alt="kiwi-mail-send night"> | **kiwi mail send**<br>`kiwi-mail-send`<br>Mail: compose / outgoing |
| <img src="svg/classic/kiwi-mail-inbox.svg" width="64" alt="kiwi-mail-inbox classic"> | <img src="svg/flat/kiwi-mail-inbox.svg" width="64" alt="kiwi-mail-inbox flat"> | <img src="svg/night/kiwi-mail-inbox.svg" width="64" alt="kiwi-mail-inbox night"> | **kiwi mail inbox**<br>`kiwi-mail-inbox`<br>Mail: inbox / client |
| <img src="svg/classic/kiwi-proxy.svg" width="64" alt="kiwi-proxy classic"> | <img src="svg/flat/kiwi-proxy.svg" width="64" alt="kiwi-proxy flat"> | <img src="svg/night/kiwi-proxy.svg" width="64" alt="kiwi-proxy night"> | **kiwi proxy**<br>`kiwi-proxy`<br>Proxy / traffic relay |

## kiwi fox colorways

kiwi fox comes in 15 colorways users can choose from: eleven hues, a neutral
graphite, and three two-tones where the core and glyph carry a second color.
`ember` is the default and looks the same as `svg/<style>/kiwi-fox.svg`.

| classic | flat | night | colorway |
|:-:|:-:|:-:|---|
| <img src="colorways/kiwi-fox/classic/ember.svg" width="56" alt="kiwi fox Ember classic"> | <img src="colorways/kiwi-fox/flat/ember.svg" width="56" alt="kiwi fox Ember flat"> | <img src="colorways/kiwi-fox/night/ember.svg" width="56" alt="kiwi fox Ember night"> | **Ember**<br>`ember`<br>default |
| <img src="colorways/kiwi-fox/classic/crimson.svg" width="56" alt="kiwi fox Crimson classic"> | <img src="colorways/kiwi-fox/flat/crimson.svg" width="56" alt="kiwi fox Crimson flat"> | <img src="colorways/kiwi-fox/night/crimson.svg" width="56" alt="kiwi fox Crimson night"> | **Crimson**<br>`crimson` |
| <img src="colorways/kiwi-fox/classic/rose.svg" width="56" alt="kiwi fox Rose classic"> | <img src="colorways/kiwi-fox/flat/rose.svg" width="56" alt="kiwi fox Rose flat"> | <img src="colorways/kiwi-fox/night/rose.svg" width="56" alt="kiwi fox Rose night"> | **Rose**<br>`rose` |
| <img src="colorways/kiwi-fox/classic/orchid.svg" width="56" alt="kiwi fox Orchid classic"> | <img src="colorways/kiwi-fox/flat/orchid.svg" width="56" alt="kiwi fox Orchid flat"> | <img src="colorways/kiwi-fox/night/orchid.svg" width="56" alt="kiwi fox Orchid night"> | **Orchid**<br>`orchid` |
| <img src="colorways/kiwi-fox/classic/violet.svg" width="56" alt="kiwi fox Violet classic"> | <img src="colorways/kiwi-fox/flat/violet.svg" width="56" alt="kiwi fox Violet flat"> | <img src="colorways/kiwi-fox/night/violet.svg" width="56" alt="kiwi fox Violet night"> | **Violet**<br>`violet` |
| <img src="colorways/kiwi-fox/classic/indigo.svg" width="56" alt="kiwi fox Indigo classic"> | <img src="colorways/kiwi-fox/flat/indigo.svg" width="56" alt="kiwi fox Indigo flat"> | <img src="colorways/kiwi-fox/night/indigo.svg" width="56" alt="kiwi fox Indigo night"> | **Indigo**<br>`indigo` |
| <img src="colorways/kiwi-fox/classic/ocean.svg" width="56" alt="kiwi fox Ocean classic"> | <img src="colorways/kiwi-fox/flat/ocean.svg" width="56" alt="kiwi fox Ocean flat"> | <img src="colorways/kiwi-fox/night/ocean.svg" width="56" alt="kiwi fox Ocean night"> | **Ocean**<br>`ocean` |
| <img src="colorways/kiwi-fox/classic/teal.svg" width="56" alt="kiwi fox Teal classic"> | <img src="colorways/kiwi-fox/flat/teal.svg" width="56" alt="kiwi fox Teal flat"> | <img src="colorways/kiwi-fox/night/teal.svg" width="56" alt="kiwi fox Teal night"> | **Teal**<br>`teal` |
| <img src="colorways/kiwi-fox/classic/forest.svg" width="56" alt="kiwi fox Forest classic"> | <img src="colorways/kiwi-fox/flat/forest.svg" width="56" alt="kiwi fox Forest flat"> | <img src="colorways/kiwi-fox/night/forest.svg" width="56" alt="kiwi fox Forest night"> | **Forest**<br>`forest` |
| <img src="colorways/kiwi-fox/classic/kiwi.svg" width="56" alt="kiwi fox Kiwi classic"> | <img src="colorways/kiwi-fox/flat/kiwi.svg" width="56" alt="kiwi fox Kiwi flat"> | <img src="colorways/kiwi-fox/night/kiwi.svg" width="56" alt="kiwi fox Kiwi night"> | **Kiwi**<br>`kiwi` |
| <img src="colorways/kiwi-fox/classic/honey.svg" width="56" alt="kiwi fox Honey classic"> | <img src="colorways/kiwi-fox/flat/honey.svg" width="56" alt="kiwi fox Honey flat"> | <img src="colorways/kiwi-fox/night/honey.svg" width="56" alt="kiwi fox Honey night"> | **Honey**<br>`honey` |
| <img src="colorways/kiwi-fox/classic/graphite.svg" width="56" alt="kiwi fox Graphite classic"> | <img src="colorways/kiwi-fox/flat/graphite.svg" width="56" alt="kiwi fox Graphite flat"> | <img src="colorways/kiwi-fox/night/graphite.svg" width="56" alt="kiwi fox Graphite night"> | **Graphite**<br>`graphite` |
| <img src="colorways/kiwi-fox/classic/duo-ember-ocean.svg" width="56" alt="kiwi fox Ember + Ocean classic"> | <img src="colorways/kiwi-fox/flat/duo-ember-ocean.svg" width="56" alt="kiwi fox Ember + Ocean flat"> | <img src="colorways/kiwi-fox/night/duo-ember-ocean.svg" width="56" alt="kiwi fox Ember + Ocean night"> | **Ember + Ocean**<br>`duo-ember-ocean` |
| <img src="colorways/kiwi-fox/classic/duo-violet-honey.svg" width="56" alt="kiwi fox Violet + Honey classic"> | <img src="colorways/kiwi-fox/flat/duo-violet-honey.svg" width="56" alt="kiwi fox Violet + Honey flat"> | <img src="colorways/kiwi-fox/night/duo-violet-honey.svg" width="56" alt="kiwi fox Violet + Honey night"> | **Violet + Honey**<br>`duo-violet-honey` |
| <img src="colorways/kiwi-fox/classic/duo-graphite-ember.svg" width="56" alt="kiwi fox Graphite + Ember classic"> | <img src="colorways/kiwi-fox/flat/duo-graphite-ember.svg" width="56" alt="kiwi fox Graphite + Ember flat"> | <img src="colorways/kiwi-fox/night/duo-graphite-ember.svg" width="56" alt="kiwi fox Graphite + Ember night"> | **Graphite + Ember**<br>`duo-graphite-ember` |

```
colorways/kiwi-fox/<style>/<colorway>.svg
https://raw.githubusercontent.com/derlocke-ng/kiwi-icons/main/colorways/kiwi-fox/<style>/<colorway>.svg
```

[`colorways/kiwi-fox/colorways.json`](colorways/kiwi-fox/colorways.json) lists
every colorway with its label and resolved hex colors, which is all a settings
picker needs. Applying a choice is the same hicolor install as below, just with
the chosen file:

```bash
choice=ocean    # from the app's settings
install -Dm644 "colorways/kiwi-fox/classic/$choice.svg" \
    "$HOME/.local/share/icons/hicolor/scalable/apps/kiwi-fox.svg"
gtk-update-icon-cache -qtf "$HOME/.local/share/icons/hicolor" 2>/dev/null || true
```

Or generate it at runtime with the kit:
`python3 kit/kiwi_icon.py --glyph fox --colorway ocean --install kiwi-fox`.

## Build your own icon

Every icon here is the same stock kiwi base plus a glyph and a hue, so new
ones can be generated instead of drawn.

**In the browser:** the [builder](https://derlocke-ng.github.io/kiwi-icons/builder.html)
([`builder.html`](builder.html)). Pick one of the 26 glyphs or paste your own icon
(any 24×24 path, e.g. from Lucide or Tabler), a colorway or any color, an
optional second color and a style, then download SVG/PNG. It also prints the
matching CLI, Python and JS call, and the page URL reproduces the icon.

**In code:** the [icon kit](kit/README.md) in `kit/` — no dependencies.

```bash
python3 kit/kiwi_icon.py --glyph vault --colorway teal -o kiwi-vault.svg
python3 kit/kiwi_icon.py --path "M4 12h16M12 4v16" --color "#7c3aed" --style flat -o my-app.svg --png 256
python3 kit/kiwi_icon.py --list            # glyphs, styles, colorways
```

```python
from kiwi_icon import render
svg = render("fox", hue=240, accent=82, style="night")
```

```html
<script src="https://derlocke-ng.github.io/kiwi-icons/kit/kiwi-icon.js"></script>
<script>logo.innerHTML = KiwiIcon.render({ glyph: 'fox', colorway: 'teal', size: 64 });</script>
```

Colors are derived in OKLCH from one hue with fixed lightness and chroma per
role (`rim`, `flesh`, `core`, `ink`, `deep`, `text`), the same rule as the
family palette, so a generated icon sits naturally next to the official ones.
For web apps that want to recolor live, `kit/templates/<style>.svg` take their
colors from CSS variables (`--kiwi-rim`, `--kiwi-flesh`, ...). Details and all
options: [kit/README.md](kit/README.md).

## Layout

| Path | What |
|---|---|
| `svg/<style>/<icon>.svg` | The source icons (128×128 viewBox). These are the masters. |
| `png/<style>/<size>/<icon>.png` | Renders at 16, 32, 48, 64, 128, 256 and 512 px |
| `icons.json` | Machine-readable index: icon ids, wordmarks, descriptions, colors, URL templates |
| `palette/kiwi-palette.{css,json}` | Six colors per app: `rim`, `flesh`, `core`, `ink`, `deep`, `text` |
| `design/` | The original design sheet (`kiwi-logo-sheet.png`) and the standalone design page |
| `tools/render-png.sh` | Rebuilds `png/` from `svg/` |
| `colorways/kiwi-fox/<style>/<colorway>.svg` | kiwi fox in 15 colorways, plus `colorways.json` |
| `kit/` | Icon kit: `kiwi_icon.py`, `kiwi-icon.js`, CSS-variable `templates/`, `glyphs.json`, `colorways.json` |
| `builder.html` | The icon builder (GitHub Pages) |
| `tools/build-kit.py` | Regenerates `colorways/` and the kit's data files from `kit/kiwi_icon.py`, and checks the JS kit matches |

## Using an icon in a Kiwi app

Every Kiwi app ships its own copy: the classic SVG, byte for byte, at a
repo-relative path named by `ICON=` in its `kiwi.manifest`:

```bash
cp svg/classic/kiwi-fox.svg ../kiwi-fox/data/kiwi-fox.svg
# and in kiwi-fox/kiwi.manifest:
ICON=data/kiwi-fox.svg
```

kiwi-updater (2.2 and later) draws that file in its list, cards and detail
view, read from the app's own clone — nothing is fetched at install time.
Keeping the copy byte-identical to the master makes drift a one-line `cmp`.

An app whose `.desktop` launcher names its own icon (`Icon=kiwi-fox`) also
installs that SVG into the hicolor theme and rebuilds the icon cache, so an
updated icon replaces the old one in the app grid:

```bash
dest="${KIWI_PREFIX:-$HOME/.local}/share/icons/hicolor"   # system scope: /usr/share/icons/hicolor
install -Dm644 data/kiwi-fox.svg "$dest/scalable/apps/kiwi-fox.svg"
gtk-update-icon-cache -qtf "$dest" 2>/dev/null || true
```

The kiwi-proxy provider modules (`kiwi-plugin-tor`, `-vpn`, `-9proxy`, `-myst`)
share the `kiwi-plugin` icon and ship it as `data/kiwi-plugin.svg`.

## Fetching an icon

For anything that does not ship its own copy, fetch the icon from here. The
URL pattern is:

```
https://raw.githubusercontent.com/derlocke-ng/kiwi-icons/main/svg/<style>/<icon>.svg
https://raw.githubusercontent.com/derlocke-ng/kiwi-icons/main/png/<style>/<size>/<icon>.png
```

For example, an `install.sh` can install the icon into the hicolor theme
under the app's id:

```bash
ICON=kiwi-fox
ICONS_URL=https://raw.githubusercontent.com/derlocke-ng/kiwi-icons/main

dest="$HOME/.local/share/icons/hicolor"   # system scope: /usr/share/icons/hicolor
mkdir -p "$dest/scalable/apps"
curl -fsSL "$ICONS_URL/svg/classic/$ICON.svg" -o "$dest/scalable/apps/$ICON.svg"
for size in 16 32 48 64 128 256 512; do      # for desktops that want bitmaps
    mkdir -p "$dest/${size}x${size}/apps"
    curl -fsSL "$ICONS_URL/png/classic/$size/$ICON.png" -o "$dest/${size}x${size}/apps/$ICON.png"
done
gtk-update-icon-cache -q -t "$dest" 2>/dev/null || true
```

Then `Icon=kiwi-fox` in the app's `.desktop` file finds it.

An installer that must work offline should not depend on this fetch — ship a
copy as above, or fall back to a generic icon when `curl` fails. To protect
against future redesigns, swap `main` in the URL for a release tag.

## Changing or adding an icon

1. Edit or add `svg/<style>/<icon>.svg`, in all three styles.
2. Add the app's colors to `palette/kiwi-palette.json` and `.css`, and an
   entry to `icons.json`.
3. Run `tools/render-png.sh` (needs `rsvg-convert` from `librsvg2-tools`)
   and commit the regenerated `png/`.
   If you added or changed a glyph or app hue, add it to `GLYPHS` / `APP_HUES`
   in both `kit/kiwi_icon.py` and `kit/kiwi-icon.js`, then run
   `python3 tools/build-kit.py`.
4. Copy the new classic master into every app that ships it (the file its
   `ICON=` names; for `kiwi-plugin`, all four provider modules), so the apps
   pick up the change.

The SVGs were exported from Claude and carry C2PA content credentials in
their `<metadata>`, which account for most of each file's size. The PNG
renders do not include them. Colorways and anything the kit or builder
generates are plain SVG without that metadata.
