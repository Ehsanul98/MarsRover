class Grid {
	constructor(m, n) {
		this.width = m;
		this.height = n;
	}

	isValidPosition(x, y) {
		return x >= 0 && x <= this.width && y >= 0 && y <= this.height;
	}
}

export default Grid;
