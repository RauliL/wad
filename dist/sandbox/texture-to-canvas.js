"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const image_to_canvas_1 = require("./image-to-canvas");
exports.textureToCanvas = (texture, pictures, palette, block = 4) => {
    const { width, height, patches } = texture;
    const canvas = document.createElement('canvas');
    const cw = block * width;
    const ch = block * height;
    canvas.width = cw;
    canvas.height = ch;
    const context = canvas.getContext('2d');
    patches.forEach(p => {
        const { patch, x, y } = p;
        const picture = pictures[patch];
        const patchCanvas = image_to_canvas_1.imageToCanvas(picture, palette, block);
        context.drawImage(patchCanvas, x * block, y * block);
    });
    return canvas;
};
//# sourceMappingURL=texture-to-canvas.js.map