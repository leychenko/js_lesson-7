

//================================= Задача 7 ====================================
// Задача 7. Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)


function getImageRandom(...numbers) {
  let randomImage = Math.floor(Math.random() * 4)
	return numbers[randomImage] 
}

const imageOne =`<img src="../img/1.png" alt="image">`
const imageTwo =`<img src="../img/2.png" alt="image">`
const imageThree = `<img src="../img/3.png" alt="image">`
const imageFour = `<img src="../img/4.png" alt="image">`

const showRandomImage = getImageRandom(
  imageOne,
  imageTwo,
  imageThree,
  imageFour
)

document.write(`${showRandomImage}`)

