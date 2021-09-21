import { Obstacle } from '..';

function Tree(x, y) {
    if (!new.target) {
        return new Tree(x, y);
    }

    Obstacle.call(this, x, y);
}

export { Tree };
