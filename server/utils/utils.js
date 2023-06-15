
const create2DArray = (row, col) => {
	const arr = new Array(row);
	for(let i = 0; i < row; i++) {
		arr[i] = new Array(col);
	}

	return arr;
}

export const utils = {
	create2DArray,
}
