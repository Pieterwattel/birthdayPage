import './styles.css';
import i1 from './1.png';
import i2 from './2.png';
import i3 from './3.png';
import i4 from './4.png';
import i5 from './5.png';
import i6 from './sunBG.png';
import i7 from './7.png';
import i8 from './8.png';
import i9 from './9.png';
import i10 from './10.png';
import checkImg from './check.png';
import copyImg from './copy.png';
import mapImg from './map.png';

import { controller } from './controller';
import { weather } from './weather';

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

let totalDivs = 0;

function placeCoolLetters(string, parentElement) {
  let j = 0;
  let k = 1;
  for (let i = string.length; i > 0; i--) {
    const symbol = string.slice(j, k);
    const span = document.createElement('span');
    span.textContent = symbol;
    parentElement.appendChild(span);
    j++;
    k++;
  }
}
let name = 'friend';

/*
(function () {
    name = prompt('Enter your name please:');
    if (!name) {
        name = 'Ominous Stranger'
    }
})();
*/

const titleText = [
  `Dear ${name},`,
  '\n',
  'I would love to see you when celebrating my birthday :)',
];
const titleDiv = document.getElementById('titleDiv');

function placeCoolLettersOrNextLine(string, parentElement) {
  if (string == '\n') {
    const div = document.createElement('div');
    parentElement.appendChild(div);
  }
  let j = 0;
  let k = 1;
  for (let i = string.length; i > 0; i--) {
    const symbol = string.slice(j, k);
    const span = document.createElement('span');
    span.textContent = symbol;
    let randomColor = getRandomRgb();
    span.setAttribute('id', totalDivs);
    span.setAttribute('class', 'fadeOut');
    parentElement.appendChild(span);

    j++;
    k++;
    totalDivs++;
  }
}

let textArray = [
  '\n',
  'when: 8th of july from 14:00',
  '\n',
  'where:',
  '\n',
  '\n',
  'On the 8th of july I would like to celebrate my birthday! Come when you want, leave when you want. stay between 1 minute and 1 day. Also if I sent you an invitation, there is no expectation that you will be there, it just means that I would really enjoy it',
  '\n',
  'Do not feel pressure to bring any gifts, but feel free to bring something that is relaxing for you. Can be a book, a pillow, if you want to bring an instrument, please go ahead! (the stranger the instrument the better)',
  '\n',
  '\n',
  'Also I would like to make a "feestslinger" (garland?) so it might be fun to bring a piece of paper/flag I can add to the string that I will hang there. There will be a place for making music, some drinks and food. We will be near water, so there might be some swimming.',
  '\n',
  '\n',
  'In short, please come celebrate the good life with me on the 8th of july,',
  '\n',
  'bring along whoever you would like :)',
];

let i = 0;

titleText.forEach((element) => {
  i++;
  let dynamicID = `line${i}`;
  placeCoolLettersOrNextLine(element, titleDiv);
});

textArray.forEach((element) => {
  i++;
  let dynamicID = `line${i}`;
  const parentElement = document.getElementById(dynamicID);
  placeCoolLettersOrNextLine(element, parentElement);
});

function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = (num >> 8) & 255;
  var b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

const body = document.querySelector('body');

const flowerArray = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10];

function placeImageAtCoordinates(Xcoor, Ycoor) {
  const img = document.createElement('img');
  body.appendChild(img);
  img.style.position = 'absolute';
  const randomSize = Math.floor(Math.random() * 400) + 'px';
  img.style.width = randomSize;
  img.style.height = randomSize;
  let randomValueForImg = Math.floor(Math.random() * 10);

  img.setAttribute('src', flowerArray[randomValueForImg]);

  let randomRotateSpeed = 20 + Math.floor(Math.random() * 100);
  let rotationOptionsArr = ['rotation2', 'rotation'];
  let value1 = Math.floor(Math.random() * 2);
  let rotationDirection = rotationOptionsArr[value1];
  img.style.animation = `${rotationOptionsArr[value1]} ${randomRotateSpeed}s infinite linear`;

  img.addEventListener('click', () => {
    img.remove();

    const windowWidth = window.innerWidth;
    const windowHeight = document.body.scrollHeight;
    const randomX = Math.floor(Math.random() * windowWidth);
    const randomY = Math.floor(Math.random() * windowHeight);
    placeImageAtCoordinates(randomX, randomY);

    const randomX1 = Math.floor(Math.random() * windowWidth);
    const randomY1 = Math.floor(Math.random() * windowHeight);
    placeImageAtCoordinates(randomX1, randomY1);
  });

  img.style.left = Xcoor - 200 + 'px';
  img.style.top = Ycoor - 200 + 'px';
}

let speedvariable = 350;
setInterval(() => {
  let value = Math.floor(Math.random() * 1000);
  const letter = document.getElementById(value);
  if (letter) {
    letter.style.color = getRandomRgb();
  }
}, 1000);

const windowWidth = window.innerWidth;
const windowHeight = document.body.scrollHeight;
const randomX = Math.floor(Math.random() * windowWidth);
const randomY = Math.floor(Math.random() * windowHeight);
placeImageAtCoordinates(randomX, randomY);

const randomX1 = Math.floor(Math.random() * windowWidth);
const randomY1 = Math.floor(Math.random() * windowHeight);
placeImageAtCoordinates(randomX1, randomY1);

const randomX2 = Math.floor(Math.random() * windowWidth);
const randomY2 = Math.floor(Math.random() * windowHeight);
placeImageAtCoordinates(randomX2, randomY2);

let w59Explorer = document.getElementById('map');

let exitBtn = document.getElementById('exitBtn');

exitBtn.addEventListener('click', () => w59Explorer.remove());

let header = document.getElementById('header');

window.mobileCheck = function () {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a,
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4),
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

if (window.mobileCheck()) {
  header.addEventListener('touchstart', () => {
    document.addEventListener('mousemove', moveCalculatorFrame);

    document.addEventListener('touchend', () => {
      document.removeEventListener('mousemove', moveCalculatorFrame);
    });
  });

  w59Explorer.style.width = '90vw';
} else {
  header.addEventListener('mousedown', () => {
    document.addEventListener('mousemove', moveCalculatorFrame);

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', moveCalculatorFrame);
    });
  });
  w59Explorer.style.width = '30vw';
}

let moveCalculatorFrame = (e) => {
  let newLeft = leftLocationCalFr() + e.movementX;
  let newTop = topLocationCalFr() + e.movementY;

  newCoordinatesCalFr(newLeft, newTop);
};

function leftLocationCalFr() {
  return w59Explorer.getBoundingClientRect().left + window.scrollX;
}

function topLocationCalFr() {
  return w59Explorer.getBoundingClientRect().top + window.scrollY;
}

function newCoordinatesCalFr(left, top) {
  w59Explorer.style.left = left + 'px';
  w59Explorer.style.top = top + 'px';
  setTimeout(() => {
    if (left < 0) {
      left = 0;
      newCoordinatesCalFr(left, top);
    }
    if (top < 0) {
      top = 0;
      newCoordinatesCalFr(left, top);
    }
  }, '500');
}

const locationBtn = document.getElementById('locationBtn');

locationBtn.addEventListener('click', () => {
  body.appendChild(w59Explorer);

  const winWidth = window.innerWidth;
  const winHeight = window.innerHeight;

  const boxWidth = w59Explorer.offsetWidth;
  const boxHeight = w59Explorer.offsetHeight;

  w59Explorer.style.left = `${(winWidth - boxWidth) / 2}px`;
  w59Explorer.style.top = `100vh`;
});

const copyLocation = document.getElementById('copyLocation');

copyLocation.addEventListener('click', () => {
  let text = 'https://maps.app.goo.gl/xcwCAYeEixGhBZHo7';
  copyTextToClipboard(text);
  copyLocation.innerHTML = 'saved to clipboard!';
  const img = document.createElement('img');
  img.setAttribute('src', checkImg);

  copyLocation.appendChild(img);
  setTimeout(() => {
    copyLocation.innerHTML = 'copy location';
    const img = document.createElement('img');

    img.setAttribute('src', copyImg);
    copyLocation.appendChild(img);
  }, 2000);
});

function copyTextToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => console.log('Text copied'))
    .catch((err) => console.error('Failed to copy:', err));
}

const checkWeather = document.getElementById('checkWeather');
const w95Content = document.getElementById('w95Content');

let autoRun = (function () {
  w59Explorer.remove();
})();

let weatherData;

controller
  .returnWeatherData()
  .then((resolve) => ((weatherData = resolve), console.log(weatherData)));

checkWeather.addEventListener('click', () => {
  checkWeatherFc();
});

function checkWeatherFc() {
  w95Content.innerHTML = `
    <div>
        weather ${weatherData.date}:<br>
        - ${weatherData.location} -<br><br>

        rain: ${weatherData.precip}<br>
        temperature: ${weatherData.temp}<br>
        wind: ${weatherData.wind}
    </div>
    `;
  checkWeather.textContent = 'view map';
  checkWeather.addEventListener('click', () => {
    viewMap();
  });
}

function viewMap() {
  let img = document.createElement('img');
  img.setAttribute('src', mapImg);
  w95Content.innerHTML = ``;
  w95Content.appendChild(img);
  checkWeather.textContent = 'check weather';
  checkWeather.addEventListener('click', () => {
    checkWeatherFc();
  });
}

alert(
  'ATTENTION: \n It is going to rain a bit tomorrow. \nmy solution is this: please bring a tent if you have one, the bigger the better! \n ALSO: if you have a tarp (zeil) that I can borrow please let me know! :)',
);
