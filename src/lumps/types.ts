export interface Blockmap {
  x: number;
  y: number;
  columns: number;
  rows: number;
  blocks: Int16Array[];
}

export interface IndexedImage {
  width: number;
  height: number;
  data: Uint8Array;
  transparent?: number;
}

export interface Flat extends IndexedImage {
  width: 64;
  height: 64;
}

export interface LinedefFlags {
  impassable: boolean;
  blockMonster: boolean;
  doubleSided: boolean;
  upperUnpegged: boolean;
  lowerUnpegged: boolean;
  secret: boolean;
  blockSound: boolean;
  hidden: boolean;
  shown: boolean;
}

export interface Linedef {
  startVertex: number;
  endVertex: number;
  flags: LinedefFlags;
  specialType: number;
  sectorTag: number;
  rightSidedef: number;
  leftSidedef: number;
}

export interface BBox {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export interface Node {
  x: number;
  y: number;
  offsetX: number;
  offsetY: number;
  leftBBox: BBox;
  rightBBox: BBox;
  rightChild: number;
  leftChild: number;
}

export interface Picture extends IndexedImage {
  left: number;
  top: number;
}

export type Color = {
  r: number;
  g: number;
  b: number;
};

export interface Sector {
  floorHeight: number;
  ceilingHeight: number;
  floor: string;
  ceiling: string;
  light: number;
  type: number;
  tag: number;
}

export interface Seg {
  startVertex: number;
  endVertex: number;
  angle: number;
  linedef: number;
  direction: number;
  offset: number;
}

export interface Sidedef {
  x: number;
  y: number;
  upper: string;
  lower: string;
  middle: string;
  sector: number;
}

export interface Ssector {
  count: number;
  startSeg: number;
}

export interface Patch {
  x: number;
  y: number;
  patch: number;
  stepDir: number;
  colormap: number;
}

export interface Texture {
  name: string;
  masked: boolean;
  width: number;
  height: number;
  patches: Patch[];
}

export interface ThingFlags {
  easy: boolean;
  medium: boolean;
  hard: boolean;
  deaf: boolean;
  multiplayer: boolean;
}

export interface Thing {
  x: number;
  y: number;
  angle: number;
  type: number;
  flags: ThingFlags;
}

export interface Vertex {
  x: number;
  y: number;
}

export type Reader = (view: DataView) => any;

export type ReaderMap = {
  [name: string]: Reader;
};
