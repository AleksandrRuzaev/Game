import { MovableObject } from '../movable-object';

function Monster(x, y, health, damage, speed) {
    MovableObject.call(this, x, y, health, damage, speed);
}

const Proto = function () {};
Proto.prototype = MovableObject.prototype;
Monster.prototype = new Proto();
Monster.prototype.constructor = Monster;

export { Monster };
