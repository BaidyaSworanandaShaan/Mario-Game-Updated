import goombaImg from "../../dist/images/goomba.png";
import { createImage } from "./utils";
const goombaImage = createImage(goombaImg);

export class Goomba {
  constructor({ x, y }) {
    this.x = x;
    this.y = y;
    this.sX = 0;
    this.sY = 0;
    this.width = 32;
    this.height = 32;
    this.speed = 1;
    this.dx = this.speed;
    this.dy = 2;
    this.type = 12;
    this.state = "alive";
    this.frames = 0;
    this.maxTick = 10;
    this.tick = 0;
  }
  draw(ctx) {
    this.sX = this.frames * this.width;
    ctx.drawImage(
      goombaImage,
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
  update() {
    if (this.state === "alive") {
      this.x += this.dx;
      this.tick++;

      if (this.tick > this.maxTick) {
        this.tick = 0;
        this.frames === 0 ? (this.frames = 1) : (this.frames = 0);
      }

      return;
    }
    if (this.state === "dead") {
      this.tick++;
      this.frames = 2;

      if (this.tick > 45) {
        this.frames = 4;
      }
      return;
    }
  }
}
