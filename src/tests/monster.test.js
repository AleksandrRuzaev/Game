import { Wolf } from '../models/map-objects/movable-objects/monsters/wolf';
import { Bear } from '../models/map-objects/movable-objects/monsters/bear';
import { Player } from '../models/map-objects/movable-objects/player';
import { Tree } from '../models/map-objects/obstacles/tree';

const wolf = new Wolf(0, 0, 10, 2, 2);
const bear = new Bear(2, 0, 10, 5, 1);
const tree = new Tree(2, 0);
const player = new Player(2, 0, 20, 5, 1);

// before Each clear mock
// map mock

describe('move objects', () => {
    test('valid monster move', () => {
        const { x, y } = wolf.position;
        const direction = 'top';

        wolf.move(direction);

        expect(y).toBe(y + wolf.speed);
        expect(x).toBe(wolf.position.x);
    });

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
