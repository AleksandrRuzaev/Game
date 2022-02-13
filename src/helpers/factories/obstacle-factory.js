import { Tree } from '../../models/map-objects/obstacles/tree';
import { Stone } from '../../models/map-objects/obstacles/stone';

export function obstacleFactory(type, data) {
    const x = data?.position.x ?? 0;
    const y = data?.position.y ?? 0;
    const wasRemoved = data?.wasRemoved;

    switch (type) {
        case Tree.name: {
            const tree = new Tree(x, y);

            tree.wasRemoved = wasRemoved ?? false;

            return tree;
        }
        case Stone.name: {
            const stone = new Stone(x, y);

            stone.wasRemoved = wasRemoved ?? false;

            return stone;
        }
        default:
            break;
    }
}
