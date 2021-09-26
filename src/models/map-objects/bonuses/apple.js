import { Bonus } from './bonus';

function Apple(x, y, points) {
    if (!new.target) {
        return new Apple(x, y, points);
    }

    Bonus.call(this, x, y, points);
}

const Proto = function () {};
Proto.prototype = Bonus.prototype;
Apple.prototype = new Proto();
Apple.prototype.constructor = Apple;

export { Apple };
