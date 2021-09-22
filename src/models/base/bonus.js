import { MapObject } from '..';

function Bonus(x, y, pointsValue) {
    if (!new.target) {
        return new Bonus(x, y, pointsValue);
    }

    MapObject.call(this, x, y);

    this._pointsValue = pointsValue;
}

Bonus.prototype.apply = function () {
    throw Error('Bonus not implemented');
};

export { Bonus };
