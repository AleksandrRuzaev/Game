/* eslint-disable no-undef */
function MapListener(map, speed = 1000) {
    if (!new.target) {
        return new MapListener(map);
    }

    this._map = map;
    this._speed = speed;
}

MapListener.prototype.runGame = function () {
    this._intervalId = setInterval(() => {
        this._map.doMove();
    }, this._speed);
};
MapListener.prototype.endGame = function () {
    clearInterval(this._intervalId);
};
export { MapListener };
