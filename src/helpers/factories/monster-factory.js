import { Wolf } from '../../models/map-objects/movable-objects/monsters/wolf';
import { Bear } from '../../models/map-objects/movable-objects/monsters/bear';

export function monsterFactory(type, data) {
    const x = data?.position.x ?? 0;
    const y = data?.position.y ?? 0;
    const health = data?.health;
    const damage = data?.damage;
    const speed = data?.speed;
    const wasRemoved = data?.wasRemoved;

    switch (type) {
        case Wolf.name: {
            const wolf = new Wolf(x, y, health ?? 10, damage ?? 2, speed ?? 2);

            wolf.wasRemoved = wasRemoved ?? false;

            return wolf;
        }
        case Bear.name: {
            const bear = new Bear(x, y, health ?? 20, damage ?? 5, speed ?? 1);

            bear.wasRemoved = wasRemoved ?? false;

            return bear;
        }
        default:
            break;
    }
}
