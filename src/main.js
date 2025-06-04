import "./styles.css";
import i1 from './1.png'
import i2 from './2.png'
import i3 from './3.png'
import i4 from './4.png'
import i5 from './5.png'
import i6 from './6.png'
import i7 from './7.png'
import i8 from './8.png'
import i9 from './9.png'
import i10 from './10.png'


window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

let totalDivs = 0

function placeCoolLetters(string, parentElement) {
    let j = 0
    let k = 1
    for (let i = string.length; i > 0; i--){
        const symbol = string.slice(j, k)
        const span = document.createElement('span')
        span.textContent = symbol
        parentElement.appendChild(span)
    j++
    k++
    }
}


const titleText = ['Hi!!', '\n', 'I would love to see you when celebrating my birthday :)']
const titleDiv = document.getElementById('titleDiv')

function placeCoolLettersOrNextLine(string, parentElement) {
    if (string == '\n') {
        const div = document.createElement('div')
        parentElement.appendChild(div)
    }
    let j = 0
    let k = 1
    for (let i = string.length; i > 0; i--){
        const symbol = string.slice(j, k)
        const span = document.createElement('span')
        span.textContent = symbol
        let randomColor = getRandomRgb()
        span.setAttribute('id', totalDivs)
        span.setAttribute('class', 'fadeOut')
        parentElement.appendChild(span)
    j++
        k++
        totalDivs ++
    }
}

let textArray = [
    'what? my birthday!', '\n', 
    'when: 8th of july from 14:00', '\n',
    'where:', '\n', '\n',
    'On the 8th of july I would like to celebrate my birthday! Come when you want, leave when you want to a casual hangout. stay between 1 minute and 1 day.', '\n',
    "Do not feel pressure to bring any gifts, but feel free to bring something that is relaxing for you. Can be a book, a pillow, if you want to bring a instrument, please go ahead! (the stranger instrument the better)",'\n', '\n',
    'Also I would like to make a "feestslinger" (garland?) so feel welcome to bring something I can add to the string that I will hang there. There will be a place for making music, some drinks and food. We will be near water, so there might be some swimming.', '\n', '\n',
    'I short, please come celebrate the good life with me on the 8th of july,', '\n',
    'bring along whoever you would like :)'
]

let i = 0

titleText.forEach((element) => {
    i++
    let dynamicID = `line${i}`
    placeCoolLettersOrNextLine(element, titleDiv)
})



textArray.forEach((element) => {
    i++
    let dynamicID = `line${i}`
    const parentElement = document.getElementById(dynamicID)
    placeCoolLettersOrNextLine(element, parentElement)
})

function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return  'rgb(' + r + ', ' + g + ', ' + b + ')';
}

const body = document.querySelector("body")
body.addEventListener("mousedown", (e) => {
   const windowWidth = window.innerWidth
    const windowHeight = document.body.scrollHeight
    const randomX = Math.floor(Math.random() * windowWidth)
        const randomY = Math.floor(Math.random()*windowHeight)
    placeImageAtCoordinates(randomX, randomY)
})

const flowerArray = [
i1, i2, i3, i4, i5, i6, i7, i8, i9, i10
]

function placeImageAtCoordinates(Xcoor, Ycoor) {
    const img = document.createElement('img')
    body.appendChild(img)
    img.style.position = "absolute";
    const randomSize = Math.floor(Math.random() * 350) + 'px'
    img.style.width = randomSize
    img.style.height = randomSize
    let randomValueForImg = Math.floor(Math.random() * 10)

    img.setAttribute('src', flowerArray[randomValueForImg])

    let randomRotateSpeed = 20 + Math.floor(Math.random() * 100)
    let rotationOptionsArr = ['rotation2', 'rotation']
    let value1 = Math.floor(Math.random() * 2)
    let rotationDirection = rotationOptionsArr[value1]
        img.style.animation = `${rotationOptionsArr[value1]} ${randomRotateSpeed}s infinite linear`

    img.addEventListener('click', () => {
        img.remove()
    })

img.style.left = Xcoor-200+'px';
img.style.top = Ycoor-200+'px';
}

setInterval(() => {
    let value = Math.floor(Math.random() * 891)
    const letter = document.getElementById(value)
    if (letter){
    letter.style.color = getRandomRgb()}
}, 800);
