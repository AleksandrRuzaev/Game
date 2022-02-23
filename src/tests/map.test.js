import { Apple } from '../models/map-objects/bonuses/apple';
import { Cherry } from '../models/map-objects/bonuses/cherry';
import { Wolf } from '../models/map-objects/movable-objects/monsters/wolf';
import { Bear } from '../models/map-objects/movable-objects/monsters/bear';
import { Player } from '../models/map-objects/movable-objects/player';
import { Tree } from '../models/map-objects/obstacles/tree';
import { Stone } from '../models/map-objects/obstacles/stone';
import { Map } from '../models/map';

const player = new Player(3, 0, 20, 5, 1);
const wolf = new Wolf(0, 0, 10, 2, 2);
const bear = new Bear(2, 0, 10, 5, 1);
const tree = new Tree(1, 0);
const stone = new Stone(2, 0);
const apple = new Apple(2, 1, 2);
const cherry = new Cherry(2, 2, 3);

describe('Map functionality', () => {
    const map = new Map(player, [wolf, bear], [apple, cherry], [tree, stone], { width: 9, height: 9 });

    afterEach(() => {
        player.interact = undefined;
        apple.interact = undefined;
        cherry.interact = undefined;
        wolf.interact = undefined;
        stone.interact = undefined;
        tree.interact = undefined;
        bear.interact = undefined;
    });

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
        expect(map.getByPosition({ x: 0, y: 1 }).length).toEqual(0);
    });

    test('can move', () => {
        expect(map.canMove({ x: 1, y: 5 })).toBeTruthy();
        expect(map.canMove({ x: 3, y: 0 })).toBeFalsy();
    });

    test('check inside the map', () => {
        expect(map.checkInsideTheMap({ x: 1, y: 5 })).toBeTruthy();
        expect(map.checkInsideTheMap({ x: 0, y: 0 })).toBeTruthy();
        expect(map.checkInsideTheMap({ x: 9, y: 0 })).toBeFalsy();
        expect(map.checkInsideTheMap({ x: 0, y: 9 })).toBeFalsy();
        expect(map.checkInsideTheMap({ x: -1, y: 0 })).toBeFalsy();
        expect(map.checkInsideTheMap({ x: 3, y: -1 })).toBeFalsy();
    });

    test.skip('move', () => {
        wolf.move = jest.fn();
        bear.move = jest.fn();

        map.moveObjects();

        expect(wolf.move).toHaveBeenCalledTimes(1);
        expect(bear.move).toHaveBeenCalledTimes(1);
    });

    describe('Objects interaction', () => {
        describe('Interact with bonus', () => {
            test('Interaction between player and apple', () => {
                player.interact = jest.fn();
                apple.interact = jest.fn();

                map.interact(player, apple);

                expect(player.interact).toHaveBeenCalledTimes(1);
                expect(apple.interact).toHaveBeenCalledTimes(1);
            });

            test('Interaction between player and cherry', () => {
                player.interact = jest.fn();
                cherry.interact = jest.fn();

                map.interact(player, cherry);

                expect(player.interact).toHaveBeenCalledTimes(1);
                expect(cherry.interact).toHaveBeenCalledTimes(1);

                // expect(player._points).toEqual(cherry._pointsValue);
                // expect(map.getBonuses().length).toEqual(1);
            });

            test('Interaction between monster and apple', () => {
                wolf.interact = jest.fn();
                apple.interact = jest.fn();

                map.interact(wolf, apple);

                expect(wolf.interact).toHaveBeenCalledTimes(1);
                expect(apple.interact).toHaveBeenCalledTimes(1);
            });

            test('Interaction between monster and cherry', () => {
                wolf.interact = jest.fn();
                cherry.interact = jest.fn();

                map.interact(wolf, cherry);

                expect(wolf.interact).toHaveBeenCalledTimes(1);
                expect(cherry.interact).toHaveBeenCalledTimes(1);
            });
        });

        describe('Interact with obstacle', () => {
            test('Interaction between player and stone', () => {
                player.interact = jest.fn();
                stone.interact = jest.fn();

                map.interact(player, stone);

                expect(player.interact).toHaveBeenCalledTimes(0);
                expect(stone.interact).toHaveBeenCalledTimes(0);
            });

            test('Interaction between player and tree', () => {
                player.interact = jest.fn();
                tree.interact = jest.fn();

                map.interact(player, tree);

                expect(player.interact).toHaveBeenCalledTimes(0);
                expect(tree.interact).toHaveBeenCalledTimes(0);
            });

            test('Interaction between monster and stone', () => {
                wolf.interact = jest.fn();
                stone.interact = jest.fn();

                map.interact(wolf, stone);

                expect(wolf.interact).toHaveBeenCalledTimes(0);
                expect(stone.interact).toHaveBeenCalledTimes(0);
            });

            test('Interaction between monster and tree', () => {
                wolf.interact = jest.fn();
                tree.interact = jest.fn();

                map.interact(wolf, tree);

                expect(wolf.interact).toHaveBeenCalledTimes(0);
                expect(tree.interact).toHaveBeenCalledTimes(0);
            });
        });

        describe('Interaction between movable objects', () => {
            test('Interaction between player and wolf', () => {
                player.interact = jest.fn();
                wolf.interact = jest.fn();

                map.interact(player, wolf);

                expect(player.interact).toHaveBeenCalledTimes(1);
                expect(wolf.interact).toHaveBeenCalledTimes(1);
            });

            test('Interaction between player and bear', () => {
                player.interact = jest.fn();
                bear.interact = jest.fn();

                map.interact(player, bear);

                expect(player.interact).toHaveBeenCalledTimes(1);
                expect(bear.interact).toHaveBeenCalledTimes(1);
            });

            test('Interaction between bear and wolf', () => {
                wolf.interact = jest.fn();
                bear.interact = jest.fn();

                map.interact(wolf, bear);

                expect(wolf.interact).toHaveBeenCalledTimes(0);
                expect(bear.interact).toHaveBeenCalledTimes(0);
            });
        });
    });

    describe('Data manipulations', () => {
        test('import data', () => {
            const map2 = new Map();

            map2.importData(createMockImportData(map));

            expect(map2).toEqual(map);
        });
        test('export data', () => {
            expect(map.exportData()).toEqual(createMockImportData(map));
        });
    });
});

function createMockImportData(map) {
    return JSON.stringify({
        dimensions: {
            width: map._dimensions.width,
            height: map._dimensions.height,
        },
        player: {
            position: {
                x: player.position.x,
                y: player.position.y,
            },
            health: player.health,
            damage: player.damage,
            speed: player.speed,
            points: player._points,
            wasRemoved: player.wasRemoved,
            type: Player.name,
        },
        monsters: [
            {
                position: { x: wolf.position.x, y: wolf.position.y },
                health: wolf.health,
                damage: wolf.damage,
                speed: wolf.speed,
                wasRemoved: wolf.wasRemoved,
                type: Wolf.name,
            },
            {
                position: { x: bear.position.x, y: bear.position.y },
                health: bear.health,
                damage: bear.damage,
                speed: bear.speed,
                wasRemoved: bear.wasRemoved,
                type: Bear.name,
            },
        ],
        obstacles: [
            {
                position: { x: tree.position.x, y: tree.position.y },
                health: tree.health,
                damage: tree.damage,
                wasRemoved: tree.wasRemoved,
                type: Tree.name,
            },
            {
                position: { x: stone.position.x, y: stone.position.y },
                health: stone.health,
                damage: stone.damage,
                wasRemoved: stone.wasRemoved,
                type: Stone.name,
            },
        ],
        bonuses: [
            {
                position: { x: apple.position.x, y: apple.position.y },
                health: apple.health,
                damage: apple.damage,
                wasRemoved: apple.wasRemoved,
                pointsValue: apple._pointsValue,
                type: Apple.name,
            },
            {
                position: { x: cherry.position.x, y: cherry.position.y },
                health: cherry.health,
                damage: cherry.damage,
                wasRemoved: cherry.wasRemoved,
                pointsValue: cherry._pointsValue,
                type: Cherry.name,
            },
        ],
    });
}
