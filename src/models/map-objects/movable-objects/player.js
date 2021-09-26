import { MovableObject } from './movable-object';

function Player(x, y, health, damage, speed) {
    if (!new.target) {
        return new Player(x, y, health, damage, speed);
    }

    MovableObject.call(this, x, y, health, damage, speed);

    this._points = 0;
}

const Proto = function () {};
Proto.prototype = MovableObject.prototype;
Player.prototype = new Proto();
Player.prototype.constructor = Player;

export { Player };
