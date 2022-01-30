import { Player } from '../models/map-objects/movable-objects/player';
import { Tree } from '../models/map-objects/obstacles/tree';
import { Map } from '../models/map';
import { MovableObject } from '../models/map-objects/movable-objects/movable-object';
import { Cherry } from '../models/map-objects/bonuses/cherry';

const wolf = new MovableObject(0, 0, 10, 2, 2);
const map = new Map();
const bear = new MovableObject(2, 0, 10, 5, 1);
const tree = new Tree(2, 0);
const player = new Player(2, 0, 20, 5, 1);
const cherry = new Cherry(5, 5, 3);

jest.mock('../models/map');
Map.mockImplementation(() => {
    return {
        _player: player,
        _mapObjects: [player, bear, wolf, tree, cherry],
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

            expect(y).toEqual(y + wolf.speed);
            expect(x).toEqual(wolf.position.x);
        });

        test('move bottom', () => {
            wolf.position = { x: 5, y: 5 };

            const { x, y } = wolf.position;
            const direction = 'bottom';

            wolf.move(direction);

            expect(y).toEqual(y - wolf.speed);
            expect(x).toEqual(wolf.position.x);
        });

        test('move right', () => {
            const { x, y } = wolf.position;
            const direction = 'right';

            wolf.move(direction);

            expect(y).toEqual(wolf.position.y);
            expect(x).toEqual(x + wolf.speed);
        });

        test('move left', () => {
            wolf.position = { x: 5, y: 5 };

            const { x, y } = wolf.position;
            const direction = 'left';

            wolf.move(direction);

            expect(y).toEqual(wolf.position.y);
            expect(x).toEqual(x - wolf.speed);
        });
    });

    describe('invalid move', () => {
        test('invalid monster move (collide with another monster)', () => {
            const { x, y } = wolf.position;
            const direction = 'right';

            wolf.move(direction);

            expect(y).toEqual(wolf.position.y);
            expect(x).toEqual(wolf.position.x);
        });

        test('invalid monster move (collide with obstacle)', () => {
            const { x, y } = wolf.position;
            const direction = 'right';

            wolf.move(direction);

            expect(y).toEqual(wolf.position.y);
            expect(x).toEqual(wolf.position.x);
        });
    });

    describe('result with interactions', () => {
        test('monster interacts with bonus', () => {
            wolf.position = { x: 3, y: 5 };
            const { x, y } = wolf.position;
            const direction = 'top';

            wolf.move(direction);

            expect(x).toEqual(wolf.position.x);
            expect(y).toEqual(y + wolf.speed);
            expect(map.getByPosition(cherry.position).wasRemoved).toBeTruthy();
        });

        test('monster interacts with player', () => {
            wolf.interact(player);

            expect(player.health).toEqual(player.health - wolf.damage);
            expect(wolf.health).toEqual(wolf.health - player.damage);
        });
    });
});
