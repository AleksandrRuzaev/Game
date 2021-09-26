import { MovableObject } from '..';

function Bear(x, y, health, damage, speed) {
    if (!new.target) {
        return new Bear(x, y, health, damage, speed);
    }

    MovableObject.call(this, x, y, health, damage, speed);
}

const Proto = function () {};
Proto.prototype = MovableObject.prototype;
Bear.prototype = new Proto();
Bear.prototype.constructor = Bear;

export { Bear };
