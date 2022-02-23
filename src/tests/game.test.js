import { Game } from '../models/game';
import { areAllObjectOnTheirOwnCells, findPath, generateNodes } from './utils/helpers';

describe('Game', () => {
    test('generate map without new', () => {
        const game = Game();

        expect(game).not.toBeNull();
        expect(game.settings.monsterSpeed).toEqual(1000);
    });

    test('generate map (easy)', () => {
        const game = new Game('easy');

        const map = game.generateMap();

        // default settings
        expect(map.getMonsters().length).toEqual(game.settings.monsterCount);
        expect(map.getBonuses().length).toEqual(game.settings.bonusCount);
        expect(map.getObstacles().length).toEqual(game.settings.obstacleCount);
        expect(game.settings.monsterSpeed).toEqual(1200);
        expect(areAllObjectOnTheirOwnCells(map)).toBeTrue();
    });

    test('generate map (medium)', () => {
        const game = new Game('medium');

        const map = game.generateMap();

        // default settings
        expect(map.getMonsters().length).toEqual(game.settings.monsterCount);
        expect(map.getBonuses().length).toEqual(game.settings.bonusCount);
        expect(map.getObstacles().length).toEqual(game.settings.obstacleCount);
        expect(game.settings.monsterSpeed).toEqual(1000);
        expect(areAllObjectOnTheirOwnCells(map)).toBeTrue();
    });

    test('generate map (hard)', () => {
        const game = new Game('hard');

        const map = game.generateMap();

        // default settings
        expect(map.getMonsters().length).toEqual(game.settings.monsterCount);
        expect(map.getBonuses().length).toEqual(game.settings.bonusCount);
        expect(map.getObstacles().length).toEqual(game.settings.obstacleCount);
        expect(game.settings.monsterSpeed).toEqual(800);
        expect(areAllObjectOnTheirOwnCells(map)).toBeTrue();
    });

    describe('map can be finished', () => {
        const game = new Game('test');

        test('first case', () => {
            const map = game.generateMap();
            const nodes = generateNodes(map);

            const anyEmptyEndNode = nodes.find((n) => n.isEmpty && n.x !== 0 && n.y !== 0);
            let result = findPath({ x: 0, y: 0 }, anyEmptyEndNode, nodes);

            for (const node of nodes) {
                const isNotStartOrEndNode = node.x !== 0 && node.y !== 0 && node.x !== anyEmptyEndNode.x && node.y !== anyEmptyEndNode.y;
                const isFreeNode = isNotStartOrEndNode && node.isEmpty;

                if (isFreeNode) {
                    result = findPath(node, anyEmptyEndNode, nodes);
                }
            }

            expect(result).toBeTruthy();
        });

        test('second case', () => {
            const map = game.generateMap();
            const nodes = generateNodes(map);

            const anyEmptyEndNode = nodes.find((n) => n.isEmpty && n.x !== 0 && n.y !== 0);
            let result = findPath({ x: 0, y: 0 }, anyEmptyEndNode, nodes);

            for (const node of nodes) {
                const isNotStartOrEndNode = node.x !== 0 && node.y !== 0 && node.x !== anyEmptyEndNode.x && node.y !== anyEmptyEndNode.y;
                const isFreeNode = isNotStartOrEndNode && node.isEmpty;

                if (isFreeNode) {
                    result = findPath(node, anyEmptyEndNode, nodes);
                }
            }

            expect(result).toBeTruthy();
        });

        test('third case', () => {
            const map = game.generateMap();
            const nodes = generateNodes(map);

            const anyEmptyEndNode = nodes.find((n) => n.isEmpty && n.x !== 0 && n.y !== 0);
            let result = findPath({ x: 0, y: 0 }, anyEmptyEndNode, nodes);

            for (const node of nodes) {
                const isNotStartOrEndNode = node.x !== 0 && node.y !== 0 && node.x !== anyEmptyEndNode.x && node.y !== anyEmptyEndNode.y;
                const isFreeNode = isNotStartOrEndNode && node.isEmpty;

                if (isFreeNode) {
                    result = findPath(node, anyEmptyEndNode, nodes);
                }
            }

            expect(result).toBeTruthy();
        });
    });
});
