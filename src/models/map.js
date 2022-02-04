import { Obstacle } from './map-objects/obstacles/obstacle';
import { instanceOf } from '../helpers/helpers';

function Map(player, monsters, bonuses, obstacles, dimensions) {
    if (!new.target) {
        return new Map(player, monsters, bonuses, obstacles);
    }

    this._player = player;
    this._mapObjects = [player].concat(monsters).concat(bonuses).concat(obstacles);
    this._dimensions = dimensions;
}

Map.prototype.getMonsters = function () {
    throw Error('getMonsters not implemented');
};
Map.prototype.getObstacles = function () {
    return this._mapObjects.filter((obj) => instanceOf(obj, Obstacle));
};
Map.prototype.getBonuses = function () {
    throw Error('getBonuses not implemented');
};
Map.prototype.getByPosition = function (position) {
    throw Error('getByPosition not implemented');
};
Map.prototype.canMove = function (position) {
    throw Error('canMove not implemented');
};
Map.prototype.doMove = function () {
    // through this.getMonsters()
    throw Error('doMove not implemented');
};
Map.prototype.interact = function (firstObject, secondObject) {
    // firstObject.interact
    // secondObject.interact
    throw Error('interact not implemented');
};
Map.prototype.exportData = function () {
    throw Error('exportData not implemented');
};
Map.prototype.importData = function () {
    throw Error('importData not implemented');
};

export { Map };
