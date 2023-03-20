import Game from './Game.js';

describe('Game', () => {
	describe('run game', () => {
		it('should have correct robots in positions and lost state', () => {
			const game = new Game();
			game.run(`4 8
            (2, 3, E) LFRFF
            (0, 2, N) FFLFRFF`);
			expect(game.robots[0].lost).toBe(false);
			expect(game.robots[1].lost).toBe(true);
		});
	});
});
