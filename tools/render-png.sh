#!/usr/bin/env bash
# Re-render png/<style>/<size>/<app>.png from svg/<style>/<app>.svg.
# Run after changing or adding an SVG, and commit the result.
# Needs rsvg-convert (Fedora: librsvg2-tools, Debian/Ubuntu: librsvg2-bin).
set -euo pipefail

cd "$(dirname "$0")/.."
SIZES=(16 32 48 64 128 256 512)

command -v rsvg-convert >/dev/null || { echo "rsvg-convert not found" >&2; exit 1; }

rm -rf png
for svg in svg/*/*.svg; do
    style=$(basename "$(dirname "$svg")")
    app=$(basename "$svg" .svg)
    for size in "${SIZES[@]}"; do
        mkdir -p "png/$style/$size"
        rsvg-convert -w "$size" -h "$size" -o "png/$style/$size/$app.png" "$svg"
    done
done
echo "rendered $(find png -name '*.png' | wc -l) PNGs"
