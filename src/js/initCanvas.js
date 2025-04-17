import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./base";

export function initCanvas() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.height = CANVAS_HEIGHT;
  canvas.width = CANVAS_WIDTH;

  return { canvas, ctx };
}
