"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
// nb this is just a hack, should actually search for an unused color and use
// that instead
const transparent = 247;
exports.picture = (view) => {
    const width = utils_1.readInt16(view, 0);
    const height = utils_1.readInt16(view, 2);
    const left = utils_1.readInt16(view, 4);
    const top = utils_1.readInt16(view, 6);
    const columnOffsets = [];
    const data = new Uint8Array(width * height);
    data.fill(transparent);
    let offset = 8;
    for (let i = 0; i < width; i++) {
        columnOffsets.push(utils_1.readInt32(view, offset));
        offset += 4;
    }
    for (let x = 0; x < width; x++) {
        offset = columnOffsets[x];
        let rowStart = 0;
        while (rowStart !== 255) {
            rowStart = utils_1.readUint8(view, offset);
            offset++;
            if (rowStart === 255)
                break;
            let pixelCount = utils_1.readUint8(view, offset);
            offset++;
            //skip dummy byte
            offset++;
            for (let j = 0; j < pixelCount; j++) {
                const y = j + rowStart;
                const i = y * width + x;
                const c = utils_1.readUint8(view, offset);
                data[i] = c;
                offset++;
            }
            //skip dummy byte
            offset++;
        }
    }
    return {
        width, height, left, top, data, transparent
    };
};
//# sourceMappingURL=picture.js.map