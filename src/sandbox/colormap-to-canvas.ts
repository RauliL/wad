import { getColor } from "./get-color";

export const colormapToCanvas = (
  colormap: Uint8Array[],
  palette: Uint8Array,
  block = 16
) => {
  const cw = colormap.length;
  const ch = colormap[0].length;

  const canvas = document.createElement("canvas");

  const width = block * cw;
  const height = block * ch;

  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext("2d")!;

  for (let x = 0; x < cw; x++) {
    const map = colormap[x];

    for (let y = 0; y < ch; y++) {
      const i = map[y];
      const color = getColor(palette, i);

      context.fillStyle = color;
      context.fillRect(x * block, y * block, block, block);
    }
  }

  return canvas;
};
