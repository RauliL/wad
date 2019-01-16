"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_color_1 = require("./get-color");
exports.paletteToCanvas = (palette, block = 16) => {
    const canvas = document.createElement('canvas');
    const size = block * 16;
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext('2d');
    for (let y = 0; y < 16; y++) {
        for (let x = 0; x < 16; x++) {
            const i = y * 16 + x;
            const color = get_color_1.getColor(palette, i);
            context.fillStyle = color;
            context.fillRect(x * block, y * block, block, block);
        }
    }
    return canvas;
};
//# sourceMappingURL=palette-to-canvas.js.map