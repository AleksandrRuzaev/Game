import { Bonus } from '..';

function Cherry(x, y, points) {
    if (!new.target) {
        return new Cherry(x, y, points);
    }

    Bonus.call(this, x, y, points);
}

const Proto = function () {};
Proto.prototype = Bonus.prototype;
Cherry.prototype = new Proto();
Cherry.prototype.constructor = Cherry;

export { Cherry };
