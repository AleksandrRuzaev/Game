import { MapObject } from '..';

function MovableObject(x, y, health, damage, speed) {
    if (!new.target) {
        return new MovableObject(x, y, health, damage, speed);
    }

    MapObject.call(this, x, y, health, damage);

    this.speed = speed;

    this.interact = function () {
        throw Error('Not implemented');
    };
}

MovableObject.prototype.move = function () {
    throw Error('MovableObject move not implemented');
};

// or move this into MapObject
MovableObject.prototype.interact = function (mapObject) {
    throw Error('MovableObject interact not implemented');
};

export { MovableObject };
