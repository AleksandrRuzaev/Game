function MapObject(position, health, damage) {
  if (!new.target) {
    return new MapObject(position, health, damage);
  }

  this.position = position;
  this.health = health;
  this.damage = damage;
  this.wasRemoved = false;
}
