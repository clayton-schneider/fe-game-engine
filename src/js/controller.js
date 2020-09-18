export default class Controller {
  constructor() {
    this.left = false;
    this.right = false;
    this.up = false;
    this.down = false;
  }

  keyDownUp(event) {
    event.preventDefault();
    let state = event.type === 'keydown';

    switch (event.keyCode) {
      case 87:
        this.up = state;
        break;
      case 38:
        this.up = state;
        break;
      case 68:
        this.right = state;
        break;
      case 39:
        this.right = state;
        break;
      case 83:
        this.down = state;
        break;
      case 40:
        this.down = state;
        break;
      case 65:
        this.left = state;
        break;
      case 37:
        this.left = state;
    }
  }
}
