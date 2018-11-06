import MouseTracker from './MouseTracker.js';

export default class Swively {

    constructor(container, inner, options) {
        this.mouse = new MouseTracker;
        this.container = container;
        this.inner = inner;
        this.mouse.setOrigin(this.container);
        this.setPerspective(options.perspective);
        this.setTransition(options.transition);
        this.setTransformOrigin();
        this.setEvents();
    }

    setEvents() {
        this.container.addEventListener('mouseenter', (e) => this.update(e));
        this.container.addEventListener('mouseleave', (e) => this.reset());
        this.container.addEventListener('mousemove', (e) => this.update(e));
    }

    setPerspective(amount) {
        this.container.style.perspective = amount + 'px';
    }

    setTransformOrigin(position = 'center center') {
        this.inner.style.transformOrigin = position;
    }

    setTransition(duration) {
        this.inner.style.transition = 'transform ' + duration + 'ms';
    }

    update(e) {
        this.mouse.updatePosition(e);
        let x = (this.mouse.y / inner.offsetHeight / 2).toFixed(2);
        let y = (this.mouse.x / inner.offsetWidth / 2).toFixed(2);
        this.setTransform(x, y);
    }

    setTransform(x, y) {
        var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
        inner.style.transform = style;
    }

    reset() {
        this.inner.style.transform = null;
    }

}