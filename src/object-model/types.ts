import {
  Color,
  Thing,
  Linedef,
  Sidedef,
  Vertex,
  Seg,
  Ssector,
  Node,
  Sector,
  Blockmap,
  Flat,
  Picture,
  Texture,
} from "../lumps/types.js";
import { WadType } from "../wad/types.js";

export type NameToIndexMap = Record<string, number>;

export interface Level {
  name: string;
  things: Thing[];
  linedefs: Linedef[];
  sidedefs: Sidedef[];
  vertexes: Vertex[];
  segs: Seg[];
  ssectors: Ssector[];
  nodes: Node[];
  sectors: Sector[];
  reject: DataView;
  blockmap: Blockmap;
}

export type FlatMap = Record<string, Flat>;
export type PictureMap = Record<string, Picture>;
export type RawMap = Record<string, DataView>;

export interface DoomObjectModel {
  type: WadType;
  colormap: Uint8Array[];
  demos: RawMap;
  dmxgus: DataView;
  dmxgusc: DataView;
  endoom: DataView;
  flats: FlatMap;
  genmidi: RawMap;
  levels: Level[];
  music: RawMap;
  playpal: Color[][];
  patches: PictureMap;
  sounds: RawMap;
  sprites: PictureMap;
  textures: Texture[];
  ui: PictureMap;
}

export interface ReadDoomObjectModelOptions {
  type: WadType;
  colormap: boolean;
  demos: boolean;
  dmxgus: boolean;
  dmxgusc: boolean;
  endoom: boolean;
  flats: boolean;
  genmidi: boolean;
  levels: boolean;
  music: boolean;
  playpal: boolean;
  patches: boolean;
  sounds: boolean;
  sprites: boolean;
  textures: boolean;
  ui: boolean;
}
