import { CANVAS_WIDTH as viewPort, MAP, CANVAS_HEIGHT } from "./base";
import { tileSize } from "./constant";
import { Element } from "./element";
import { Goomba } from "./goombas";
import { initCanvas } from "./initCanvas";
import { Mario } from "./mario";
import { getCollisionDirection } from "./utils";

const maxMapWidth = MAP[0].length * tileSize;
const gravity = 0.8;
const blocks = [2, 3, 4];
const flags = [5, 6];
const pipes = [7, 8, 9, 10];

export class World {
  constructor() {
    this.init();
  }
  init() {
    const { canvas, ctx } = initCanvas();
    this.canvas = canvas;
    this.ctx = ctx;
    this.keys = {};
    this.mario = new Mario({
      x: 50,
      y: 100,
    });
    this.score = 0;
    this.elements = {
      platforms: [],
      pipes: [],
      blocks: [],
      flags: [],
    };
    this.goombas = [];
    this.powerUps = [];
    this.coins = [];
    this.bullets = [];
    this.centerPos = 0;
    this.coinCount = 0;
    this.scrollOffset = 0;
    this.setUpEventListener();
    this.renderMap();
    this.lastKey = "right";
    this.isGameActive = true;
    this.levelComplete = false;
    this.marioDeadFromGoomba = false;
    this.gameAnimationFrame;
  }
  setUpEventListener() {
    addEventListener("keydown", (e) => {
      console.log(
        !this.keys.space,
        !this.mario.isJumping,
        this.mario.isOnGround
      );
      if (e.code === "KeyA") {
        console.log("A");
        this.keys.left = true;
        this.lastKey = "left";
        return;
      }
      if (e.code === "KeyD") {
        console.log("D");
        this.keys.right = true;
        this.lastKey = "right";
        return;
      }
      if (
        e.code === "Space" &&
        !this.keys.space &&
        !this.mario.isJumping &&
        this.mario.isOnGround
      ) {
        this.keys.space = true;
        this.mario.dy -= 13;

        return;
      }
    });
    addEventListener("keyup", (e) => {
      if (e.code === "KeyA") {
        console.log("A");
        this.keys.left = false;

        return;
      }
      if (e.code === "KeyD") {
        console.log("D");
        this.keys.right = false;
        return;
      }
      if (e.code === "Space") {
        this.keys.space = false;
        console.log("Space");
        return;
      }
      if (e.code === "ControlLeft") {
        this.keys.ctrl = false;
        return;
      }
    });
  }
  renderMap() {
    MAP.forEach((row, rIndex) => {
      row.forEach((column, cIndex) => {
        if (column === 0) {
          return;
        }

        // Platform
        if (column === 1) {
          this.elements["platforms"].push(
            new Element({
              x: cIndex * tileSize,
              y: rIndex * tileSize,
              type: column,
            })
          );
          return;
        }

        // 2, 3, 4 ( Blocks )
        if (blocks.includes(column)) {
          this.elements["blocks"].push(
            new Element({
              x: cIndex * tileSize,
              y: rIndex * tileSize,
              type: column,
            })
          );
        }

        // 5, 6 ( FlagPole & Flag )
        if (flags.includes(column)) {
          this.elements["flags"].push(
            new Element({
              x: cIndex * tileSize,
              y: rIndex * tileSize,
              type: column,
            })
          );
        }

        // 7, 8, 9, 10 ( Pipes )
        if (pipes.includes(column)) {
          this.elements["pipes"].push(
            new Element({
              x: cIndex * tileSize,
              y: rIndex * tileSize,
              type: column,
            })
          );
          return;
        }

        // 12 ( Goomba )
        if (column === 12) {
          this.goombas.push(
            new Goomba({
              x: cIndex * tileSize,
              y: rIndex * tileSize,
            })
          );
        }
      });
    });
    console.log(this.goombas);
  }
  animate() {
    this.gameAnimationFrame = requestAnimationFrame(() => this.animate());
    this.renderLoop();
  }
  renderLoop() {
    this.ctx.clearRect(this.scrollOffset, 0, viewPort, this.canvas.height);

    for (const elem in this.elements) {
      const element = this.elements[elem];

      element.forEach((item) => {
        item.draw(this.ctx);
      });
    }
    this.goombas.forEach((goomba) => goomba.draw(this.ctx));
    this.mario.draw(this.ctx);
  }
  startGameUpdateInterval() {
    this.interval = setInterval(() => {
      this.gameLoop();
      this.checkMarioPlatformCollision();
      this.checkMarioGoombaCollision();
      this.checkMarioElementCollision(this.elements["blocks"]);
      this.checkMarioElementCollision(this.elements["pipes"]);
      this.checkGoombaElementCollision(this.elements["pipes"]);
      this.checkMarioFlagCollision();
    }, 15);
  }
  gameLoop() {
    this.centerPos = this.scrollOffset + Math.floor(viewPort / 2) - 120;
    this.mario.update();
    this.moveMario();

    this.goombas.forEach((goomba, gIndex) => {
      goomba.update();
      if (goomba.y > CANVAS_HEIGHT) {
        this.goombas.splice(gIndex, 1);
      }
    });

    this.marioInGround = this.mario.isOnGround;

    if (this.mario.y + this.mario.height + this.mario.dy < CANVAS_HEIGHT) {
      this.mario.dy += gravity;
      this.mario.isOnGround = false;
    } else if (this.mario.y - 32 > CANVAS_HEIGHT) {
      this.isGameActive = false;
      clearInterval(this.interval);
      cancelAnimationFrame(this.gameAnimationFrame);
      setTimeout(() => this.restart(), 2500);
    }
  }
  moveMario() {
    if (this.keys.left && this.keys.right) {
      this.mario.dx = 0;
      return;
    }

    if (this.keys.left) {
      // If Mario is not near left edge, just move left
      if (this.mario.x > this.centerPos || this.scrollOffset <= 0) {
        this.mario.dx = -this.mario.speed;
        return;
      }

      // Scroll screen right
      if (this.scrollOffset > 0) {
        this.scrollOffset -= this.mario.speed;
        this.ctx.translate(this.mario.speed, 0);
        this.mario.dx = 0;
        return;
      }
    }

    if (this.keys.right && this.mario.x < this.centerPos) {
      this.mario.dx = this.mario.speed;
      return;
    }

    this.mario.dx = 0;

    if (this.keys.right) {
      // Stop Mario if he reaches the end of the map
      if (this.mario.x >= maxMapWidth - 75) return;

      // Scroll screen left
      if (this.mario.x < maxMapWidth - viewPort / 2 - 160) {
        this.scrollOffset += this.mario.speed;
        this.ctx.translate(-this.mario.speed, 0); // Shift canvas left
        return;
      }

      // Move Mario forward when near end of map
      if (this.mario.x > maxMapWidth - this.centerPos) {
        this.mario.dx = this.mario.speed;
        return;
      }
    }

    return;
  }

  checkMarioPlatformCollision() {
    const { platforms } = this.elements;

    platforms.forEach((platform) => {
      if (
        this.mario.x + this.mario.width > platform.x &&
        this.mario.x < platform.x + platform.width &&
        this.mario.y + this.mario.height + this.mario.dy >= platform.y
      ) {
        this.mario.isJumping = false;
        this.mario.isOnGround = true;
        this.mario.dy = 0;
      }
    });
  }

  checkMarioGoombaCollision() {
    this.goombas.forEach((goomba, index) => {
      if (goomba.state === "dead") {
        return;
      }
      if (this.mario.isInvulnerable) return;
      let dir = getCollisionDirection(this.mario, goomba);
      if (!dir) return;
      const { left, right, bottom, offset } = dir;

      if (bottom) {
        goomba.state = "dead";
        this.mario.dy = -8;
        this.score += 80;
        setTimeout(() => {
          this.goombas.splice(index, 1);
        }, 800);
        return;
      }
      if ((left || right) && offset > 4) {
        if (this.mario.category === "small") {
          this.mario.frames = 13;

          this.marioDeadFromGoomba = true;
          this.isGameActive = false;

          clearInterval(this.interval);
          cancelAnimationFrame(this.gameAnimationFrame);
          setTimeout(() => this.restart(), 2500);

          return;
        }
        dir = null;
        goomba.dx = -goomba.dx;
        this.mario.isInvulnerable = true;

        setTimeout(() => {
          this.mario.isInvulnerable = false;
        }, 1000);

        if (this.mario.category === "big") {
          this.mario.category = "small";
          return;
        }

        if (this.mario.category === "super") {
          this.mario.category = "big";
          return;
        }
      }
    });
  }
  checkMarioElementCollision(elementArray) {
    elementArray.forEach((element) => {
      const dir = getCollisionDirection(this.mario, element);
      if (!dir) return;
      const { left, right, top, bottom, offset } = dir;
      if (top) {
        if (blocks.includes(element.type)) {
          console.log(offset);
          this.mario.y += offset * 1.2;
          this.mario.dy = -this.mario.dy;

          if (element.type === 4) return;

          element.type = 4;

          return;
        }
        return;
      }
      if (bottom) {
        if (element.type === 7 || element.type === 8) return;
        this.mario.isJumping = false;
        this.mario.isOnGround = true;
        this.mario.y -= offset;
        this.mario.dy = 0;
        return;
      }
      if (left) {
        this.mario.x += offset;

        if (this.lastKey === "left") this.mario.dx = 0;
        return;
      }

      if (right) {
        this.mario.x -= offset;

        if (this.lastKey === "right") this.mario.dx = 0;
        return;
      }
    });
  }
  checkGoombaElementCollision(elementArray) {
    elementArray.forEach((element) => {
      this.goombas.forEach((goomba) => {
        if (goomba.state === "dead") return;

        const dir = getCollisionDirection(goomba, element);
        if (!dir) return;

        if (dir.left || dir.right) {
          goomba.dx = -goomba.dx;
          return;
        }
      });
    });
  }
  checkMarioFlagCollision() {
    const { flags } = this.elements;
    flags.forEach((flag) => {
      const dir = getCollisionDirection(this.mario, flag);
      if (!dir) return;

      const { left, right } = dir;
      this.levelComplete = true;

      this.mario.dx = 0;
      this.mario.dy = 2;

      if (left) {
        this.mario.frames = 10;
      }

      if (right) {
        this.mario.frames = 11;
      }

      if (this.marioInGround) {
        this.mario.tick++;

        if (this.mario.tick > this.mario.maxTick) {
          this.mario.x += 10;
          this.mario.frames = 12;
          this.isGameActive = false;

          setTimeout(() => cancelAnimationFrame(this.gameAnimationFrame), 100);
        }
      }
    });
  }
  restart() {
    this.init();
    this.animate();
    this.startGameUpdateInterval();
  }
}
