/* eslint-disable no-undef */

function PlayerListener(map) {
    if (!new.target) {
        return new PlayerListener(map);
    }

    // get player from the map
    document.onkeydown = function (event) {
        event = event || window.event;

        // use e.keyCode to find out the direction
    };
}

export { PlayerListener };
