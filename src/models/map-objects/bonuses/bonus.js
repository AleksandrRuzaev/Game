import { MapObject } from '../map-object';

function Bonus(x, y, pointsValue) {
    if (!new.target) {
        return new Bonus(x, y, pointsValue);
    }

    MapObject.call(this, x, y);

    this._pointsValue = pointsValue;
}

const Proto = function () {};
Proto.prototype = MapObject.prototype;
Bonus.prototype = new Proto();
Bonus.prototype.constructor = Bonus;

Bonus.prototype.apply = function () {
    throw Error('Bonus not implemented');
};

export { Bonus };
