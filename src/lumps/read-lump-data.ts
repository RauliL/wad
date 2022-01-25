import { things } from "./readers/things.js";
import { linedefs } from "./readers/linedefs.js";
import { sidedefs } from "./readers/sidedefs.js";
import { vertexes } from "./readers/vertexes.js";
import { segs } from "./readers/segs.js";
import { ssectors } from "./readers/ssectors.js";
import { nodes } from "./readers/nodes.js";
import { sectors } from "./readers/sectors.js";
import { playpal } from "./readers/playpal.js";
import { pnames } from "./readers/pnames.js";
import { texture } from "./readers/texture.js";
import { colormap } from "./readers/colormap.js";
import { flat } from "./readers/flat.js";
import { picture } from "./readers/picture.js";
import { blockmap } from "./readers/blockmap.js";
import { raw } from "./readers/raw.js";
import { ReaderMap } from "./types.js";

export const readers: ReaderMap = {
  things,
  linedefs,
  sidedefs,
  vertexes,
  segs,
  ssectors,
  nodes,
  sectors,
  playpal,
  pnames,
  texture,
  colormap,
  flat,
  picture,
  blockmap,
  raw,
  reject: raw,
};

export const readLumpData = (
  lumpData: Uint8Array,
  lumpType: string = "raw"
) => {
  const name = lumpType.toLowerCase().trim();
  const reader = readers[name];

  if (!reader) throw Error(`Unexpected lumpType ${name}`);

  return reader(new DataView(lumpData.buffer));
};
