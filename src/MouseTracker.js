export default class MouseTracker {

    constructor() {
        this._x = 0;
        this._y = 0;
        this.x = 0;
        this.y = 0;
    }

    updatePosition(e) {
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
    }

    setOrigin(container) {
        this._x = container.offsetLeft + Math.floor(container.offsetWidth / 2);
        this._y = container.offsetTop + Math.floor(container.offsetHeight / 2);
    }
}