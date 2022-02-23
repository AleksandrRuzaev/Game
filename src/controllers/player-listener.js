/* eslint-disable no-undef */

function PlayerListener(map) {
    if (!new.target) {
        return new PlayerListener(map);
    }

    this._map = map;

    // get player from the map
    document.onkeydown = function (event) {
        const player = this._map.getPlayer();
        event = event || window.event;

        // use e.keyCode to find out the direction and pass moveObject
        this._map.moveObject(player);
    };
}

export { PlayerListener };
