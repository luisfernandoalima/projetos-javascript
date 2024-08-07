// O método Apply é similar ao Call, mas pode enviar os parâmetros da função em um Array

function sumNumbers(firstNumber, secondNumber) {
	const sum =  this + firstNumber + secondNumber;

	console.log(sum)
}

sumNumbers.apply(5, [2, 7]) // 14