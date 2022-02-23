import { Player } from '../models/map-objects/movable-objects/player';
import { Apple } from '../models/map-objects/bonuses/apple';
import { Cherry } from '../models/map-objects/bonuses/cherry';
import { Wolf } from '../models/map-objects/movable-objects/monsters/wolf';
import { Bear } from '../models/map-objects/movable-objects/monsters/bear';

const player = new Player(0, 0, 20, 5, 1);
const wolf = new Wolf(2, 0, 10, 2, 2);
const bear = new Bear(1, 0, 10, 5, 1);
const apple = new Apple(2, 1, 2);
const cherry = new Cherry(2, 2, 3);

describe('Player', () => {
    beforeEach(() => {
        player._points = 0;
        wolf.health = 5;
    });

    describe('creation', () => {
        test('create player without new key', () => {
            const player = Player(5, 5, 10, 2, 2);

            expect(player).not.toBeNull();
        });
    });

    describe('result with interactions', () => {
        beforeEach(() => {
            player._points = 0;
            wolf.health = 5;
        });

        test('player interacts with apple', () => {
            player.interact(apple);

            expect(player._points).toEqual(apple._pointsValue);
        });

        test('player interacts with cherry', () => {
            player.interact(cherry);

            expect(player._points).toEqual(cherry._pointsValue);
        });

        test('player interacts with wolf', () => {
            wolf.health = 4;

            const health = player.health;

            player.interact(wolf);

            expect(health - wolf.damage).toEqual(player.health);
        });

        test('player interacts with bear', () => {
            bear.health = 4;

            const health = player.health;

            player.interact(bear);

            expect(health - bear.damage).toEqual(player.health);
        });
    });

    describe('move', () => {
        test('move top', () => {
            player.position = { x: 5, y: 5 };

            const { x, y } = player.position;
            const direction = 'top';

            player.move(direction);

            expect(y + player.speed).toEqual(player.position.y);
            expect(x).toEqual(player.position.x);
        });

        test('move bottom', () => {
            const { x, y } = player.position;
            const direction = 'bottom';

            player.move(direction);

            expect(y - player.speed).toEqual(player.position.y);
            expect(x).toEqual(player.position.x);
        });

        test('move right', () => {
            const { x, y } = player.position;
            const direction = 'right';

            player.move(direction);

            expect(y).toEqual(player.position.y);
            expect(x + player.speed).toEqual(player.position.x);
        });

        test('move left', () => {
            const { x, y } = player.position;
            const direction = 'left';

            player.move(direction);

            expect(y).toEqual(player.position.y);
            expect(x - player.speed).toEqual(player.position.x);
        });
    });
});
