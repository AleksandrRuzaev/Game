import { Position } from '../common/position';

function MapObject(x, y, health, damage) {
    this.position = new Position(x, y);
    this.health = health;
    this.damage = damage;
    this.wasRemoved = false;
}

MapObject.prototype.interact = function (object) {
    throw Error('MapObject interact not implemented');
};

export { MapObject };
