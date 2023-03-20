class Robot {
	constructor(x, y, orientation, commands) {
		this.x = x;
		this.y = y;
		this.orientation = orientation;
		this.commands = commands;
		this.lost = false;
	}

	executeCommands(grid) {
		const orientations = ['N', 'E', 'S', 'W'];
		let directionIndex = orientations.indexOf(this.orientation);

		for (const command of this.commands) {
			if (command === 'L') {
				directionIndex = (directionIndex + 3) % 4; // Rotate left
			} else if (command === 'R') {
				directionIndex = (directionIndex + 1) % 4; // Rotate right
			} else if (command === 'F') {
				// How much robot has to move in X and Y direction
				const movedX = directionIndex === 1 ? 1 : directionIndex === 3 ? -1 : 0;
				const movedY = directionIndex === 0 ? 1 : directionIndex === 2 ? -1 : 0;
				const newX = this.x + movedX;
				const newY = this.y + movedY;

				if (grid.isValidPosition(newX, newY)) {
					// Update new position of robot
					this.x = newX;
					this.y = newY;
				} else {
					//Robot has moved out of bounds for given grid
					this.lost = true;
					break;
				}
			}
		}

		this.orientation = orientations[directionIndex];
	}

	toString() {
		return `(${this.x}, ${this.y}, ${this.orientation})${
			this.lost ? ' LOST' : ''
		}`;
	}
}

export default Robot;
