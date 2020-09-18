export default class Display {
  constructor(canvas) {
    this.context = canvas.getContext('2d', { alpha: false });
  }

  setSize(documentElement) {
    this.context.canvas.width = documentElement.clientWidth - 32;
    this.context.canvas.height = documentElement.clientHeight - 32;
  }

  render(cursor) {
    this.context.fillStyle = '#222222';
    this.context.fillRect(
      0,
      0,
      this.context.canvas.width,
      this.context.canvas.height
    );

    this.context.fillStyle = cursor.color;
    this.context.fillRect(cursor.x, cursor.y, cursor.width, cursor.height);
  }
}
