class Grid {
	constructor(m, n) {
		this.width = m;
		this.height = n;
		this.lostRobots = new Set();
	}

	isValidPosition(x, y) {
		return x >= 0 && x <= this.width && y >= 0 && y <= this.height;
	}

	markRobotLost(robot) {
		this.lostRobots.add(robot);
	}
}

export default Grid;
