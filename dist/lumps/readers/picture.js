"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
exports.picture = (view) => {
    const width = utils_1.readInt16(view, 0);
    const height = utils_1.readInt16(view, 2);
    const left = utils_1.readInt16(view, 4);
    const top = utils_1.readInt16(view, 6);
    const columnOffsets = [];
    const columns = [];
    let offset = 8;
    for (let i = 0; i < width; i++) {
        columnOffsets.push(utils_1.readInt32(view, offset));
        offset += 4;
        columns.push(new Uint8Array(height));
    }
    for (let i = 0; i < width; i++) {
        offset = columnOffsets[i];
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
                columns[i][j + rowStart] = utils_1.readUint8(view, offset);
                offset++;
            }
            //skip dummy byte
            offset++;
        }
    }
    return {
        width, height, left, top, columns
    };
};
//# sourceMappingURL=picture.js.map