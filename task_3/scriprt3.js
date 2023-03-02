//================================= Задача 3 ====================================
// Задача 3. Створити окремі функції, які для 4 чисел знаходять:
// 1)суму;
// 2)добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення.

function getSum(number1, number2, number3, number4) {
  return number1 + number2 + number3 + number4
}
function getMultiplication(number1, number2, number3, number4) {
  return number1 * number2 * number3 * number4
}
function getArithmeticMean(number1, number2, number3, number4) {
  return (number1 + number2 + number3 + number4) / 4
}
function getMinSum(number1, number2, number3, number4) {
	 resultMinSum = number1
	if(number2 < resultMinSum) resultMinSum = number2
	if(number3 < resultMinSum) resultMinSum = number3
	if(number4 < resultMinSum) resultMinSum = number4
	return resultMinSum 
}

const userNumberOne = parseFloat(prompt("Введіть перше число", "1"))
const userNumberTwo = parseFloat(prompt("Введіть друге число", "1"))
const userNumberThree = parseFloat(prompt("Введіть третє число", "1"))
const userNumberFour = parseFloat(prompt("Введіть четверте число", "1"))
let resultMinSum 

const resultSumNumber = getSum(
  userNumberOne,
  userNumberTwo,
  userNumberThree,
  userNumberFour
)
const resultMultiplication = getMultiplication(
  userNumberOne,
  userNumberTwo,
  userNumberThree,
  userNumberFour
)
const resultArithmeticMean = getArithmeticMean(
  userNumberOne,
  userNumberTwo,
  userNumberThree,
  userNumberFour
)
const resultMinNumber = getMinSum(
  userNumberOne,
  userNumberTwo,
  userNumberThree,
  userNumberFour
)
document.write(
  `<p>Результат обчислення</p> <br><p>Сума: <span>${resultSumNumber}</span></p>
  <p>Добуток: <span>${resultMultiplication}</span></p>
  <p>Середнє арифметичне: <span>${resultArithmeticMean}</span></p>
  <p>Мінімальне значення: <span>${resultMinNumber}</span></p>`
)


