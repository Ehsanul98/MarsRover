import Grid from './Grid.js';
import Robot from './Robot.js';

describe('Robot', () => {
	describe('executeCommands', () => {
		it('should correctly execute commands that keep the robot within the grid', () => {
			const robot = new Robot(2, 3, 'E', 'LFRFF');

			const grid = new Grid(5, 5);

			robot.executeCommands(grid);

			expect(robot.toString()).toBe('(4, 4, E)');
		});

		it('should mark a robot as lost if it moves off the grid', () => {
			const robot = new Robot(0, 0, 'S', 'FFF');

			const grid = new Grid(2, 2);

			robot.executeCommands(grid);

			expect(robot.toString()).toBe('(0, 0, S) LOST');
		});
	});
});
