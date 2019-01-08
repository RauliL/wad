"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const paletteCount = 14;
exports.playpal = (view) => {
    const palettes = Array(paletteCount);
    let offset = 0;
    for (var i = 0; i < paletteCount; i++) {
        const palette = Array(256);
        for (let j = 0; j < 256; j++) {
            let r = utils_1.readUint8(view, offset);
            offset++;
            let g = utils_1.readUint8(view, offset);
            offset++;
            let b = utils_1.readUint8(view, offset);
            offset++;
            palette[j] = [r, g, b];
        }
        palettes[i] = palette;
    }
    return palettes;
};
//# sourceMappingURL=playpal.js.map