import * as assert from "assert";
import { readFileSync } from "fs";
import { stringify, decompress } from "./fixtures/utils";
import { readWad, createObjectModel } from "..";

const testWadData = readFileSync("./src/test/fixtures/doom1.wad");
const testWad = readWad(testWadData);

describe("object model", () => {
  // not present in test data
  const exclude = ["type", "dmxgusc"];

  // names overlap and you can't get UI unless you get the whole thing
  const excludeSingle = ["ui"];

  const data = createObjectModel(testWad);

  Object.keys(data).forEach((name) => {
    if (exclude.includes(name)) return;

    const expect = decompress(
      readFileSync(`./src/test/fixtures/expect/object-model/${name}.json.gz`)
    );

    it(name, () => {
      const value = JSON.parse(stringify(data[name]));

      assert.deepEqual(value, expect);
    });

    if (excludeSingle.includes(name)) return;

    it(`get just ${name} via options`, () => {
      const data = createObjectModel(testWad, { [name]: true });
      const value = JSON.parse(stringify(data[name]));

      assert.deepEqual(value, expect);
    });
  });

  it("pwad", () => {
    const testWadData = readFileSync("./src/test/fixtures/doomba.wad");
    const testWad = readWad(testWadData);
    const data = createObjectModel(testWad);
    const value = JSON.parse(stringify(data));

    const expect = decompress(
      readFileSync(`./src/test/fixtures/expect/object-model/pwad.json.gz`)
    );

    assert.deepEqual(value, expect);
  });
});
