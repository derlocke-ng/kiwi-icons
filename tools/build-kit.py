#!/usr/bin/env python3
"""Regenerate everything derived from kit/kiwi_icon.py:

  colorways/kiwi-fox/<style>/<colorway>.svg + colorways.json
  kit/glyphs.json, kit/colorways.json, kit/templates/<style>.svg

and, when node is installed, check that kit/kiwi-icon.js renders exactly the
same SVGs as the Python kit. Run after changing glyphs, colors or colorways
in kit/kiwi_icon.py (and mirror the change in kit/kiwi-icon.js).
"""
import json
import os
import shutil
import subprocess
import sys
import tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, "kit"))
import kiwi_icon as k  # noqa: E402

# 1. kiwi fox colorways
cw_root = os.path.join(ROOT, "colorways", "kiwi-fox")
manifest = {"icon": "kiwi-fox", "glyph": "fox", "default": "ember",
            "svg": "colorways/kiwi-fox/{style}/{colorway}.svg", "styles": list(k.STYLES), "colorways": {}}
for name, cw in k.COLORWAYS.items():
    manifest["colorways"][name] = {**cw, "colors": k.palette(cw["hue"], cw.get("tone", 1.0), cw.get("accent"))}
    for style in k.STYLES:
        d = os.path.join(cw_root, style)
        os.makedirs(d, exist_ok=True)
        with open(os.path.join(d, f"{name}.svg"), "w") as fh:
            fh.write(k.render("fox", colorway=name, style=style, title=f'kiwi fox, {cw["label"]}'))
with open(os.path.join(cw_root, "colorways.json"), "w") as fh:
    json.dump(manifest, fh, indent=2)
    fh.write("\n")

# 2. kit data
with open(os.path.join(ROOT, "kit", "glyphs.json"), "w") as fh:
    json.dump({"space": "128x128, glyph box 52..76; custom paths use a 24x24 grid placed at (52,52)",
               "glyphs": k.GLYPHS, "app_hues": k.APP_HUES}, fh, indent=2)
    fh.write("\n")
with open(os.path.join(ROOT, "kit", "colorways.json"), "w") as fh:
    json.dump({"roles": {r: {"L": v[0], "C": v[1]} for r, v in k.ROLES.items()},
               "accent_roles": {r: {"L": v[0], "C": v[1]} for r, v in k.ACCENT_ROLES.items()},
               "colorways": k.COLORWAYS}, fh, indent=2)
    fh.write("\n")

# 3. CSS-variable templates (inline SVG; theme with --kiwi-* on any parent)
fox, p = k.GLYPHS["fox"], k.palette(50)
css = ('<style>.k-rim{fill:var(--kiwi-rim,%(rim)s)}.k-flesh{fill:var(--kiwi-flesh,%(flesh)s)}'
       '.k-flesh-line{fill:none;stroke:var(--kiwi-flesh,%(flesh)s)}.k-core{fill:var(--kiwi-core,%(core)s)}'
       '.k-ink{fill:var(--kiwi-ink,%(ink)s)}.k-deep{fill:var(--kiwi-deep,%(deep)s)}'
       '.k-glyph{color:var(--kiwi-glyph,var(--kiwi-ink,%(ink)s))}'
       '.k-night .k-glyph{color:var(--kiwi-night-glyph,var(--kiwi-flesh,%(flesh)s))}</style>') % p
slot = ('<g class="k-glyph" id="kiwi-glyph"><!-- glyph slot: replace with your own; use currentColor -->'
        f'<path d="{fox["f"]}" fill="currentColor"/></g>')
head = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128" '
        'class="kiwi-icon %s" role="img" aria-label="kiwi icon">')
dots = "".join(f'<circle cx="{x}" cy="{y}" r="3.6"/>' for x, y in k._SEEDS_FLAT)
grp = '<g transform="translate(64 64) scale(%s) translate(-64 -64)" stroke-width="%s" stroke-linecap="round" stroke-linejoin="round">'
templates = {
    "classic": head % "k-classic" + css + '<circle class="k-rim" cx="64" cy="64" r="58"/><circle class="k-flesh" cx="64" cy="64" r="51"/>'
    f'<g class="k-ink">{k._ellipses(k._SEEDS_CLASSIC, 4, 5.6)}</g><circle class="k-core" cx="64" cy="64" r="21"/>'
    + grp % ("0.95", "3.6") + slot + "</g></svg>\n",
    "flat": head % "k-flat" + css + f'<circle class="k-flesh" cx="64" cy="64" r="58"/><g class="k-ink">{dots}</g>'
    '<circle class="k-core" cx="64" cy="64" r="27"/>' + grp % ("1.3", "3.2") + slot + "</g></svg>\n",
    "night": head % "k-night" + css + '<circle class="k-deep" cx="64" cy="64" r="58"/>'
    '<circle class="k-flesh-line" cx="64" cy="64" r="49" stroke-width="4"/>'
    f'<g class="k-flesh">{k._ellipses(k._SEEDS_NIGHT, 3.4, 5)}</g>' + grp % ("1.2", "3.4") + slot + "</g></svg>\n",
}
os.makedirs(os.path.join(ROOT, "kit", "templates"), exist_ok=True)
for style, svg in templates.items():
    with open(os.path.join(ROOT, "kit", "templates", f"{style}.svg"), "w") as fh:
        fh.write(svg)
print(f"wrote {len(k.COLORWAYS) * len(k.STYLES)} colorway SVGs, kit data and templates")

# 4. Python / JS parity
if not shutil.which("node"):
    print("node not found: skipped the kiwi-icon.js parity check")
    sys.exit(0)
cases = [dict(glyph="fox", colorway=c, style=s) for c in k.COLORWAYS for s in k.STYLES]
cases += [dict(glyph=g, style=s) for g in k.GLYPHS for s in k.STYLES]
cases += [dict(glyph="vault", color="#3a7bd5", accent_color="#f5a623", style="flat"),
          dict(glyph=None, path="M4 12h16M12 4v16", hue=300, style="night"),
          dict(glyph="mailtemp", hue=10, tone=0.5, accent=200, title='a "b" & c')]
data = []
for c in cases:
    args = dict(c)
    g = args.pop("glyph")
    data.append({"args": {"glyph": g, **c}, "svg": k.render(g, **args)})
js = r"""
const K = require(process.argv[2]); const cases = require(process.argv[3]);
const ren = { accent_color: 'accentColor' }; let bad = 0;
for (const c of cases) {
  const o = {}; for (const [key, v] of Object.entries(c.args)) o[ren[key] || key] = v;
  if (K.render(o) !== c.svg) { bad++; console.error('differs:', JSON.stringify(c.args)); }
}
console.log(`kiwi-icon.js parity: ${cases.length - bad}/${cases.length} identical`); process.exit(bad ? 1 : 0);
"""
with tempfile.TemporaryDirectory() as tmp:
    cj, sj = os.path.join(tmp, "cases.json"), os.path.join(tmp, "check.js")
    with open(cj, "w") as fh:
        json.dump(data, fh)
    with open(sj, "w") as fh:
        fh.write(js)
    sys.exit(subprocess.run(["node", sj, os.path.join(ROOT, "kit", "kiwi-icon.js"), cj]).returncode)
