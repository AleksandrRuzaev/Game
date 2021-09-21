import { MapObject } from '..';

function Stone(x, y) {
    if (!new.target) {
        return new Stone(x, y);
    }

    MapObject.call(this, x, y);
}

export { Stone };
