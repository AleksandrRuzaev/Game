import { Player } from '../models/map-objects/movable-objects/player';
import { Tree } from '../models/map-objects/obstacles/tree';
import { Map } from '../models/map';
import { Cherry } from '../models/map-objects/bonuses/cherry';
import { Wolf } from '../models/map-objects/movable-objects/monsters/wolf';
import { Bear } from '../models/map-objects/movable-objects/monsters/bear';
import { Position } from '../models/common/position';

const wolf = new Wolf(0, 0, 10, 2, 2);
const bear = new Bear(2, 0, 10, 5, 1);
const tree = new Tree(2, 0);
const player = new Player(2, 0, 20, 5, 1);
const cherry = new Cherry(5, 5, 3);

const map = new Map(player, [wolf, bear], [cherry], [tree], { width: 9, height: 9 });

describe('creation', () => {
    test('create wolf without new key', () => {
        const wolf = Wolf(5, 5, 10, 2, 2);

        expect(wolf).not.toBeNull();
    });

    test('create bear without new key', () => {
        const bear = Bear(5, 5, 10, 2, 2);

        expect(bear).not.toBeNull();
    });
});

describe('move objects', () => {
    beforeEach(() => {
        wolf.position = new Position(0, 0);
    });

    describe('valid move', () => {
        test('move top', () => {
            const { x, y } = wolf.position;
            const direction = 'top';

            wolf.move(direction);

            expect(wolf.position.y).toEqual(y + wolf.speed);
            expect(wolf.position.x).toEqual(x);
        });

        test('move bottom', () => {
            wolf.position = { x: 5, y: 5 };

            const { x, y } = wolf.position;
            const direction = 'bottom';

            wolf.move(direction);

            expect(wolf.position.y).toEqual(y - wolf.speed);
            expect(wolf.position.x).toEqual(x);
        });

        test('move right', () => {
            const { x, y } = wolf.position;
            const direction = 'right';

            wolf.move(direction);

            expect(wolf.position.y).toEqual(y);
            expect(wolf.position.x).toEqual(x + wolf.speed);
        });

        test('move left', () => {
            wolf.position = { x: 5, y: 5 };

            const { x, y } = wolf.position;
            const direction = 'left';

            wolf.move(direction);

            expect(wolf.position.y).toEqual(y);
            expect(wolf.position.x).toEqual(x - wolf.speed);
        });
    });

    describe('result with interactions', () => {
        test('monster interacts with bonus', () => {
            wolf.position = new Position(3, 5);

            const { x, y } = wolf.position;
            const direction = 'right';

            map.moveObject(wolf, direction);

            expect(wolf.position.x).toEqual(x + wolf.speed);
            expect(wolf.position.y).toEqual(y);
            expect(cherry.wasRemoved).toBeTruthy();
        });

        test('monster interacts with player', () => {
            const wolfHealth = wolf.health;

            wolf.interact(player);

            expect(wolf.health).toEqual(wolfHealth - player.damage);
        });
    });
});
