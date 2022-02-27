import { Obstacle } from './map-objects/obstacles/obstacle';
import { Monster } from './map-objects/movable-objects/monsters/monster';
import { Bonus } from './map-objects/bonuses/bonus';
import { Player } from './map-objects/movable-objects/player';
import { instanceOf, getRandomDirection, getPositionByDirection, mapObjectsToExportFormat, mapImportFormatToObjects } from '../helpers/helpers';

function Map(player, monsters, bonuses, obstacles, dimensions) {
    if (!new.target) {
        return new Map(player, monsters, bonuses, obstacles);
    }

    this._player = player;
    this._mapObjects = [player].concat(monsters, bonuses, obstacles);
    this._dimensions = dimensions ?? {};
}
Map.prototype.getPlayer = function () {
    return this._player;
};
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
    // console.log(this._mapObjects);

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
Map.prototype.isInteractionAvailable = function (firstObject, secondObject) {
    const isFirstMonster = instanceOf(firstObject, Monster);
    const isSecondMonster = instanceOf(secondObject, Monster);
    const isFirstObstacle = instanceOf(firstObject, Obstacle);
    const isSecondObstacle = instanceOf(secondObject, Obstacle);

    const areTheyNotTwoMonsters = !isFirstMonster || !isSecondMonster;
    const isInteractionWithoutObstacle = !(isFirstObstacle || isSecondObstacle);

    return areTheyNotTwoMonsters && isInteractionWithoutObstacle;
};
Map.prototype.moveObjects = function () {
    const monsters = this.getMonsters();

    for (const monster of monsters) {
        const direction = getRandomDirection();

        this.moveObject(monster, direction);
    }
};
Map.prototype.moveObject = function (movableObject, direction) {
    const position = getPositionByDirection(direction, movableObject.position, movableObject.speed);
    const isMoveAvailable = this.checkInsideTheMap(position) && this.canMove(position);

    if (isMoveAvailable) {
        movableObject.move(direction);
    } else {
        const target = this.getByPosition(position)[0];

        if (target && this.isInteractionAvailable(movableObject, target)) {
            this.interact(movableObject, target);

            if (target.wasRemoved) {
                movableObject.move(direction);
            }
        }
    }
};
Map.prototype.interact = function (firstObject, secondObject) {
    const willBeInteracted = firstObject && secondObject && this.isInteractionAvailable(firstObject, secondObject);

    if (willBeInteracted) {
        firstObject.interact(secondObject);
        // what if check secondObject.wasRemoved before second interact
        secondObject.interact(firstObject);
    }
};
Map.prototype.exportData = function () {
    const result = {};

    result.dimensions = {
        width: this._dimensions.width,
        height: this._dimensions.height,
    };

    result.player = {
        position: {
            x: this._player.position.x,
            y: this._player.position.y,
        },
        health: this._player.health,
        damage: this._player.damage,
        speed: this._player.speed,
        points: this._player._points,
        wasRemoved: this._player.wasRemoved,
        type: Player.name,
    };

    result.monsters = mapObjectsToExportFormat(this.getMonsters());
    result.obstacles = mapObjectsToExportFormat(this.getObstacles());
    result.bonuses = mapObjectsToExportFormat(this.getBonuses());

    return JSON.stringify(result);
};
Map.prototype.importData = function (data) {
    const importedData = JSON.parse(data);
    const player = importedData.player;
    const mapObjects = mapImportFormatToObjects(importedData);

    this._dimensions.width = importedData.dimensions.width;
    this._dimensions.height = importedData.dimensions.height;

    this._player = new Player(player.position.x, player.position.y, player.health, player.damage, player.speed);
    this._player._points = importedData.player.points;
    this._player.wasRemoved = importedData.player.wasRemoved;

    this._mapObjects = [this._player].concat(mapObjects);
};

export { Map };
