//================================= Задача 9 ====================================
// Задача 9.Дано покази температур (довільна кількість). Розробити функцію, яка дозволить підрахувати кількість від’ємних показів температури.



function getMinusTemp(...numbers) {
  let countMinusTemperature = 0
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) countMinusTemperature += 1
  }
  return countMinusTemperature
}

const temperature = getMinusTemp(
  2,
  -4,
  -6,
  25,
  31,
  12,
  -5,
  -6,
  20,
  -12,
  -3,
  1,
  -12
)

document.write(
  `<p>Кількість від’ємних показів температури становить:<span>${temperature}</span></p>`
)