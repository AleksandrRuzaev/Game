function Map(player, monsters, bonuses, obstacles) {
    if (!new.target) {
        return new Map(player, monsters, bonuses, obstacles);
    }

    this._player = player;
    this._mapObjects = [player, ...monsters, ...bonuses, ...obstacles];
}

Map.prototype.getMonsters = function () {
    throw Error('getMonsters not implemented');
};
Map.prototype.getObstacles = function () {
    throw Error('getObstacles not implemented');
};
Map.prototype.getBonuses = function () {
    throw Error('getBonuses not implemented');
};
Map.prototype.doMove = function () {
    // through this.getMonsters()
    throw Error('doMove not implemented');
};
Map.prototype.interact = function (firstObject, secondObject) {
    throw Error('interact not implemented');
};
Map.prototype.exportData = function () {
    throw Error('exportData not implemented');
};
Map.prototype.importData = function () {
    throw Error('importData not implemented');
};
Map.prototype.getByPosition = function (position) {
    throw Error('getByPosition not implemented');
};
Map.prototype.canMove = function (position) {
    throw Error('canMove not implemented');
};

export { Map };
