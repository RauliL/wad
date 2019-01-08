"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
const zlib = require("zlib");
exports.stringify = (obj) => JSON.stringify(obj, replacer, 2);
const toHash = (value) => crypto.createHash('md5').update(JSON.stringify(value)).digest('base64');
const replacer = (_key, value) => {
    if (value instanceof DataView)
        return toHash(Array.from(new Uint8Array(value.buffer, value.byteOffset, value.byteLength)));
    if (value instanceof Uint8Array)
        return toHash(Array.from(value));
    if (value instanceof Int16Array)
        return toHash(Array.from(value));
    return value;
};
exports.findLump = (lumps, name) => {
    const lump = lumps.find(l => l.name === name);
    if (!lump)
        throw Error(`Could not find lump ${name}`);
    return lump;
};
exports.testLumps = {
    blockmap: true,
    colormap: true,
    flat: 'FLAT1',
    linedefs: true,
    nodes: true,
    picture: 'PLAYA1',
    playpal: true,
    pnames: true,
    raw: 'DEMO1',
    sectors: true,
    segs: true,
    sidedefs: true,
    ssectors: true,
    texture: 'TEXTURE1',
    things: true,
    vertexes: true
};
exports.compress = (value) => zlib.gzipSync(exports.stringify(value));
exports.decompress = (buffer) => JSON.parse(zlib.gunzipSync(buffer).toString('utf8'));
//# sourceMappingURL=utils.js.map