import { Player } from '../models/map-objects/movable-objects/player';
import { Tree } from '../models/map-objects/obstacles/tree';
import { Map } from '../models/map';
import { Apple } from '../models/map-objects/bonuses/apple';
import { Cherry } from '../models/map-objects/bonuses/cherry';
import { Wolf } from '../models/map-objects/movable-objects/monsters/wolf';
import { Bear } from '../models/map-objects/movable-objects/monsters/bear';
import { Player } from '../models/map-objects/movable-objects/player';
import { Tree } from '../models/map-objects/obstacles/tree';
import { Stone } from '../models/map-objects/obstacles/stone';
import { Map } from '../models/map';

const player = new Player(2, 0, 20, 5, 1);
const wolf = new Wolf(0, 0, 10, 2, 2);
const bear = new Bear(2, 0, 10, 5, 1);
const tree = new Tree(1, 0);
const stone = new Stone(2, 0);
const apple = new Apple(2, 1, 2);
const cherry = new Cherry(2, 2, 3);

describe('Player', () => {
    beforeEach(() => {
        wolf.position = { x: 0, y: 0 };
        player._points = 0;
        wolf.health = 5;
    });

    const map = new Map(player, [wolf, bear], [apple, cherry], [tree, stone]);

    test('player interacts with apple', () => {
        player.interact(apple);

        expect(player._points).toEqual(apple._pointsValue);
        expect(map.getByPosition(apple.position).wasRemoved).toBeTruthy();
    });

    test('player interacts with cherry', () => {
        player.interact(cherry);

        expect(player._points).toEqual(cherry._pointsValue);
        expect(map.getByPosition(cherry.position).wasRemoved).toBeTruthy();
    });

    test('player kills wolf', () => {
        wolf.health = 4;
        player.interact(wolf);

        expect(player.health).toEqual(player.health - wolf.damage);
        expect(map.getByPosition(wolf.position).wasRemoved).toBeTruthy();
    });

    test('player kills bear', () => {
        bear.health = 4;
        player.interact(bear);

        expect(player.health).toEqual(player.health - bear.damage);
        expect(map.getByPosition(bear.position).wasRemoved).toBeTruthy();
    });
});
