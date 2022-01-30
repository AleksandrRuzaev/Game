import { Game } from '../models/game';
import { areAllObjectOnTheirOwnCells } from './utils/helpers';

describe('Game', () => {
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
});
