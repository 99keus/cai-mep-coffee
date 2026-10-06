"""Export the owner-supplied logo as standalone SVGs with outlined type.
Run with fontTools and Barlow Semi Condensed Medium/SemiBold fonts available.
"""
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from xml.etree import ElementTree

root = Path(__file__).resolve().parents[1]
fonts = {weight: TTFont(root / 'docs/branding/fonts' / f'BarlowSemiCondensed-{name}.ttf') for weight, name in ((500, 'Medium'), (600, 'SemiBold'))}
out = root / 'public/images/company/logo-system'
out.mkdir(parents=True, exist_ok=True)

def lettering(text, size, weight, color, x, y, tracking=0, width=None):
    font = fonts[weight]
    glyphs = font.getGlyphSet()
    cmap = font.getBestCmap()
    scale = size / font['head'].unitsPerEm
    advances = [font['hmtx'][cmap[ord(c)]][0] * scale for c in text]
    if width is not None:
        tracking = (width - sum(advances)) / (len(text) - 1)
    result = []
    for char, advance in zip(text, advances):
        pen = SVGPathPen(glyphs)
        glyphs[cmap[ord(char)]].draw(pen)
        result.append(f'<path fill="{color}" d="{pen.getCommands()}" transform="translate({x:.3f} {y}) scale({scale:.6f} {-scale:.6f})"/>')
        x += advance + tracking
    return ''.join(result), sum(advances) + tracking * (len(text)-1)

def symbol(ring, lens, gap, lat, x, y, size):
    return f'''<g transform="translate({x} {y}) scale({size/100})">
<circle cx="50" cy="50" r="46" fill="none" stroke="{ring}" stroke-width="3.6"/>
<path d="M7 57Q50 76 93 57" fill="none" stroke="{lat}" stroke-width="2.4" stroke-linecap="round"/>
<g transform="rotate(30 50 50)"><path d="M50 12A43 43 0 0 1 50 88A43 43 0 0 1 50 12Z" fill="{lens}" stroke="{gap}" stroke-width="3.5"/>
<path d="M50 12C36 34 64 66 50 88" fill="none" stroke="{gap}" stroke-width="4.2"/></g></g>'''

palettes = {
    'primary': ('#1f3d2f','#3f2518','#ffffff','#b87333','#3f2518','#1f3d2f',None),
    'cream': ('#1f3d2f','#3f2518','#efe4d0','#b87333','#3f2518','#1f3d2f','#efe4d0'),
    'reversed': ('#efe4d0','#efe4d0','#1f3d2f','#d9955a','#efe4d0','#d9955a',None),
    'monochrome': ('#3f2518','#3f2518','#ffffff','#3f2518','#3f2518','#3f2518',None),
}
for variant, (ring,lens,gap,lat,ink,coffee,bg) in palettes.items():
    for layout in ('horizontal','stacked','symbol','compact'):
        if layout == 'horizontal':
            name, width = lettering('CAI MEP',92,600,ink,170,84,6.44)
            sub,_ = lettering('COFFEE',27,500,coffee,170,129,width=width)
            w,h = round(180+width),148
            body = symbol(ring,lens,gap,lat,6,6,136)+name+sub
        elif layout == 'stacked':
            name,width = lettering('CAI MEP',44,600,ink,10,155,3.08)
            w,h = round(width+20),192
            sub,_ = lettering('COFFEE',15,500,coffee,10,183,width=width)
            body = symbol(ring,lens,gap,lat,(w-92)/2,8,92)+name+sub
        elif layout == 'compact':
            name,width = lettering('CAI MEP COFFEE',15,600,ink,40,25,2.1)
            w,h = round(width+50),36
            body = symbol(ring,lens,gap,lat,4,4,26)+name
        else:
            w,h = 100,100
            body = symbol(ring,lens,gap,lat,0,0,100)
        background = f'<rect width="100%" height="100%" fill="{bg}"/>' if bg else ''
        svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" role="img"><title>Cai Mep Coffee — {layout}, {variant}</title>{background}{body}</svg>'
        ElementTree.fromstring(svg)
        (out/f'cai-mep-{layout}-{variant}.svg').write_text(svg)
print('Exported 16 standalone SVG logos.')
