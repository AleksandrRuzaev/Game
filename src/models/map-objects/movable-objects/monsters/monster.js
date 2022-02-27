import { instanceOf } from '../../../../helpers/helpers';
import { Bonus } from '../../bonuses/bonus';
import { MovableObject } from '../movable-object';
import { Player } from '../player';

function Monster(x, y, health, damage, speed) {
    MovableObject.call(this, x, y, health, damage, speed);
}

const Proto = function () {};
Proto.prototype = MovableObject.prototype;
Monster.prototype = new Proto();
Monster.prototype.constructor = Monster;

Monster.prototype.interact = function (object) {
    const isInteractionWithBonus = instanceOf(object, Bonus);
    const isInteractionWithPlayer = instanceOf(object, Player);

    if (isInteractionWithBonus) {
        this.health += object.getPoints();
    }
    if (isInteractionWithPlayer) {
        this.health -= object.damage;
    }
};

export { Monster };
