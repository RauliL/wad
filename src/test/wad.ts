import * as assert from "assert";
import { readFileSync, writeFileSync } from "fs";
import { Lump, Wad } from "../wad/types";
import { readWad, writeWad } from "..";
import { readLumpInfoTable } from "../wad/read/read-lump-info";

const testWadData = readFileSync("./src/test/fixtures/doom1.wad");

describe("wad", () => {
  it("reads a WAD", () => {
    const wad = readWad(testWadData);

    assert.strictEqual(wad.type, "IWAD");
    assert.strictEqual(wad.lumps.length, 1264);
  });

  it("writes a WAD", () => {
    const expectData = readFileSync("./src/test/fixtures/doom1.wad");
    const wad = readWad(testWadData);
    const out = writeWad(wad);

    assert.deepEqual(out.buffer, expectData.buffer);
  });

  it("gets a lump info table", () => {
    const lumps = readLumpInfoTable(testWadData);

    assert.strictEqual(lumps.length, 1264);
  });

  it("ensures string length for lump names", () => {
    const lumpData = new Uint8Array([1, 2, 3]);

    const lump: Lump = {
      name: "GOODLUMP1",
      data: lumpData,
    };

    const expect: Lump = {
      name: "GOODLUMP",
      data: lumpData,
    };

    const wadView = writeWad({
      type: "PWAD",
      lumps: [lump],
    });

    const wad = readWad(wadView);

    assert.deepEqual(wad.lumps[0], expect);
  });

  it("enforces valid lump names", () => {
    const lumpData = new Uint8Array([1, 2, 3]);

    const lump: Lump = {
      name: "bad lump name",
      data: lumpData,
    };

    const wad: Wad = {
      type: "PWAD",
      lumps: [lump],
    };

    assert.throws(() => writeWad(wad));
  });
});
