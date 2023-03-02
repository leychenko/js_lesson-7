

//================================= Задача 5 ====================================
// Задача 5: Створити окремі функції, які переводять:
// Сантиметри у дюйми;
// Кілограми у фунти;
// Кілометри у милі.


function getInches(a) {
	return a * 0.393701
}
function getPounds(b) {
	return b * 2.20462
}
function getMile(c) {
	return c * 0.621371
}

const userEnterCentimeter = 
  parseInt(prompt("Введіть сантиметри для перетворення у дюйми"))

const userEnterKilograms = 
  parseInt(prompt("Введіть кілограми для перетворення у фунти"))
 
const userEnterKilomiters = 
  parseInt(prompt("Введіть кілометри для перетворення у милі"))




document.write(`<table>
	<tr>
	<td>Перетворення сантиметрів ${userEnterCentimeter}см у дюйми:</td>
	<td>${getInches(userEnterCentimeter).toFixed(2)}</td>
	</tr>
	<tr>
	<td>Перетворення кілограмів ${userEnterKilograms}кг у фунти:</td>
	<td>${getPounds(userEnterKilograms).toFixed(2)}</td>
	</tr>
	<tr>
	<td>Перетворення кілометрів ${userEnterKilomiters}км у милі:</td>
	<td>${getMile(userEnterKilograms).toFixed(2)}</td>
	</tr>

</table>`)
