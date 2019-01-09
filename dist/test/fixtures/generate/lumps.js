"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const __1 = require("../../..");
const utils_1 = require("../utils");
exports.generateLumps = () => {
    const testWadData = fs_1.readFileSync('./src/test/fixtures/doom1.wad');
    const testWad = __1.readWad(testWadData);
    const { lumps } = testWad;
    const lumpTypes = Object.keys(utils_1.testLumps);
    const generateLump = (lumpType) => {
        const lumpName = (utils_1.testLumps[lumpType] === true ?
            lumpType :
            utils_1.testLumps[lumpType]);
        const lump = utils_1.findLump(lumps, lumpName.toUpperCase());
        fs_1.writeFileSync(`./src/test/fixtures/expect/lumps/${lumpType}.json.gz`, utils_1.compress(__1.readLumpData(lump.data, lumpType)));
    };
    lumpTypes.forEach(generateLump);
};
//# sourceMappingURL=lumps.js.map