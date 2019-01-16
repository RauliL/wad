(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const things_1 = require("./readers/things");
const linedefs_1 = require("./readers/linedefs");
const sidedefs_1 = require("./readers/sidedefs");
const vertexes_1 = require("./readers/vertexes");
const segs_1 = require("./readers/segs");
const ssectors_1 = require("./readers/ssectors");
const nodes_1 = require("./readers/nodes");
const sectors_1 = require("./readers/sectors");
const playpal_1 = require("./readers/playpal");
const pnames_1 = require("./readers/pnames");
const texture_1 = require("./readers/texture");
const colormap_1 = require("./readers/colormap");
const flat_1 = require("./readers/flat");
const picture_1 = require("./readers/picture");
const blockmap_1 = require("./readers/blockmap");
const raw_1 = require("./readers/raw");
exports.readers = {
    things: things_1.things, linedefs: linedefs_1.linedefs, sidedefs: sidedefs_1.sidedefs, vertexes: vertexes_1.vertexes, segs: segs_1.segs, ssectors: ssectors_1.ssectors, nodes: nodes_1.nodes, sectors: sectors_1.sectors, playpal: playpal_1.playpal,
    pnames: pnames_1.pnames, texture: texture_1.texture, colormap: colormap_1.colormap, flat: flat_1.flat, picture: picture_1.picture, blockmap: blockmap_1.blockmap, raw: raw_1.raw,
    reject: raw_1.raw
};
exports.readLumpData = (lumpData, lumpType = 'raw') => {
    const name = lumpType.toLowerCase().trim();
    const reader = exports.readers[name];
    if (!reader)
        throw Error(`Unexpected lumpType ${name}`);
    return reader(new DataView(lumpData.buffer));
};

},{"./readers/blockmap":2,"./readers/colormap":3,"./readers/flat":4,"./readers/linedefs":5,"./readers/nodes":6,"./readers/picture":7,"./readers/playpal":8,"./readers/pnames":9,"./readers/raw":10,"./readers/sectors":11,"./readers/segs":12,"./readers/sidedefs":13,"./readers/ssectors":14,"./readers/texture":15,"./readers/things":16,"./readers/vertexes":17}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
exports.blockmap = (view) => {
    const x = utils_1.readInt16(view, 0);
    const y = utils_1.readInt16(view, 2);
    const columns = utils_1.readInt16(view, 4);
    const rows = utils_1.readInt16(view, 6);
    const size = columns * rows;
    const blockOffsets = Array(size);
    let offset = 8;
    for (let i = 0; i < size; i++) {
        //offsets are short, but we want bytes
        blockOffsets[i] = utils_1.readUint16(view, offset) * 2;
        offset += 2;
    }
    const blocks = [];
    for (let i = 0; i < size; i++) {
        offset = blockOffsets[i] + 2; //skip leading 0
        const linedefs = [];
        let linedef;
        while (linedef !== -1) {
            linedef = utils_1.readInt16(view, offset);
            offset += 2;
            if (linedef !== -1) {
                linedefs.push(linedef);
            }
        }
        blocks.push(new Int16Array(linedefs));
    }
    return { x, y, columns, rows, blocks };
};

},{"../../utils":25}],3:[function(require,module,exports){
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

},{"../../utils":25}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const width = 64;
const height = 64;
const count = width * height;
exports.flat = (view) => {
    const data = new Uint8Array(count);
    for (let i = 0; i < count; i++) {
        data[i] = utils_1.readUint8(view, i);
    }
    return { width, height, data };
};

},{"../../utils":25}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const size = 14;
exports.linedefs = (view) => {
    const count = view.byteLength / size;
    const getFlags = flags => ({
        impassable: !!(flags & 0x0001),
        blockMonster: !!(flags & 0x0002),
        doubleSided: !!(flags & 0x0004),
        upperUnpegged: !!(flags & 0x0008),
        lowerUnpegged: !!(flags & 0x0010),
        secret: !!(flags & 0x0020),
        blockSound: !!(flags & 0x0040),
        hidden: !!(flags & 0x0080),
        shown: !!(flags & 0x0100)
    });
    const getLinedef = (view, offset) => {
        const startVertex = utils_1.readInt16(view, offset);
        const endVertex = utils_1.readInt16(view, offset + 2);
        const flags = getFlags(utils_1.readInt16(view, offset + 4));
        const specialType = utils_1.readInt16(view, offset + 6);
        const sectorTag = utils_1.readInt16(view, offset + 8);
        const rightSidedef = utils_1.readInt16(view, offset + 10);
        const leftSidedef = utils_1.readInt16(view, offset + 12);
        return {
            startVertex, endVertex, flags, specialType, sectorTag, rightSidedef,
            leftSidedef
        };
    };
    const linedefs = Array(count);
    for (let i = 0; i < count; i++) {
        linedefs[i] = getLinedef(view, i * size);
    }
    return linedefs;
};

},{"../../utils":25}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const size = 28;
exports.nodes = (view) => {
    const count = view.byteLength / size;
    const getNode = (view, offset) => {
        const x = utils_1.readInt16(view, offset);
        const y = utils_1.readInt16(view, offset + 2);
        const offsetX = utils_1.readInt16(view, offset + 4);
        const offsetY = utils_1.readInt16(view, offset + 6);
        const leftBBox = {
            top: utils_1.readInt16(view, offset + 8),
            bottom: utils_1.readInt16(view, offset + 10),
            left: utils_1.readInt16(view, offset + 12),
            right: utils_1.readInt16(view, offset + 14)
        };
        const rightBBox = {
            top: utils_1.readInt16(view, offset + 16),
            bottom: utils_1.readInt16(view, offset + 18),
            left: utils_1.readInt16(view, offset + 20),
            right: utils_1.readInt16(view, offset + 22)
        };
        const rightChild = utils_1.readInt16(view, offset + 24);
        const leftChild = utils_1.readInt16(view, offset + 26);
        return {
            x, y, offsetX, offsetY, leftBBox, rightBBox, rightChild, leftChild
        };
    };
    const nodes = Array(count);
    for (let i = 0; i < count; i++) {
        nodes[i] = getNode(view, i * size);
    }
    return nodes;
};

},{"../../utils":25}],7:[function(require,module,exports){
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
                data[i] = utils_1.readUint8(view, offset);
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

},{"../../utils":25}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const paletteCount = 14;
exports.playpal = (view) => {
    const palettes = Array(paletteCount);
    let offset = 0;
    for (var i = 0; i < paletteCount; i++) {
        const palette = new Uint8Array(768);
        for (let j = 0; j < 256; j++) {
            let r = utils_1.readUint8(view, offset);
            offset++;
            let g = utils_1.readUint8(view, offset);
            offset++;
            let b = utils_1.readUint8(view, offset);
            offset++;
            const p = j * 3;
            palette[p] = r;
            palette[p + 1] = g;
            palette[p + 2] = b;
        }
        palettes[i] = palette;
    }
    return palettes;
};

},{"../../utils":25}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
exports.pnames = (view) => {
    const count = utils_1.readInt32(view, 0);
    let offset = 4;
    const pnames = Array(count);
    for (var i = 0; i < count; i++) {
        pnames[i] = utils_1.readAscii(view, offset, offset + 8);
        offset += 8;
    }
    return pnames;
};

},{"../../utils":25}],10:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.raw = (view) => view;

},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const size = 26;
exports.sectors = (view) => {
    const count = view.byteLength / size;
    const getSector = (view, offset) => {
        const floorHeight = utils_1.readInt16(view, offset);
        const ceilingHeight = utils_1.readInt16(view, offset + 2);
        const floor = utils_1.readAscii(view, offset + 4, offset + 12);
        const ceiling = utils_1.readAscii(view, offset + 12, offset + 20);
        const light = utils_1.readInt16(view, offset + 20);
        const type = utils_1.readInt16(view, offset + 22);
        const tag = utils_1.readInt16(view, offset + 24);
        return {
            floorHeight, ceilingHeight, floor, ceiling, light, type, tag
        };
    };
    const sectors = Array(count);
    for (let i = 0; i < count; i++) {
        sectors[i] = getSector(view, i * size);
    }
    return sectors;
};

},{"../../utils":25}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const size = 12;
exports.segs = (view) => {
    const count = view.byteLength / size;
    const getSeg = (view, offs) => {
        const startVertex = utils_1.readInt16(view, offs);
        const endVertex = utils_1.readInt16(view, offs + 2);
        const angle = utils_1.readInt16(view, offs + 4);
        const linedef = utils_1.readInt16(view, offs + 6);
        const direction = utils_1.readInt16(view, offs + 8);
        const offset = utils_1.readInt16(view, offs + 10);
        return {
            startVertex, endVertex, angle, linedef, direction, offset
        };
    };
    const segs = Array(count);
    for (let i = 0; i < count; i++) {
        segs[i] = getSeg(view, i * size);
    }
    return segs;
};

},{"../../utils":25}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const size = 30;
exports.sidedefs = (view) => {
    const count = view.byteLength / size;
    const getSidedef = (view, offset) => {
        const x = utils_1.readInt16(view, offset);
        const y = utils_1.readInt16(view, offset + 2);
        const upper = utils_1.readAscii(view, offset + 4, offset + 12);
        const lower = utils_1.readAscii(view, offset + 12, offset + 20);
        const middle = utils_1.readAscii(view, offset + 20, offset + 28);
        const sector = utils_1.readInt16(view, offset + 28);
        return {
            x, y, upper, lower, middle, sector
        };
    };
    const sidedefs = Array(count);
    for (let i = 0; i < count; i++) {
        sidedefs[i] = getSidedef(view, i * size);
    }
    return sidedefs;
};

},{"../../utils":25}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const size = 4;
exports.ssectors = (view) => {
    const count = view.byteLength / size;
    const getSsector = (view, offset) => {
        const count = utils_1.readInt16(view, offset);
        const startSeg = utils_1.readInt16(view, offset + 2);
        return { count, startSeg };
    };
    const ssectors = Array(count);
    for (let i = 0; i < count; i++) {
        ssectors[i] = getSsector(view, i * size);
    }
    return ssectors;
};

},{"../../utils":25}],15:[function(require,module,exports){
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

},{"../../utils":25}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const size = 10;
exports.things = (view) => {
    const count = view.byteLength / size;
    const getFlags = flags => ({
        easy: !!(flags & 0x0001),
        medium: !!(flags & 0x0002),
        hard: !!(flags & 0x0004),
        deaf: !!(flags & 0x0008),
        multiplayer: !!(flags & 0x0010)
    });
    const getThing = (view, offset) => {
        const x = utils_1.readInt16(view, offset);
        const y = utils_1.readInt16(view, offset + 2);
        const angle = utils_1.readInt16(view, offset + 4);
        const type = utils_1.readInt16(view, offset + 6);
        const flags = getFlags(utils_1.readInt16(view, offset + 8));
        return {
            x, y, angle, type, flags
        };
    };
    const things = Array(count);
    for (var i = 0; i < count; i++) {
        things[i] = getThing(view, i * size);
    }
    return things;
};

},{"../../utils":25}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const size = 4;
exports.vertexes = (view) => {
    const count = view.byteLength / size;
    const getVertex = (view, offset) => {
        const x = utils_1.readInt16(view, offset);
        const y = utils_1.readInt16(view, offset + 2);
        return { x, y };
    };
    const vertexes = Array(count);
    for (let i = 0; i < count; i++) {
        vertexes[i] = getVertex(view, i * size);
    }
    return vertexes;
};

},{"../../utils":25}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const read_lump_data_1 = require("../lumps/read-lump-data");
//should be a unique lump name, otherwise associations are unreliable
const getLump = (wad, nameToIndexMap, processed, name, lumpType = name) => {
    const index = nameToIndexMap[name];
    if (index >= 0) {
        processed[index] = true;
        return read_lump_data_1.readLumpData(wad.lumps[index].data, lumpType);
    }
};
const getLevelIndices = (lumps) => lumps.reduce((indices, lump, i) => {
    if (lump.name === 'THINGS') {
        indices.push(i - 1);
    }
    return indices;
}, Array());
const getLevel = (wad, index, processed) => {
    const lumpNames = [
        'things', 'linedefs', 'sidedefs', 'vertexes', 'segs', 'ssectors', 'nodes',
        'sectors', 'reject', 'blockmap'
    ];
    processed[index] = true;
    return lumpNames.reduce((map, lumpName, i) => {
        processed[index + i + 1] = true;
        map[lumpName] = read_lump_data_1.readLumpData(wad.lumps[index + i + 1].data, lumpName);
        return map;
    }, {
        name: wad.lumps[index].name
    });
};
const getLevels = (wad, processed) => {
    const levelIndices = getLevelIndices(wad.lumps);
    const levels = Array(levelIndices.length);
    levelIndices.forEach((index, i) => levels[i] = getLevel(wad, index, processed));
    return levels;
};
const getFlats = (wad, nameToIndexMap, processed) => {
    const start = nameToIndexMap['F_START'];
    const end = nameToIndexMap['F_END'];
    const flatMap = {};
    if (start && end) {
        for (let i = start; i <= end; i++) {
            const lump = wad.lumps[i];
            if (lump.data.byteLength > 0) {
                flatMap[lump.name] = read_lump_data_1.readLumpData(wad.lumps[i].data, 'flat');
            }
            processed[i] = true;
        }
    }
    return flatMap;
};
const getSprites = (wad, nameToIndexMap, processed) => {
    const start = nameToIndexMap['S_START'];
    const end = nameToIndexMap['S_END'];
    const sprites = {};
    if (start && end) {
        for (let i = start; i <= end; i++) {
            const lump = wad.lumps[i];
            if (lump.data.byteLength > 0) {
                sprites[lump.name] = read_lump_data_1.readLumpData(wad.lumps[i].data, 'picture');
            }
            processed[i] = true;
        }
    }
    return sprites;
};
const getPnames = (wad, nameToIndexMap, processed) => getLump(wad, nameToIndexMap, processed, 'PNAMES') || [];
const markProcessed = (name, nameToIndexMap, processed) => {
    if (nameToIndexMap[name] >= 0) {
        processed[nameToIndexMap[name]] = true;
    }
};
const getPatches = (wad, nameToIndexMap, processed) => {
    const markers = [
        'P_START', 'P_END', 'P1_START', 'P1_END', 'P2_START', 'P2_END', 'P3_START',
        'P3_END'
    ];
    markers.forEach(name => markProcessed(name, nameToIndexMap, processed));
    // sometimes pnames are lower case
    const names = getPnames(wad, nameToIndexMap, processed).map(p => p.toUpperCase());
    const patches = {};
    names.forEach(name => {
        patches[name] = getLump(wad, nameToIndexMap, processed, name, 'picture');
    });
    return patches;
};
const getPlayPal = (wad, nameToIndexMap, processed) => getLump(wad, nameToIndexMap, processed, 'PLAYPAL') || [];
const getColorMap = (wad, nameToIndexMap, processed) => getLump(wad, nameToIndexMap, processed, 'COLORMAP') || [];
const concatIfPresent = (...arrs) => {
    const result = Array();
    arrs.forEach(a => {
        if (a)
            result.push(...a);
    });
    return result;
};
const getTextures = (wad, nameToIndexMap, processed) => {
    const t1 = getLump(wad, nameToIndexMap, processed, 'TEXTURE1', 'texture');
    const t2 = getLump(wad, nameToIndexMap, processed, 'TEXTURE2', 'texture');
    return concatIfPresent(t1, t2);
};
const getSounds = (wad, nameToIndexMap, processed) => {
    const names = Object.keys(nameToIndexMap).filter(name => name.indexOf('DP') === 0 || name.indexOf('DS') === 0);
    const sounds = {};
    names.forEach(name => {
        sounds[name] = getLump(wad, nameToIndexMap, processed, name, 'raw');
    });
    return sounds;
};
const getMusic = (wad, nameToIndexMap, processed) => {
    const names = Object.keys(nameToIndexMap).filter(name => name.indexOf('D_') === 0);
    const music = {};
    names.forEach(name => {
        music[name] = getLump(wad, nameToIndexMap, processed, name, 'raw');
    });
    return music;
};
const getDemos = (wad, nameToIndexMap, processed) => {
    const names = Object.keys(nameToIndexMap).filter(name => name.indexOf('DEMO') === 0);
    const demos = {};
    names.forEach(name => {
        demos[name] = getLump(wad, nameToIndexMap, processed, name, 'raw');
    });
    return demos;
};
const getUi = (wad, nameToIndexMap, processed) => {
    const prefixes = [
        'HELP', 'CREDIT', 'TITLEPIC', 'VICTORY', 'END', 'INTERPIC', 'DMENUPIC',
        'BOSSBACK', 'AMM', 'ST', 'M_', 'BRDR', 'WI', 'PFUB', 'CWILV'
    ];
    const names = Object.keys(nameToIndexMap).filter(name => !processed[nameToIndexMap[name]] &&
        !!prefixes.find(prefix => name.indexOf(prefix) === 0));
    const ui = {};
    names.forEach(name => {
        ui[name] = getLump(wad, nameToIndexMap, processed, name, 'picture');
    });
    return ui;
};
exports.defaultOptions = {
    type: 'IWAD',
    colormap: true,
    demos: true,
    dmxgus: true,
    dmxgusc: true,
    endoom: true,
    flats: true,
    genmidi: true,
    levels: true,
    music: true,
    playpal: true,
    patches: true,
    sounds: true,
    sprites: true,
    textures: true,
    ui: true
};
exports.createObjectModel = (wad, options) => {
    if (!options)
        options = exports.defaultOptions;
    const processed = Array(wad.lumps.length);
    const indexMap = {};
    wad.lumps.forEach((lump, i) => {
        processed[i] = false;
        //this method means that if there are multiple lumps with the same name
        //that you can only ever get the last one
        indexMap[lump.name] = i;
    });
    const type = wad.type;
    const objectModel = { type };
    if (options.colormap)
        objectModel.colormap = getColorMap(wad, indexMap, processed);
    if (options.demos)
        objectModel.demos = getDemos(wad, indexMap, processed);
    if (options.dmxgus)
        objectModel.dmxgus = getLump(wad, indexMap, processed, 'DMXGUS', 'raw');
    if (options.dmxgusc)
        objectModel.dmxgusc = getLump(wad, indexMap, processed, 'DMXGUSC', 'raw');
    if (options.endoom)
        objectModel.endoom = getLump(wad, indexMap, processed, 'ENDOOM', 'raw');
    if (options.flats)
        objectModel.flats = getFlats(wad, indexMap, processed);
    if (options.genmidi)
        objectModel.genmidi = getLump(wad, indexMap, processed, 'GENMIDI', 'raw');
    if (options.levels)
        objectModel.levels = getLevels(wad, processed);
    if (options.music)
        objectModel.music = getMusic(wad, indexMap, processed);
    if (options.playpal)
        objectModel.playpal = getPlayPal(wad, indexMap, processed);
    if (options.patches)
        objectModel.patches = getPatches(wad, indexMap, processed);
    if (options.sounds)
        objectModel.sounds = getSounds(wad, indexMap, processed);
    if (options.sprites)
        objectModel.sprites = getSprites(wad, indexMap, processed);
    if (options.textures)
        objectModel.textures = getTextures(wad, indexMap, processed);
    //must be called last or it catches things it shouldn't due to sloppy prefix matching
    if (options.ui)
        objectModel.ui = getUi(wad, indexMap, processed);
    return objectModel;
};

},{"../lumps/read-lump-data":1}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_color_1 = require("./get-color");
exports.colormapToCanvas = (colormap, palette, block = 16) => {
    const cw = colormap.length;
    const ch = colormap[0].length;
    const canvas = document.createElement('canvas');
    const width = block * cw;
    const height = block * ch;
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');
    for (let x = 0; x < cw; x++) {
        const map = colormap[x];
        for (let y = 0; y < ch; y++) {
            const i = map[y];
            const color = get_color_1.getColor(palette, i);
            context.fillStyle = color;
            context.fillRect(x * block, y * block, block, block);
        }
    }
    return canvas;
};

},{"./get-color":20}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColor = (palette, i) => {
    const p = i * 3;
    const r = palette[p];
    const g = palette[p + 1];
    const b = palette[p + 2];
    const color = `rgb( ${r}, ${g}, ${b} )`;
    return color;
};

},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_color_1 = require("./get-color");
exports.imageToCanvas = (image, palette, block = 4) => {
    const { width, height, data, transparent } = image;
    const canvas = document.createElement('canvas');
    const cw = block * width;
    const ch = block * height;
    canvas.width = cw;
    canvas.height = ch;
    const context = canvas.getContext('2d');
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const i = y * width + x;
            const c = data[i];
            if (c !== transparent) {
                const color = get_color_1.getColor(palette, c);
                context.fillStyle = color;
                context.fillRect(x * block, y * block, block, block);
            }
        }
    }
    return canvas;
};

},{"./get-color":20}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const read_wad_1 = require("../wad/read/read-wad");
const palette_to_canvas_1 = require("./palette-to-canvas");
const colormap_to_canvas_1 = require("./colormap-to-canvas");
const object_model_1 = require("../object-model");
const image_to_canvas_1 = require("./image-to-canvas");
const texture_to_canvas_1 = require("./texture-to-canvas");
const exclude = [
    'type', 'demos', 'dmxgus', 'dmxgusc', 'endoom', 'genmidi', 'music', 'sounds'
];
document.addEventListener('DOMContentLoaded', async () => {
    const filePicker = document.querySelector('input[type="file"]');
    const lumpsEl = document.querySelector('.lumps');
    const lumps2El = document.querySelector('.lumps2');
    const previewEl = document.querySelector('.preview');
    const reader = new FileReader();
    filePicker.addEventListener('change', e => {
        lumpsEl.innerHTML = '';
        lumps2El.innerHTML = '';
        previewEl.innerHTML = '';
        const [file] = e.target['files'];
        reader.onload = e => {
            const buffer = e.target['result'];
            const wad = read_wad_1.readWad(new Uint8Array(buffer));
            const om = object_model_1.createObjectModel(wad);
            console.log(om);
            const names = Object.keys(om).filter(n => !exclude.includes(n)).filter(n => om[n]);
            names.forEach(name => {
                const chooseLumpEl = document.createElement('div');
                chooseLumpEl.classList.add('lump');
                chooseLumpEl.innerText = name;
                lumpsEl.appendChild(chooseLumpEl);
                chooseLumpEl.addEventListener('click', () => {
                    const lumpEls = document.querySelectorAll('.lump');
                    lumpEls.forEach(el => el.classList.remove('selected'));
                    chooseLumpEl.classList.add('selected');
                    previewEl.innerHTML = '';
                    lumps2El.innerHTML = '';
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
            el.classList.add('lump2');
            el.innerText = n;
            lumps2El.append(el);
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
            el.classList.add('lump2');
            el.innerText = texture.name;
            lumps2El.append(el);
            el.addEventListener('click', () => {
                previewEl.innerHTML = '';
                const canvas = texture_to_canvas_1.textureToCanvas(texture, patchList, om.playpal[0]);
                previewEl.appendChild(canvas);
            });
        });
    };
});

},{"../object-model":18,"../wad/read/read-wad":29,"./colormap-to-canvas":19,"./image-to-canvas":21,"./palette-to-canvas":23,"./texture-to-canvas":24}],23:[function(require,module,exports){
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

},{"./get-color":20}],24:[function(require,module,exports){
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

},{"./image-to-canvas":21}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readUint8 = (view, offset) => view.getUint8(offset);
exports.readInt16 = (view, offset) => view.getInt16(offset, true);
exports.readUint16 = (view, offset) => view.getUint16(offset, true);
exports.readInt32 = (view, offset) => view.getInt32(offset, true);
exports.writeInt16 = (view, offset, value) => view.setInt16(offset, value, true);
exports.writeUint16 = (view, offset, value) => view.setUint16(offset, value, true);
exports.writeInt32 = (view, offset, value) => view.setInt32(offset, value, true);
exports.readAscii = (view, offset, length) => {
    let result = '';
    for (let i = offset; i < length; i++) {
        result += String.fromCharCode(view.getUint8(i));
    }
    return result.replace(/\0/g, '');
};
exports.writeAscii = (view, offset, value) => {
    for (let i = 0; i < value.length; i++) {
        view.setUint8(offset + i, value.charCodeAt(i));
    }
};
exports.ensureStringLength = (str, len) => {
    if (str.length > len) {
        str = str.substr(0, len);
    }
    while (str.length < len) {
        str += '\0';
    }
    return str;
};
exports.lumpNameRegex = /[0-9A-Z\[\]_\-\\]+/;

},{}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const read_wad_header_1 = require("./read-wad-header");
const readLumpInfo = (wadView, lumpOffset, id) => {
    const offset = utils_1.readInt32(wadView, lumpOffset);
    const length = utils_1.readInt32(wadView, lumpOffset + 4);
    const name = utils_1.readAscii(wadView, lumpOffset + 8, lumpOffset + 16);
    return {
        id,
        name,
        offset,
        length
    };
};
exports.readLumpInfoTable = (data, header) => {
    header = header || read_wad_header_1.readWadHeader(data);
    const wadView = new DataView(data.buffer);
    const infoTable = [];
    for (let i = 0; i < header.numberOfLumps; i++) {
        const offset = 16 * i + header.infoTableOffset;
        infoTable.push(readLumpInfo(wadView, offset, i));
    }
    return infoTable;
};

},{"../../utils":25,"./read-wad-header":28}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readLump = (wadData, info) => {
    const { name, offset, length } = info;
    const data = new Uint8Array(wadData.slice(offset, offset + length));
    return { name, data };
};

},{}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
exports.readWadHeader = (data) => {
    const wadView = new DataView(data.buffer);
    const type = utils_1.readAscii(wadView, 0, 4);
    const numberOfLumps = utils_1.readInt32(wadView, 4);
    const infoTableOffset = utils_1.readInt32(wadView, 8);
    return {
        type,
        numberOfLumps,
        infoTableOffset
    };
};

},{"../../utils":25}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const read_wad_header_1 = require("./read-wad-header");
const read_lump_info_1 = require("./read-lump-info");
const read_lump_1 = require("./read-lump");
exports.readWad = (data) => {
    const header = read_wad_header_1.readWadHeader(data);
    const infoTable = read_lump_info_1.readLumpInfoTable(data, header);
    const lumps = infoTable.map(lumpInfo => read_lump_1.readLump(data, lumpInfo));
    const { type } = header;
    return { type, lumps };
};

},{"./read-lump":27,"./read-lump-info":26,"./read-wad-header":28}]},{},[22]);
