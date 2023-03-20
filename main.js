import Game from './src/Game.js';

const game = new Game();
game.run(`4 8
(2, 3, E) LFRFF
(0, 2, N) FFLFRFF`);

game.run(`4 8
(2, 3, N) FLLFR
(1, 0, S) FFRLF`);
