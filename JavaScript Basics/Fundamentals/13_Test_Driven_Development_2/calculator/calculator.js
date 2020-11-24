function add (num1,num2) {
	return add = num1 + num2;
}

function subtract (num1, num2) {
	return subtract = num1 - num2;
}

function sum (arrayNums) {
	return arrayNums.reduce( (accumulator, currentNum) => accumulator + currentNum,0);
}

function multiply (arrayNums) {
	return arrayNums.reduce( (accumulator, currentNum) => accumulator * currentNum);
}

function power(base,exp) {
	return Math.pow(base, exp);
}

function factorial(num) {
	
	let accumulator = 1;
	for (let i = 1; i < num+1; i++) {
		accumulator *= i;
	}
	return accumulator;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}