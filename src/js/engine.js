export default class Engine {
  constructor(renderFunc, updateFunc) {
    this.render = renderFunc;
    this.update = updateFunc;
  }

  cycle() {
    window.requestAnimationFrame(this.cycle.bind(this));
    this.update();
    this.render();
  }
}
