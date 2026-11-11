/*! kiwi-icon.js 1.0.0 - build a Kiwi-family icon from the stock kiwi base.
 * Same output as kiwi_icon.py. No dependencies. UMD: <script>, require() or a bundler.
 *
 *   const svg = KiwiIcon.render({ glyph: 'fox', colorway: 'ocean', style: 'classic' });
 *   const svg = KiwiIcon.render({ glyph: 'fox', color: '#3a7bd5', accentColor: '#f5a623' });
 *   const svg = KiwiIcon.render({ path: 'M4 12h16M12 4v16', hue: 300, style: 'flat' });
 *   el.innerHTML = svg;   // or KiwiIcon.dataUri(svg) for <img src> / favicon
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else root.KiwiIcon = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var STYLES = ['classic', 'flat', 'night'];
  var ENV = 'M55 56h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H55a2 2 0 0 1-2-2V58a2 2 0 0 1 2-2ZM54 58l10 7 10-7';
  var GLYPHS = {
    updater: { s: 'M64 53V68M57.5 61.5L64 68L70.5 61.5M55 75H73', f: '' },
    ensconce: { s: 'M55 64.5L61 70.5L73 58.5', f: '' },
    killswitch: { s: 'M64 53V63M58.3 57.5A9.5 9.5 0 1 0 69.7 57.5', f: '' },
    server: { s: 'M56 54.5H72a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2ZM56 66.5H72a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Z', f: '' },
    cli: { s: 'M55 57L62 64L55 71M65 72H74', f: '' },
    fox: { s: '', f: 'M53.5 58.5L55.5 52.5L61.5 58H66.5L72.5 52.5L74.5 58.5L64 76Z' },
    pentesting: { s: 'M64 51V56M64 72V77M51 64H56M72 64H77M57 64a7 7 0 1 0 14 0a7 7 0 1 0-14 0', f: 'M62.2 64a1.8 1.8 0 1 0 3.6 0a1.8 1.8 0 1 0-3.6 0' },
    network: { s: 'M64 57L56 71H72Z', f: 'M60.6 57a3.4 3.4 0 1 0 6.8 0a3.4 3.4 0 1 0-6.8 0M52.6 71a3.4 3.4 0 1 0 6.8 0a3.4 3.4 0 1 0-6.8 0M68.6 71a3.4 3.4 0 1 0 6.8 0a3.4 3.4 0 1 0-6.8 0' },
    proxy: { s: 'M55.5 64H59M69 64h3.5M61 59h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Z', f: 'M50.4 64a2.6 2.6 0 1 0 5.2 0a2.6 2.6 0 1 0-5.2 0M72.4 64a2.6 2.6 0 1 0 5.2 0a2.6 2.6 0 1 0-5.2 0' },
    os: { s: 'M55 53.5h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H55a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2ZM60 74.5h8', f: '' },
    mobile: { s: 'M59 52h10a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H59a3 3 0 0 1-3-3V55a3 3 0 0 1 3-3ZM62.5 71.5h3', f: '' },
    cloud: { s: 'M57 73h14a5.5 5.5 0 0 0 0-11a7.5 7.5 0 0 0-14.2 1.8A4.6 4.6 0 0 0 57 73Z', f: '' },
    backup: { s: 'M55 64a9 9 0 1 0 2.6-6.4M55.5 54.5V59H60M64 59.5V64L67.5 66.5', f: '' },
    plugin: { s: 'M60 52v6M68 52v6M56 58h16v4a8 8 0 0 1-16 0ZM64 70v6', f: '' },
    files: { s: 'M53 58a2 2 0 0 1 2-2h6l3 3h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H55a2 2 0 0 1-2-2Z', f: '' },
    chat: { s: 'M55 55h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9l-6 5v-5h-3a2 2 0 0 1-2-2V57a2 2 0 0 1 2-2Z', f: '' },
    docs: { s: 'M57 52h9l6 6v16a2 2 0 0 1-2 2H57a2 2 0 0 1-2-2V54a2 2 0 0 1 2-2ZM66 52v6h6M59 64h9M59 69h9', f: '' },
    monitor: { s: 'M52 64h6l3-8l6 16l3-8h6', f: '' },
    vault: { s: 'M54 60a5 5 0 1 0 10 0a5 5 0 1 0-10 0M62.5 63.5L74 75M70 71l3-3M67 68l2.5-2.5', f: '' },
    dns: { s: 'M53 64a11 11 0 1 0 22 0a11 11 0 1 0-22 0M53 64h22M64 53c-6 6-6 16 0 22M64 53c6 6 6 16 0 22', f: '' },
    mail: { s: ENV, f: '' },
    mailprivate: { s: 'M58.5 60v-3a5.5 5.5 0 0 1 11 0v3M55 60h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H55a2 2 0 0 1-2-2V62a2 2 0 0 1 2-2ZM54 62l10 6 10-6', f: '' },
    mailtemp: { s: ENV, f: '', dash: '4 3' },
    mailalias: { s: 'M68 64a4 4 0 1 1-8 0a4 4 0 1 1 8 0v2a3 3 0 0 0 6 0v-2a10 10 0 1 0-4 8', f: '' },
    mailsend: { s: 'M53 63L75 53L67 75L63 66ZM63 66L75 53', f: '' },
    mailinbox: { s: 'M53 66h7l2 3h4l2-3h7M53 66l4-11h14l4 11v7a1 1 0 0 1-1 1H54a1 1 0 0 1-1-1Z', f: '' }
  };
  var APP_HUES = { updater: 132, ensconce: 245, killswitch: 22, server: 85, cli: 195, fox: 50, pentesting: 345,
    network: 295, proxy: 142, os: 315, mobile: 70, cloud: 220, backup: 165, plugin: 270, files: 35, chat: 180,
    docs: 232, monitor: 150, vault: 330, dns: 283, mail: 105, mailprivate: 105, mailtemp: 105, mailalias: 105,
    mailsend: 105, mailinbox: 105 };
  var COLORWAYS = {
    ember: { label: 'Ember', hue: 50, tone: 1 },
    crimson: { label: 'Crimson', hue: 22, tone: 1 },
    rose: { label: 'Rose', hue: 355, tone: 1 },
    orchid: { label: 'Orchid', hue: 318, tone: 1 },
    violet: { label: 'Violet', hue: 292, tone: 1 },
    indigo: { label: 'Indigo', hue: 268, tone: 1 },
    ocean: { label: 'Ocean', hue: 240, tone: 1 },
    teal: { label: 'Teal', hue: 192, tone: 1 },
    forest: { label: 'Forest', hue: 150, tone: 1 },
    kiwi: { label: 'Kiwi', hue: 128, tone: 1 },
    honey: { label: 'Honey', hue: 82, tone: 1 },
    graphite: { label: 'Graphite', hue: 255, tone: 0.1 },
    'duo-ember-ocean': { label: 'Ember + Ocean', hue: 50, tone: 1, accent: 240 },
    'duo-violet-honey': { label: 'Violet + Honey', hue: 292, tone: 1, accent: 82 },
    'duo-graphite-ember': { label: 'Graphite + Ember', hue: 255, tone: 0.1, accent: 50 }
  };
  var ROLES = { rim: [0.52, 0.13], flesh: [0.80, 0.14], core: [0.97, 0.03], ink: [0.32, 0.09], deep: [0.27, 0.06], text: [0.45, 0.12] };
  var ACCENT_ROLES = { core: [0.95, 0.05], glyph: [0.42, 0.15], night_glyph: [0.82, 0.14] };

  function oklchToHex(L, C, h) {
    var a = C * Math.cos(h * Math.PI / 180), b = C * Math.sin(h * Math.PI / 180);
    var l = Math.pow(L + 0.3963377774 * a + 0.2158037573 * b, 3);
    var m = Math.pow(L - 0.1055613458 * a - 0.0638541728 * b, 3);
    var s = Math.pow(L - 0.0894841775 * a - 1.2914855480 * b, 3);
    var lin = [4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
      -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
      -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s];
    return '#' + lin.map(function (x) {
      x = Math.max(0, Math.min(1, x));
      x = x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055;
      return Math.round(x * 255).toString(16).padStart(2, '0');
    }).join('').toUpperCase();
  }

  function hexToOklch(hex) {
    var v = String(hex).trim().replace(/^#/, '');
    if (v.length === 3) v = v.split('').map(function (c) { return c + c; }).join('');
    if (!/^[0-9a-fA-F]{6}$/.test(v)) throw new Error('not a hex color: ' + hex);
    var rgb = [0, 2, 4].map(function (i) {
      var c = parseInt(v.slice(i, i + 2), 16) / 255;
      return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    var r = rgb[0], g = rgb[1], b = rgb[2];
    var l_ = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
    var m_ = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
    var s_ = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
    var L = 0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720468 * s_;
    var A = 1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_;
    var B = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_;
    var h = Math.atan2(B, A) * 180 / Math.PI;
    return { L: L, C: Math.hypot(A, B), h: (h + 360) % 360 };
  }

  function hexToHueTone(hex) {
    var o = hexToOklch(hex);
    return { hue: Math.round(o.h * 10) / 10, tone: Math.round(Math.max(0, Math.min(1.15, o.C / 0.12)) * 1000) / 1000 };
  }

  function palette(hue, tone, accent, accentTone, overrides) {
    if (tone == null) tone = 1;
    if (accentTone == null) accentTone = 1;
    var p = {};
    Object.keys(ROLES).forEach(function (r) { p[r] = oklchToHex(ROLES[r][0], ROLES[r][1] * tone, hue); });
    p.glyph = p.ink;
    p.night_glyph = p.flesh;
    if (accent != null) {
      Object.keys(ACCENT_ROLES).forEach(function (r) { p[r] = oklchToHex(ACCENT_ROLES[r][0], ACCENT_ROLES[r][1] * accentTone, accent); });
    }
    if (overrides) Object.keys(overrides).forEach(function (k) {
      if (!(k in p)) throw new Error('unknown color role: ' + k);
      p[k] = overrides[k];
    });
    return p;
  }

  var SEEDS_CLASSIC = [[64, 33, 0], [90.8, 48.5, 60], [90.8, 79.5, 120], [64, 95, 0], [37.2, 79.5, 60], [37.2, 48.5, 120]];
  var SEEDS_NIGHT = [[64, 31, 0], [92.6, 47.5, 60], [92.6, 80.5, 120], [64, 97, 0], [35.4, 80.5, 60], [35.4, 47.5, 120]];
  var SEEDS_FLAT = [[64, 22], [100.4, 43], [100.4, 85], [64, 106], [27.6, 85], [27.6, 43]];

  function ellipses(seeds, rx, ry) {
    return seeds.map(function (s) {
      var t = s[2] ? ' transform="rotate(' + s[2] + ' ' + s[0] + ' ' + s[1] + ')"' : '';
      return '<ellipse cx="' + s[0] + '" cy="' + s[1] + '" rx="' + rx + '" ry="' + ry + '"' + t + '/>';
    }).join('');
  }

  function glyphMarkup(color, sw, g, path, pathFill) {
    var out = '';
    if (g) {
      var dash = g.dash ? ' stroke-dasharray="' + g.dash + '"' : '';
      if (g.s) out += '<path d="' + g.s + '" fill="none" stroke="' + color + '" stroke-width="' + sw + '" stroke-linecap="round" stroke-linejoin="round"' + dash + '/>';
      if (g.f) out += '<path d="' + g.f + '" fill="' + color + '"/>';
    }
    if (path) {
      out += pathFill
        ? '<path transform="translate(52 52)" d="' + path + '" fill="' + color + '"/>'
        : '<path transform="translate(52 52)" d="' + path + '" fill="none" stroke="' + color + '" stroke-width="' + sw + '" stroke-linecap="round" stroke-linejoin="round"/>';
    }
    return out;
  }

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  /**
   * render(opts) -> SVG string
   * opts.glyph       key of GLYPHS ('fox' default) or null
   * opts.path        your own 24x24 icon path d; opts.pathFill to fill it
   * opts.style       'classic' | 'flat' | 'night'
   * opts.colorway    key of COLORWAYS
   * opts.hue, opts.tone          main color (OKLCH hue, saturation scale)
   * opts.color                   main color as hex instead
   * opts.accent / opts.accentColor   second color for core + glyph
   * opts.colors      explicit hex per role (rim flesh core ink deep glyph night_glyph)
   * opts.size        width/height attribute (128), opts.title accessible name
   */
  function render(opts) {
    opts = opts || {};
    var glyph = opts.glyph === undefined ? 'fox' : opts.glyph;
    var style = opts.style || 'classic';
    if (STYLES.indexOf(style) < 0) throw new Error('style must be one of ' + STYLES.join(', '));
    var g = null;
    if (glyph) {
      if (!GLYPHS[glyph]) throw new Error('unknown glyph: ' + glyph);
      g = GLYPHS[glyph];
    }
    var h = APP_HUES[glyph] != null ? APP_HUES[glyph] : 50, t = 1, a = null, at = opts.accentTone == null ? 1 : opts.accentTone;
    if (opts.colorway) {
      var cw = COLORWAYS[opts.colorway];
      if (!cw) throw new Error('unknown colorway: ' + opts.colorway);
      h = cw.hue; t = cw.tone == null ? 1 : cw.tone; a = cw.accent == null ? null : cw.accent;
    }
    if (opts.color) { var ht = hexToHueTone(opts.color); h = ht.hue; t = ht.tone; }
    if (opts.hue != null) h = opts.hue;
    if (opts.tone != null) t = opts.tone;
    if (opts.accentColor) { var at2 = hexToHueTone(opts.accentColor); a = at2.hue; at = at2.tone; }
    if (opts.accent != null) a = opts.accent;
    var c = palette(h, t, a, at, opts.colors);

    var size = opts.size === undefined ? 128 : opts.size;
    var label = esc(opts.title || 'kiwi icon');
    var dim = size ? ' width="' + size + '" height="' + size + '"' : '';
    var head = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"' + dim + ' role="img" aria-label="' + label + '"><title>' + label + '</title>';
    var body;
    if (style === 'classic') {
      body = '<circle cx="64" cy="64" r="58" fill="' + c.rim + '"/>' +
        '<circle cx="64" cy="64" r="51" fill="' + c.flesh + '"/>' +
        '<g fill="' + c.ink + '">' + ellipses(SEEDS_CLASSIC, 4, 5.6) + '</g>' +
        '<circle cx="64" cy="64" r="21" fill="' + c.core + '"/>' +
        '<g transform="translate(64 64) scale(0.95) translate(-64 -64)">' + glyphMarkup(c.glyph, 3.6, g, opts.path, opts.pathFill) + '</g>';
    } else if (style === 'flat') {
      body = '<circle cx="64" cy="64" r="58" fill="' + c.flesh + '"/>' +
        '<g fill="' + c.ink + '">' + SEEDS_FLAT.map(function (s) { return '<circle cx="' + s[0] + '" cy="' + s[1] + '" r="3.6"/>'; }).join('') + '</g>' +
        '<circle cx="64" cy="64" r="27" fill="' + c.core + '"/>' +
        '<g transform="translate(64 64) scale(1.3) translate(-64 -64)">' + glyphMarkup(c.glyph, 3.2, g, opts.path, opts.pathFill) + '</g>';
    } else {
      body = '<circle cx="64" cy="64" r="58" fill="' + c.deep + '"/>' +
        '<circle cx="64" cy="64" r="49" fill="none" stroke="' + c.flesh + '" stroke-width="4"/>' +
        '<g fill="' + c.flesh + '">' + ellipses(SEEDS_NIGHT, 3.4, 5) + '</g>' +
        '<g transform="translate(64 64) scale(1.2) translate(-64 -64)">' + glyphMarkup(c.night_glyph, 3.4, g, opts.path, opts.pathFill) + '</g>';
    }
    return head + body + '</svg>\n';
  }

  function dataUri(svg) { return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg); }

  return { version: '1.0.0', STYLES: STYLES, GLYPHS: GLYPHS, APP_HUES: APP_HUES, COLORWAYS: COLORWAYS,
    render: render, palette: palette, oklchToHex: oklchToHex, hexToOklch: hexToOklch,
    hexToHueTone: hexToHueTone, dataUri: dataUri };
});
