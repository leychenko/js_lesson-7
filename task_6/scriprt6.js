

//=================================Задача 6====================================
// Задача 6.Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).


function madeTable(row,column) {
	 table =	document.write(`<table>`)
			for(let i = 0; i < column; i++){
				document.write(`<tr>`)
				for(let j = 0; j < row; j++)
				document.write(`<td>${userMessage}</td>`)

				document.write(`</tr>`)
			}
			document.write(`</table>`)
			
			return table
}


let table
const userEnterRow =  parseInt(prompt("Введіть кількість рядків від 1 - 10"))
const userEnterColumn = parseInt(prompt("Введіть кількість колонок від 1 - 10"))
const userMessage = prompt("Введіть слово") 
const showTable = madeTable(userEnterRow, userEnterColumn)

