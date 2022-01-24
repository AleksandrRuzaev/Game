import { Player } from '../models/map-objects/movable-objects/player';
import { Tree } from '../models/map-objects/obstacles/tree';
import { Map } from '../models/map';
import { MovableObject } from '../models/map-objects/movable-objects/movable-object';

const wolf = new MovableObject(0, 0, 10, 2, 2);
const map = new Map();
const bear = new MovableObject(2, 0, 10, 5, 1);
const tree = new Tree(2, 0);
const player = new Player(2, 0, 20, 5, 1);

jest.mock('../models/map');
Map.mockImplementation(() => {
    return {
        _player: player,
        _mapObjects: [player, bear, wolf, tree],
    };
});

beforeEach(() => {
    Map.mockClear();
});

describe('move objects', () => {
    beforeEach(() => {
        wolf.position = { x: 0, y: 0 };
    });

    describe('valid move', () => {
        test('move top', () => {
            const { x, y } = wolf.position;
            const direction = 'top';

            wolf.move(direction);

            expect(y).toBe(y + wolf.speed);
            expect(x).toBe(wolf.position.x);
        });

        test('move bottom', () => {
            wolf.position = { x: 5, y: 5 };

            const { x, y } = wolf.position;
            const direction = 'bottom';

            wolf.move(direction);

            expect(y).toBe(y - wolf.speed);
            expect(x).toBe(wolf.position.x);
        });

        test('move right', () => {
            const { x, y } = wolf.position;
            const direction = 'right';

            wolf.move(direction);

            expect(y).toBe(wolf.position.y);
            expect(x).toBe(x + wolf.speed);
        });

        test('move left', () => {
            wolf.position = { x: 5, y: 5 };

            const { x, y } = wolf.position;
            const direction = 'left';

            wolf.move(direction);

            expect(y).toBe(wolf.position.y);
            expect(x).toBe(x - wolf.speed);
        });
    });

    describe('invalid move', () => {
        test('invalid monster move (collide with another monster)', () => {
            const { x, y } = wolf.position;
            const direction = 'right';
            wolf.move(direction);
            expect(y).toBe(wolf.position.y);
            expect(x).toBe(wolf.position.x);
        });

        test('invalid monster move (collide with obstacle)', () => {
            const { x, y } = wolf.position;
            const direction = 'right';
            wolf.move(direction);
            expect(y).toBe(wolf.position.y);
            expect(x).toBe(wolf.position.x);
        });

        test('invalid monster move (collide with player)', () => {
            const { x, y } = wolf.position;
            const direction = 'right';
            wolf.move(direction);
            expect(y).toBe(wolf.position.y);
            expect(x).toBe(x + wolf.speed);
            expect(player.health).toBe(player.health - wolf.damage);
        });

        test('invalid monster move (collide with bonus)', () => {
            const { x, y } = wolf.position;
            const direction = 'right';
            wolf.move(direction);
            expect(y).toBe(wolf.position.y);
            expect(x).toBe(x + wolf.speed);
            // reduce bonus count
        });
    });
});
