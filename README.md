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
| <img src="svg/classic/kiwi-plugin.svg" width="64" alt="kiwi-plugin classic"> | <img src="svg/flat/kiwi-plugin.svg" width="64" alt="kiwi-plugin flat"> | <img src="svg/night/kiwi-plugin.svg" width="64" alt="kiwi-plugin night"> | **kiwi plugin**<br>`kiwi-plugin`<br>Placeholder: module / plugin. Used by the kiwi-fox provider modules |

## Layout

| Path | What |
|---|---|
| `svg/<style>/<icon>.svg` | The source icons (128×128 viewBox). These are the masters. |
| `png/<style>/<size>/<icon>.png` | Renders at 16, 32, 48, 64, 128, 256 and 512 px |
| `icons.json` | Machine-readable index: icon ids, wordmarks, descriptions, colors, URL templates |
| `palette/kiwi-palette.{css,json}` | Six colors per app: `rim`, `flesh`, `core`, `ink`, `deep`, `text` |
| `design/` | The original design sheet (`kiwi-logo-sheet.png`) and the standalone design page |
| `tools/render-png.sh` | Rebuilds `png/` from `svg/` |

## Fetching an icon

Until each app ships its own copy, fetch the icon from here. The URL pattern
is:

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

An installer that must work offline should not depend on this fetch: vendor
the SVG into the app's repo, or fall back to a generic icon when `curl`
fails. To protect an app from future redesigns, swap `main` in the URL for a
release tag.

The kiwi-fox provider modules (`kiwi-plugin-tor`, `-vpn`, `-9proxy`, `-myst`)
share the `kiwi-plugin` icon.

## Changing or adding an icon

1. Edit or add `svg/<style>/<icon>.svg`, in all three styles.
2. Add the app's colors to `palette/kiwi-palette.json` and `.css`, and an
   entry to `icons.json`.
3. Run `tools/render-png.sh` (needs `rsvg-convert` from `librsvg2-tools`)
   and commit the regenerated `png/`.

The SVGs were exported from Claude and carry C2PA content credentials in
their `<metadata>`, which account for most of each file's size. The PNG
renders do not include them.
