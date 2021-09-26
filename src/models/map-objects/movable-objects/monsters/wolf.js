import { MovableObject } from '../..';

function Wolf(x, y, health, damage, speed) {
    if (!new.target) {
        return new Wolf(x, y, health, damage, speed);
    }

    MovableObject.call(this, x, y, health, damage, speed);
}

const Proto = function () {};
Proto.prototype = MovableObject.prototype;
Wolf.prototype = new Proto();
Wolf.prototype.constructor = Wolf;

export { Wolf };
