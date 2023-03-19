import Grid from './Grid.js';
import Robot from './Robot.js';

class Game {
	grid;
	robots = [];

	processInput(input) {
		const lines = input.split('\n');
		const [width, height] = lines[0].split(' ').map(Number);
		this.grid = new Grid(width, height);

		for (let i = 1; i < lines.length; i++) {
			const [_, x, y, orientation, command] = lines[i]
				.trim()
				.match(/^\((\d+), (\d+), ([NSEW])\) (.*)$/);
			this.robots.push(new Robot(+x, +y, orientation, command));
		}
	}

	run(input) {
		this.processInput(input);
		this.robots.forEach((currentRobot) => {
			currentRobot.executeCommands(this.grid);
			console.log(currentRobot.toString());
		});
	}
}

export default Game;
