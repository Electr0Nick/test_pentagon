'use strict';

// --------------------------------import--------------------------------
import isWebp from './modules/can-browser-support-webp.js';
isWebp();

const arrOfElements = document.querySelectorAll('.container__element');
const shuffleButton = document.getElementById('btn-shuffle');

let arrOfIndex = [];
for (let i = 0; i < arrOfElements.length; i++) {
  arrOfIndex.push(i);
}

const shuffle = arr => arr.sort(() => Math.random() - 0.5);

const shufflePentagons = () => {
  shuffle(arrOfIndex);
  for (let i = 0; i < arrOfElements.length; i++) {
    arrOfElements[i].style.order = arrOfIndex[i];
  }
}

shuffleButton.addEventListener('click', shufflePentagons);