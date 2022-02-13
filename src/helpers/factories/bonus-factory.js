import { Apple } from '../../models/map-objects/bonuses/apple';
import { Cherry } from '../../models/map-objects/bonuses/cherry';

export function monsterFactory(type, data) {
    const x = data?.position.x ?? 0;
    const y = data?.position.y ?? 0;
    const wasRemoved = data?.wasRemoved;
    const pointsValue = data?.pointsValue;

    switch (type) {
        case Apple.name: {
            const tree = new Apple(x, y, pointsValue ?? 2);

            tree.wasRemoved = wasRemoved ?? false;

            return tree;
        }
        case Cherry.name: {
            const stone = new Cherry(x, y, pointsValue ?? 3);

            stone.wasRemoved = wasRemoved ?? false;

            return stone;
        }
        default:
            break;
    }
}
