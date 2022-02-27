import { Position } from '../models/common/position';

describe('Position', () => {
    test('create map without new keyword', () => {
        expect(Position()).not.toBeNull();
    });
});
