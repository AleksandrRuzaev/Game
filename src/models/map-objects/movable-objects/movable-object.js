import { MapObject } from '../map-object';

function MovableObject(x, y, health, damage, speed) {
    MapObject.call(this, x, y, health, damage);

    this.speed = speed;
}

const Proto = function () {};
Proto.prototype = MapObject.prototype;
MovableObject.prototype = new Proto();
MovableObject.prototype.constructor = MovableObject;

MovableObject.prototype.move = function (direction) {

};

export { MovableObject };
