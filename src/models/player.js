import { MovableObject } from '.';

function Player(x, y, health, damage, speed) {
    if (!new.target) {
        return new Player(x, y, health, damage, speed);
    }

    MovableObject.call(this, x, y, health, damage, speed);

    this._points = 0;
}

export { Player };
