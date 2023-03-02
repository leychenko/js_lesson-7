

//================================= Задача 2 ====================================


// Задача 2. Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.


function numberDay(week) {
	switch (week) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:return "Це робочий день тижня"
    case 6:
    case 7:return "Це вихідний день"

    default:
      return "Ви ввели не існуючий день тижня"
  }
}
const userNamberDay = parseInt(prompt("Введіть номер дня тижня від 1 - 7", "1"))
const dayWeek = numberDay(userNamberDay)

document.write(`<p>День який Ви вибрали: <span>${dayWeek}</span></p>`)