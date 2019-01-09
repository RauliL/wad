"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const __1 = require("../../..");
const utils_1 = require("../utils");
exports.generateObjectModels = () => {
    const testWadData = fs_1.readFileSync('./src/test/fixtures/doom1.wad');
    const testWad = __1.readWad(testWadData);
    const testPwadData = fs_1.readFileSync('./src/test/fixtures/doomba.wad');
    const testPwad = __1.readWad(testPwadData);
    // not present in test data
    const exclude = ['type', 'dmxgusc'];
    const data = __1.createObjectModel(testWad);
    Object.keys(data).forEach(name => {
        if (exclude.includes(name))
            return;
        fs_1.writeFileSync(`./src/test/fixtures/expect/object-model/${name}.json.gz`, utils_1.compress(data[name]));
    });
    const pwadData = __1.createObjectModel(testPwad);
    fs_1.writeFileSync(`./src/test/fixtures/expect/object-model/pwad.json.gz`, utils_1.compress(pwadData));
};
//# sourceMappingURL=object-model.js.map