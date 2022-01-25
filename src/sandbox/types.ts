import { Vertex } from "../lumps/types";

export interface LevelViewSettings {
  grid: boolean;
  blockmap: boolean;
  linedefs: boolean;
  nodes: boolean;
  reject: boolean;
  sectors: boolean;
  segs: boolean;
  sidedefs: boolean;
  ssectors: boolean;
  things: boolean;
  vertexes: boolean;
}

export interface Line {
  start: Vertex;
  end: Vertex;
}
