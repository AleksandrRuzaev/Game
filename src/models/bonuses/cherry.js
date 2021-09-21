import { Bonus } from '..';

function Cherry(x, y, points) {
    if (!new.target) {
        return new Cherry(x, y, points);
    }

    Bonus.call(this, x, y, points);
}

export { Cherry };
