import { MovableObject } from '..';

function Wolf(x, y, health, damage, speed) {
    if (!new.target) {
        return new Wolf(x, y, health, damage, speed);
    }

    MovableObject.call(this, x, y, health, damage, speed);
}

export { Wolf };
