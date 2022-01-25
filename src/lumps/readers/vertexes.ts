import { readInt16 } from "../../utils.js";
import { Vertex } from "../types.js";

const size = 4;

export const vertexes = (view: DataView) => {
  const count = view.byteLength / size;

  const getVertex = (view: DataView, offset: number) => {
    const x = readInt16(view, offset);
    const y = readInt16(view, offset + 2);

    return <Vertex>{ x, y };
  };

  const vertexes = Array<Vertex>(count);

  for (let i = 0; i < count; i++) {
    vertexes[i] = getVertex(view, i * size);
  }

  return vertexes;
};
