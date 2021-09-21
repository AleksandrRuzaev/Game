import { MovableObject } from '..';

function Bear(x, y, health, damage, speed) {
    if (!new.target) {
        return new Bear(x, y, health, damage, speed);
    }

    MovableObject.call(this, x, y, health, damage, speed);
}

export { Bear };
