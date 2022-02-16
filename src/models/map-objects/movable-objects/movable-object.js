import { MapObject } from '../map-object';
import { getPositionByDirection } from '../../../helpers/helpers';

function MovableObject(x, y, health, damage, speed) {
    MapObject.call(this, x, y, health, damage);

    this.speed = speed;
}

const Proto = function () {};
Proto.prototype = MapObject.prototype;
MovableObject.prototype = new Proto();
MovableObject.prototype.constructor = MovableObject;

MovableObject.prototype.move = function (direction) {
    const position = getPositionByDirection(direction, this.position, this.speed);
    this.position = position;
};

export { MovableObject };
