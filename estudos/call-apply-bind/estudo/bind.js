function sumNumbers(firstNumber, secondNumber) {
	const sum = this + firstNumber + secondNumber;

	console.log(sum)
	console.log(firstNumber)
	console.log(secondNumber)
}

const bindResultFunction = sumNumbers.bind(5, 7)

bindResultFunction(3) // 17