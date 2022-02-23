import { MapObject } from '../map-object';

function Bonus(x, y, pointsValue) {
    MapObject.call(this, x, y);

    this._pointsValue = pointsValue;
}

const Proto = function () {};
Proto.prototype = MapObject.prototype;
Bonus.prototype = new Proto();
Bonus.prototype.constructor = Bonus;

Bonus.prototype.getPoints = function () {
    return this._pointsValue;
};
Bonus.prototype.interact = function (object) {
    // use some skill if it has
    this.wasRemoved = true;
};

export { Bonus };
