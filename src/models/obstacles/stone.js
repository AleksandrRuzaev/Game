import { Obstacle } from '..';

function Stone(x, y) {
    if (!new.target) {
        return new Stone(x, y);
    }

    Obstacle.call(this, x, y);
}

const Proto = function () {};
Proto.prototype = Obstacle.prototype;
Stone.prototype = new Proto();
Stone.prototype.constructor = Stone;

export { Stone };
