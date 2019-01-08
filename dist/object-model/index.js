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
//# sourceMappingURL=index.js.map