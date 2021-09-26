import { MapListener } from './controllers/map-listener';
import { PlayerListener } from './controllers/player-listener';
import { Game } from './models/game';

const game = new Game();
const map = game.generateMap();

const mapListener = new MapListener(map);
const playerListener = new PlayerListener(map);

mapListener.runGame();
