import Cursor from './cursor';
import Controller from './controller';
import Display from './display';
import Engine from './engine';

(() => {
  const worldWidth = 480;
  const worldHeight = 480;

  const documentElement = document.documentElement;

  function render() {
    display.render(cursor);
  }

  function update() {
    if (controller.left) cursor.moveLeft();
    if (controller.right) cursor.moveRight();
    if (controller.up) cursor.moveUp();
    if (controller.down) cursor.moveDown();
  }

  const controller = new Controller();
  const cursor = new Cursor(100, 100, 64, 64);

  const display = new Display(document.getElementById('canvas'));
  display.setSize(documentElement);

  window.addEventListener('keydown', controller.keyDownUp.bind(controller));
  window.addEventListener('keyup', controller.keyDownUp.bind(controller));

  const engine = new Engine(render, update);
  window.requestAnimationFrame(engine.cycle.bind(engine));
})();
