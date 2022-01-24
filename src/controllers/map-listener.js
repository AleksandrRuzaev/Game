/* eslint-disable no-undef */
function MapListener(map) {
    if (!new.target) {
        return new MapListener(map);
    }

    this._map = map;
}

MapListener.prototype.runGame = function () {
    this._intervalId = setInterval(() => {
        this._map.doMove();
    }, 1000);
};
MapListener.prototype.endGame = function () {
    clearInterval(this._intervalId);
};
export { MapListener };
