import { Obstacle } from './map-objects/obstacles/obstacle';
import { Monster } from './map-objects/movable-objects/monsters/monster';
import { Bonus } from './map-objects/bonuses/bonus';
import { instanceOf, getRandomDirection, getPositionByDirection } from '../helpers/helpers';

function Map(player, monsters, bonuses, obstacles, dimensions) {
    if (!new.target) {
        return new Map(player, monsters, bonuses, obstacles);
    }

    this._player = player;
    this._mapObjects = [player].concat(monsters).concat(bonuses).concat(obstacles);
    this._dimensions = dimensions;
}

Map.prototype.getMonsters = function () {
    return this._mapObjects.filter((obj) => instanceOf(obj, Monster));
};
Map.prototype.getObstacles = function () {
    return this._mapObjects.filter((obj) => instanceOf(obj, Obstacle));
};
Map.prototype.getBonuses = function () {
    return this._mapObjects.filter((obj) => instanceOf(obj, Bonus));
};
Map.prototype.getByPosition = function (position) {
    return this._mapObjects.filter((obj) => obj.position.x === position.x && obj.position.y === position.y);
};
Map.prototype.canMove = function (position) {
    return this.getByPosition(position).length === 0;
};
Map.prototype.checkInsideTheMap = function (position) {
    const isTopCoordinateValid = this._dimensions.height - 1 > position.y;
    const isRightCoordinateValid = this._dimensions.width > position.x;
    const isBottomCoordinateValid = position.x >= 0;
    const isLeftCoordinateValid = position.y >= 0;

    return isTopCoordinateValid && isRightCoordinateValid && isBottomCoordinateValid && isLeftCoordinateValid;
};
Map.prototype.doMove = function () {
    const monsters = this.getMonsters();

    for (const monster of monsters) {
        const direction = getRandomDirection();
        const position = getPositionByDirection(direction, monster.position, monster.spped);
        const isMoveAvailable = !this.checkInsideTheMap(position) && this.canMove(position);

        if (isMoveAvailable) {
            monster.move(direction);
        }
    }
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
