function Map(player, monsters, bonuses, obstacles) {
    if (!new.target) {
        return new Map(player, monsters, bonuses, obstacles);
    }

    this._player = player;
    this._mapObjects = [...monsters, ...bonuses, ...obstacles];

    this.getMonsters = function () {
        throw Error('getMonsters not implemented');
    };
    this.getObstacles = function () {
        throw Error('getObstacles not implemented');
    };
    this.getBonuses = function () {
        throw Error('getBonuses not implemented');
    };

    this.doMove = function () {
        //through this.getMonsters()
        throw Error('doMove not implemented');
    };

    this.interact = function (firstObject, secondObject) {
        throw Error('interact not implemented');
    };

    this.exportData = function () {
        throw Error('exportData not implemented');
    };
}
