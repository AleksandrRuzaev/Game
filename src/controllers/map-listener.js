function MapListener(map) {
    if (!new.target) {
        return new MapListener(map);
    }

    this.runGame = function () {
        this._intervalId = setInterval(() => {
            this.map.doMove();
        }, 1000);
    };

    this.endGame = function () {
        clearInterval(this._intervalId);
    };
}

export { MapListener };
