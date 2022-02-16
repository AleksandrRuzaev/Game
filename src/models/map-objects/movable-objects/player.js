import { instanceOf } from '../../../helpers/helpers';
import { MovableObject } from './movable-object';
import { Bonus } from '../bonuses/bonus';

function Player(x, y, health, damage, speed) {
    if (!new.target) {
        return new Player(x, y, health, damage, speed);
    }

    MovableObject.call(this, x, y, health, damage, speed);

    this._points = 0;
}

const Proto = function () {};
Proto.prototype = MovableObject.prototype;
Player.prototype = new Proto();
Player.prototype.constructor = Player;

Player.prototype.interact = function (object) {
    const isInteractionWithBonus = instanceOf(object, Bonus);

    if (isInteractionWithBonus) {
        this._points += object.getPoints();
    }
};

export { Player };
