//================================= Задача 10 ====================================
// Задача 10.Дано покази температур (довільна кількість). Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури.

function getArithmeticMeanTemp(...numbers) {
	let countTemperature = 0
	let counter = 0
	for(let i = 0; i < numbers.length; i++){
		if(numbers[i] > 0){
			countTemperature += numbers[i]
			counter++
		} 
	}
	countTemperature / counter
	return countTemperature / counter
}

const temperatureMean = getArithmeticMeanTemp(
  3,
  21,
  -12,
  5,
  -8,
  33,
  11,
  -4,
  -10,
  25,
  6,
  -3,
  1,
  25
)

document.write(
  `<p>Середнє значення для додатних показів температури дорівнює: <span>${temperatureMean.toFixed(
    1
  )} <sup>o</sup>C</span></p>`
)