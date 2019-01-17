"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const read_wad_1 = require("../wad/read/read-wad");
const palette_to_canvas_1 = require("./palette-to-canvas");
const colormap_to_canvas_1 = require("./colormap-to-canvas");
const object_model_1 = require("../object-model");
const image_to_canvas_1 = require("./image-to-canvas");
const texture_to_canvas_1 = require("./texture-to-canvas");
const level_to_svg_1 = require("./level-to-svg");
const exclude = [
    'type', 'demos', 'dmxgus', 'dmxgusc', 'endoom', 'genmidi', 'music', 'sounds'
];
document.addEventListener('DOMContentLoaded', async () => {
    const filePicker = document.querySelector('input[type="file"]');
    const browser1El = document.querySelector('.browser-1');
    const browser2El = document.querySelector('.browser-2');
    const browser3El = document.querySelector('.browser-3');
    const previewEl = document.querySelector('.preview');
    const reader = new FileReader();
    filePicker.addEventListener('change', e => {
        browser1El.innerHTML = '';
        browser2El.innerHTML = '';
        browser3El.innerHTML = '';
        previewEl.innerHTML = '';
        const [file] = e.target['files'];
        reader.onload = e => {
            const buffer = e.target['result'];
            const wad = read_wad_1.readWad(new Uint8Array(buffer));
            const om = object_model_1.createObjectModel(wad);
            console.log(om);
            const names = Object.keys(om).filter(n => !exclude.includes(n)).filter(n => om[n]);
            names.forEach(name => {
                const browserSelectEl = document.createElement('div');
                browserSelectEl.classList.add('browser-select');
                browserSelectEl.classList.add('browser-select-1');
                browserSelectEl.innerText = name;
                browser1El.appendChild(browserSelectEl);
                browserSelectEl.addEventListener('click', () => {
                    const select1Els = document.querySelectorAll('.browser-select-1');
                    select1Els.forEach(el => el.classList.remove('selected'));
                    browserSelectEl.classList.add('selected');
                    previewEl.innerHTML = '';
                    browser2El.innerHTML = '';
                    browser3El.innerHTML = '';
                    if (name === 'playpal' && om.playpal) {
                        showPlayPal(om.playpal);
                        return;
                    }
                    if (name === 'colormap' && om.colormap && om.colormap.length && om.playpal) {
                        showColorMap(om.colormap, om.playpal[0]);
                        return;
                    }
                    if (name === 'flats' && om.flats) {
                        showImageBrowser(om, 'flats');
                        return;
                    }
                    if (name === 'patches' && om.patches) {
                        showImageBrowser(om, 'patches');
                        return;
                    }
                    if (name === 'sprites' && om.sprites) {
                        showImageBrowser(om, 'sprites');
                        return;
                    }
                    if (name === 'ui' && om.ui) {
                        showImageBrowser(om, 'ui');
                        return;
                    }
                    if (name === 'textures' && om.textures) {
                        showTextureBrowser(om);
                        return;
                    }
                    if (name === 'levels' && om.levels && om.levels.length) {
                        showLevelBrowser(om);
                        return;
                    }
                });
            });
        };
        reader.readAsArrayBuffer(file);
    });
    const showPlayPal = (palettes) => {
        palettes.forEach(palette => {
            const canvas = palette_to_canvas_1.paletteToCanvas(palette);
            previewEl.appendChild(canvas);
        });
    };
    const showColorMap = (colormap, palette) => {
        const canvas = colormap_to_canvas_1.colormapToCanvas(colormap, palette);
        canvas.classList.add('fit');
        previewEl.appendChild(canvas);
    };
    const showImageBrowser = (om, key) => {
        const names = Object.keys(om[key]);
        names.forEach(n => {
            const el = document.createElement('div');
            el.classList.add('browser-select');
            el.classList.add('browser-select-2');
            el.innerText = n;
            browser2El.append(el);
            el.addEventListener('click', () => {
                previewEl.innerHTML = '';
                const image = om[key][n];
                if (image) {
                    const canvas = image_to_canvas_1.imageToCanvas(image, om.playpal[0]);
                    previewEl.appendChild(canvas);
                }
                else {
                    console.error(`${n} not found!`);
                }
            });
        });
    };
    const showTextureBrowser = (om) => {
        const patchList = Object.values(om.patches);
        om.textures.forEach(texture => {
            const el = document.createElement('div');
            el.classList.add('browser-select');
            el.classList.add('browser-select-2');
            el.innerText = texture.name;
            browser2El.append(el);
            el.addEventListener('click', () => {
                previewEl.innerHTML = '';
                const canvas = texture_to_canvas_1.textureToCanvas(texture, patchList, om.playpal[0]);
                previewEl.appendChild(canvas);
            });
        });
    };
    const showLevelElement = {
        grid: true,
        blockmap: false,
        linedefs: true,
        nodes: false,
        reject: false,
        sectors: true,
        segs: false,
        sidedefs: true,
        ssectors: false,
        things: true,
        vertexes: true
    };
    const showLevelBrowser = (om) => {
        om.levels.forEach(level => {
            const el = document.createElement('div');
            el.classList.add('browser-select');
            el.classList.add('browser-select-2');
            el.innerText = level.name;
            browser2El.append(el);
            el.addEventListener('click', () => {
                const draw = () => {
                    browser3El.innerHTML = '';
                    Object.keys(showLevelElement).forEach(key => {
                        const div = document.createElement('div');
                        const label = document.createElement('label');
                        const text = document.createTextNode(` ${key}`);
                        const check = document.createElement('input');
                        check.type = 'checkbox';
                        check.checked = showLevelElement[key];
                        check.onchange = () => {
                            showLevelElement[key] = !showLevelElement[key];
                            draw();
                        };
                        label.appendChild(check);
                        label.appendChild(text);
                        div.appendChild(label);
                        browser3El.appendChild(div);
                    });
                    previewEl.innerHTML = '';
                    const svg = level_to_svg_1.levelToSvg(level, showLevelElement);
                    svg.classList.add('fit');
                    previewEl.appendChild(svg);
                };
                draw();
            });
        });
    };
});
//# sourceMappingURL=index.js.map