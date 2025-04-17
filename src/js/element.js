import { createImage } from "./utils";
import elements from "../../dist/images/elements.png";
const elementImage = createImage(elements);
export class Element {
  constructor({ x, y, type }) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.width = 32;
    this.height = 32;
    this.sY = 0;
  }
  draw(ctx) {
    this.sX = (this.type - 1) * this.width;
    ctx.drawImage(
      elementImage,
      this.sX,
      this.sY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
