import { Position } from '../common/position';

function MapObject(x, y, health, damage) {
    this.position = new Position(x, y);
    this.health = health;
    this.damage = damage;
    this.wasRemoved = false;
}

export { MapObject };
