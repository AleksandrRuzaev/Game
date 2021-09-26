import { Obstacle } from '..';

function Tree(x, y) {
    if (!new.target) {
        return new Tree(x, y);
    }

    Obstacle.call(this, x, y);
}

const Proto = function () {};
Proto.prototype = Obstacle.prototype;
Tree.prototype = new Proto();
Tree.prototype.constructor = Tree;

export { Tree };
