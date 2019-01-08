"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const count = 34;
const size = 256;
exports.colormap = (view) => {
    const maps = [];
    let offset = 0;
    for (let m = 0; m < count; m++) {
        let map = new Uint8Array(size);
        for (let i = 0; i < size; i++) {
            map[i] = utils_1.readUint8(view, offset);
            offset++;
        }
        maps.push(map);
    }
    return maps;
};
//# sourceMappingURL=colormap.js.map