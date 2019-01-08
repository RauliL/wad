"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
exports.texture = (view) => {
    const textureCount = utils_1.readInt32(view, 0);
    const textures = Array(textureCount);
    for (let i = 0; i < textureCount; i++) {
        let offset = utils_1.readInt32(view, i * 4 + 4);
        const texture = {
            name: utils_1.readAscii(view, offset, offset + 8),
            masked: !!utils_1.readInt32(view, offset + 8),
            width: utils_1.readInt16(view, offset + 12),
            height: utils_1.readInt16(view, offset + 14),
            patches: []
        };
        const patchCount = utils_1.readInt16(view, offset + 20);
        offset += 22;
        for (var j = 0; j < patchCount; j++) {
            texture.patches.push({
                x: utils_1.readInt16(view, offset),
                y: utils_1.readInt16(view, offset + 2),
                patch: utils_1.readInt16(view, offset + 4),
                stepDir: utils_1.readInt16(view, offset + 6),
                colormap: utils_1.readInt16(view, offset + 8)
            });
            offset += 10;
        }
        textures[i] = texture;
    }
    return textures;
};
//# sourceMappingURL=texture.js.map