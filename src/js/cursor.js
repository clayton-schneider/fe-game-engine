export default class Cursour {
  constructor(x, y, width, height) {
    this.x = x;
    this.velX = 0;
    this.velY = 0;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = '#0000ff';
    this.moveForce = 32;
  }

  moveLeft() {
    this.x -= this.moveForce;
  }
  moveRight() {
    this.x += this.moveForce;
  }
  moveUp() {
    this.y -= this.moveForce;
  }
  moveDown() {
    this.y += this.moveForce;
  }
}
