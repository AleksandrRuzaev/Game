import { MapObject } from '..';

function Tree(x, y) {
    if (!new.target) {
        return new Tree(x, y);
    }

    MapObject.call(this, x, y);
}

export { Tree };
