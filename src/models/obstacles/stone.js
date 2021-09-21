import { Obstacle } from '..';

function Stone(x, y) {
    if (!new.target) {
        return new Stone(x, y);
    }

    Obstacle.call(this, x, y);
}

export { Stone };
