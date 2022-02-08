import { Monster } from './monster';

function Wolf(x, y, health, damage, speed) {
    if (!new.target) {
        return new Wolf(x, y, health, damage, speed);
    }

    Monster.call(this, x, y, health, damage, speed);
}

const Proto = function () {};
Proto.prototype = Monster.prototype;
Wolf.prototype = new Proto();
Wolf.prototype.constructor = Wolf;

export { Wolf };
