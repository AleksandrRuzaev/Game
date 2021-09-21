function Position(x, y) {
  if (!new.target) {
    new Position(x, y);
  }

  this.x = x;
  this.y = y;
}
