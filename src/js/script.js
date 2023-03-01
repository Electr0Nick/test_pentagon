'use strict';

// --------------------------------import--------------------------------
import isWebp from './modules/can-browser-support-webp.js';
isWebp();

const arrOfPentagons = document.querySelectorAll('.container_my .pentagon');
const shuffleButton = document.getElementById('btn-shuffle');

let arrOfIndex = [];
for (let i = 0; i < arrOfPentagons.length; i++) {
  arrOfIndex.push(i);
}

const shuffle = arr => arr.sort(() => Math.random() - 0.5);

const shufflePentagons = () => {
  shuffle(arrOfIndex);
  for (let i = 0; i < arrOfPentagons.length; i++) {
    arrOfPentagons[i].style.order = arrOfIndex[i];
  }
}

shuffleButton.addEventListener('click', shufflePentagons);


// var svgImage = document.querySelectorAll('.pentagon__image');
// Array.prototype.forEach.call(svgImage, function(el, i){
//   var xOffset = '-' + ((Math.floor(el.getBoundingClientRect().width)) - 100) / 2;
//   el.setAttribute('x', xOffset);
// });