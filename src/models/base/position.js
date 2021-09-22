function Position(x, y) {
    if (!new.target) {
        return new Position(x, y);
    }

    this.x = x;
    this.y = y;
}

export { Position };
