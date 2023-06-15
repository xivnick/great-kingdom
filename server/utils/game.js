
const BOARD_SIZE = 9;

class Game {
	constructor() {
		this.board = utils.create2DArray(BOARD_SIZE, BOARD_SIZE);

		this.initBoard();
	}

	// private
	initBoard() {
		for(let i = 0; i < BOARD_SIZE; i++) {
			for(let j = 0; j < BOARD_SIZE; j++) {
				this.board[i][j] = 0;
			}
		}

		this.board[4][4] = -1;
	}

	// public
	getBoard() {
		return this.board;
	}

	setBoard(i, j, value) {
		if(value === 1 || value === 2) this.board[i][j] = value;
		else return;
	}
}

const game = new Game();

export { game };