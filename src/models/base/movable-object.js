import { MapObject } from '..';

function MovableObject(x, y, health, damage, speed) {
    if (!new.target) {
        return new MovableObject(x, y, health, damage, speed);
    }

    MapObject.call(this, x, y, health, damage);

    this.speed = speed;

    this.move = function () {
        throw Error('Not implemented');
    };

    // or move this into MapObject
    this.interact = function () {
        throw Error('Not implemented');
    };
}

export { MovableObject };
