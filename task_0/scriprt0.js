

//================================= Задача 0 ====================================
// Задача 0. Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.

function getSeason (month){
	if ((month < 3 && month !== 0) || month === 12) return "Зими"
  else if (month < 6) return "Весни"
  else if (month < 9) return "Літа"
  else if (month <= 11 ) return "Осені"
  else return "Такого місяця не існує"
}

const numberMonth = parseInt(prompt("Enter number of month"))
const result = getSeason(numberMonth)
document.write(`<p>${numberMonth}-й місяць - це місяць ${result}</p>`)