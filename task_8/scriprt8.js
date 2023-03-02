

//================================= Задача 8 ====================================


// Задача 8.Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення (тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>

function getBaner(a,b,c) {
	const banner = `<h1>${a}</h1><br>
							<a target='_blank' href='${c}'>${b}</a>`
		return banner
}

const title = `Я заголовок`
const image = `<img class="big-image" src="../img/image.jpg" alt="image">`
const link = `https://uk.wikipedia.org/wiki/%D0%A1%D0%BB%D0%B0%D0%B2%D0%B0_%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%96!`

const showBaner = getBaner(title, image, link)


document.write(`${showBaner}`)