import { Monster } from './monster';

function Bear(x, y, health, damage, speed) {
    if (!new.target) {
        return new Bear(x, y, health, damage, speed);
    }

    Monster.call(this, x, y, health, damage, speed);
}

const Proto = function () {};
Proto.prototype = Monster.prototype;
Bear.prototype = new Proto();
Bear.prototype.constructor = Bear;

export { Bear };
