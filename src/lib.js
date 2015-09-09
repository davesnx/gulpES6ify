const sqrt = Math.sqrt;

function square(x = 5) {
	return x * x;
}

function diag(x, y) {
	return sqrt(square(x) + square(y));
}

export {sqrt, square, diag};
