import * as crypto from "crypto";
import * as zlib from "zlib";
import { Lump } from "../../wad/types";

export const stringify = (obj: any) => JSON.stringify(obj, replacer, 2);

const toHash = (value: number[]) =>
  crypto.createHash("md5").update(JSON.stringify(value)).digest("base64");

const replacer = (_key: string, value: any) => {
  if (value instanceof DataView)
    return toHash(
      Array.from(
        new Uint8Array(value.buffer, value.byteOffset, value.byteLength)
      )
    );

  if (value instanceof Uint8Array) return toHash(Array.from(value));
  if (value instanceof Int16Array) return toHash(Array.from(value));

  return value;
};

export const findLump = (lumps: Lump[], name: string) => {
  const lump = lumps.find((l) => l.name === name);

  if (!lump) throw Error(`Could not find lump ${name}`);

  return lump;
};

export const testLumps = {
  blockmap: true,
  colormap: true,
  flat: "FLAT1",
  linedefs: true,
  nodes: true,
  picture: "PLAYA1",
  playpal: true,
  pnames: true,
  raw: "DEMO1",
  sectors: true,
  segs: true,
  sidedefs: true,
  ssectors: true,
  texture: "TEXTURE1",
  things: true,
  vertexes: true,
};

export const compress = (value: any) => zlib.gzipSync(stringify(value));

export const decompress = (buffer: Buffer) =>
  JSON.parse(zlib.gunzipSync(buffer).toString("utf8"));
