import Grid from './Grid.js';

describe('Grid', () => {
	describe('isValidPosition', () => {
		it('should return true for valid positions within the grid', () => {
			const grid = new Grid(5, 5);

			expect(grid.isValidPosition(0, 0)).toBe(true);
			expect(grid.isValidPosition(2, 3)).toBe(true);
			expect(grid.isValidPosition(4, 4)).toBe(true);
		});

		it('should return false for positions outside the grid', () => {
			const grid = new Grid(3, 3);

			expect(grid.isValidPosition(-1, 1)).toBe(false);
			expect(grid.isValidPosition(2, 4)).toBe(false);
		});
	});
});
