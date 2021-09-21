function MapObject(x, y, health, damage) {
  if (!new.target) {
    return new MapObject(position, health, damage);
  }

  this.position = { x, y };
  this.health = health;
  this.damage = damage;
  this.wasRemoved = false;
}

export { MapObject };
