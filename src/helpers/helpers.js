export function instanceOf(instance, instanceConstructor) {
    const proto = instance.__proto__;

    if (proto === null) {
        return false;
    } else {
        return proto.constructor === instanceConstructor ? true : instanceOf(proto, instanceConstructor);
    }
}

export function getRandomDirection() {
    const direction = Math.floor(Math.random() * 4);

    switch (direction) {
        case 1:
            return 'right';
        case 2:
            return 'bottom';
        case 3:
            return 'left';
        case 0:
        default:
            return 'top';
    }
}

export function getPositionByDirection(direction, position, speed) {
    switch (direction) {
        case 'top':
            return { x: position.x, y: position.y + speed };
        case 'right':
            return { x: position.x + speed, y: position.y };
        case 'bottom':
            return { x: position.x, y: position.y - speed };
        case 'left':
            return { x: position.x - speed, y: position.y };
        default:
            break;
    }
}

export function mapObjectsToExportFormat(objects) {
    return objects.map((object) => ({
        position: { x: object.position.x, y: object.position.y },
        health: object.health,
        damage: object.damage,
        speed: object.speed,
        wasRemoved: object.wasRemoved,
        pointsValue: object._pointsValue,
        type: object.constructor.name,
    }));
}
