import { MapObject } from '..';

function Obstacle(x, y, health, damage) {
    if (!new.target) {
        return new Obstacle(x, y, health, damage);
    }

    MapObject.call(this, x, y, health, damage);
}

const Proto = function () {};
proto.prototype = MapObject.prototype;
Obstacle.prototype = new Proto();
Obstacle.prototype.constructor = Obstacle;

export { Obstacle };
