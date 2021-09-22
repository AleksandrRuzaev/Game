import { config } from '../utils/config';

function Game(difficult = 'medium') {
    if (!new.target) {
        return new Game(difficult);
    }

    this.settings = config.difficult[difficult];

    this.generateMap = function () {
        // new Player();
        // for => new Monster, Bonus, Obstacle()
        // return new Map()
        throw Error('generateMap not implemented');
    };
}

export { Game };
