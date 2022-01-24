import { Stone, Tree, Wolf, Bear, Player, Map, Apple, Cherry } from '../models/index';

jest.mock('../models/map-objects/movable-objects/monsters/wolf.js');
Wolf.mockImplementation(() => {
    return {
        position: { x: 0, y: 0 },
        health: 10,
        damage: 2,
        speed: 2,
        move: jest.fn(),
    };
});

jest.mock('../models/map-objects/movable-objects/monsters/bear.js');
Bear.mockImplementation(() => {
    return {
        position: { x: 2, y: 0 },
        health: 10,
        damage: 5,
        speed: 1,
        move: jest.fn(),
    };
});

jest.mock('../models/map-objects/movable-objects/player.js');
Player.mockImplementation(() => {
    return {
        position: { x: 3, y: 0 },
        health: 20,
        damage: 5,
        speed: 1,
        move: jest.fn(),
    };
});

describe('Map functionality', () => {
    const wolf = new Wolf();
    const bear = new Bear();
    const tree = new Tree(1, 0);
    const stone = new Stone(2, 0);
    const apple = new Apple(2, 1, 2);
    const cherry = new Cherry(2, 2, 3);
    const player = new Player();

    const wolfMove = jest.fn();
    const bearMove = jest.fn();
    const playerMove = jest.fn();

    wolf.move = wolfMove;
    bear.move = bearMove;
    player.move = playerMove;

    const map = new Map(player, [wolf, bear], [apple, cherry], [tree, stone]);

    test('get monsters', () => {
        expect(map.getMonsters().length).toEqual(2);
    });

    test('get obstacles', () => {
        expect(map.getObstacles().length).toEqual(2);
    });

    test('get bonuses', () => {
        expect(map.getBonuses().length).toEqual(2);
    });

    test('get by position', () => {
        expect(map.getByPosition({ x: 1, y: 0 }).length).toEqual(1);
        expect(map.getByPosition({ x: 0, y: 0 }).length).toEqual(0);
    });

    test('can move', () => {
        expect(map.canMove({ x: 1, y: 0 })).toBeTruthy();
        expect(map.canMove({ x: 3, y: 0 })).toBeFalsy();
    });

    test('move', () => {
        map.doMove();

        expect(wolfMove).toHaveBeenCalledTimes(1);
        expect(bearMove).toHaveBeenCalledTimes(1);
        expect(playerMove).toHaveBeenCalledTimes(1);
    });

    describe('Objects interaction', () => {
        describe('Interact with bonus', () => {
            test('player interacts with apple', () => {
                map.interact(player, apple);

                expect(player._points).toEqual(apple._pointsValue);
                expect(map.getBonuses().length).toEqual(1);
            });

            test('player interacts with cherry', () => {
                map.interact(player, cherry);

                expect(player._points).toEqual(cherry._pointsValue);
                expect(map.getBonuses().length).toEqual(1);
            });

            test('monster interacts with bonus', () => {
                map.interact(wolf, cherry);

                expect(map.getBonuses().length).toEqual(1);
            });
        });
    });

    test('export data', () => {});
    test('import data', () => {});
});
