import { MapObject } from ".";

function Bonus(x, y, pointsValue) {
  if (!new.target) {
    return new Bonus();
  }

  MapObject.call(this, x, y);

  this._pointsValue = pointsValue;

  this.apply = function () {
    throw Error("Not implemented");
  };
}

export { Bonus };
