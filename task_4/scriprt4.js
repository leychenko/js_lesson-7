//================================= Задача 4 ====================================
// Задача 4. Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.

function getSomeMathResult(...numbers) {
  let result
  let notPaired = 0
  let additional = 0
  let moreForHundre = 0

  for (let i = 0; i < 3; i++) {
    if (numbers[i] % 2 === 0) notPaired ++
    if (numbers[i] > 0) additional++
    if (numbers[i] > 100) moreForHundre++
  }

  return (result = `<p>Кількість парних : <span>${notPaired}</span></p>
  <p>Кількість додатних: <span>${additional}</span></p>
  <p>Кількість більших за 100: <span>${moreForHundre}</span></p>`)
}

const userFirstNumber = parseInt(prompt("Введіть перше число"))
const userSecondNumber = parseInt(prompt("Введіть друге число"))
const userThirdNumber = parseInt(prompt("Введіть третє число"))

const finalResult = getSomeMathResult(
  userFirstNumber,
  userSecondNumber,
  userThirdNumber
)

document.write(`${finalResult}`)
