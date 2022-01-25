import { IndexedImage } from "../lumps/types";
import { getColor } from "./get-color";

export const imageToCanvas = (
  image: IndexedImage,
  palette: Uint8Array,
  block = 4
) => {
  const { width, height, data, transparent } = image;

  const canvas = document.createElement("canvas");
  const cw = block * width;
  const ch = block * height;

  canvas.width = cw;
  canvas.height = ch;

  const context = canvas.getContext("2d")!;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = y * width + x;
      const c = data[i];

      if (c !== transparent) {
        const color = getColor(palette, c);

        context.fillStyle = color;
        context.fillRect(x * block, y * block, block, block);
      }
    }
  }

  return canvas;
};
