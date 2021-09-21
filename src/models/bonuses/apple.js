import { Bonus } from '..';

function Apple(x, y, points) {
    if (!new.target) {
        return new Apple(x, y, points);
    }

    Bonus.call(this, x, y, points);
}

export { Apple };
