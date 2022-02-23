import { Tree } from '../models/map-objects/obstacles/tree';
import { Stone } from '../models/map-objects/obstacles/stone';

describe('Bonus functionality', () => {
    test('create tree without new key', () => {
        const tree = Tree(5, 5);

        expect(tree).not.toBeNull();
    });

    test('create stone without new key', () => {
        const stone = Stone(5, 3);

        expect(stone).not.toBeNull();
    });
});
