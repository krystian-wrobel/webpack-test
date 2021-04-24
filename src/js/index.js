import '../scss/main.scss';

import moment from 'moment';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')
const button = document.querySelector('.action--js');

console.log(button)


button.addEventListener('click', ()=> {
  const heading = document.querySelector(".main__heading--js");
  heading.innerHTML = `Zerżnąć cię?`
});

const menu = document.querySelector('.menu--js');





const startOfDay = moment().startOf('day').fromNow();

const timePlaceholder = document.querySelector('.time--js');

timePlaceholder.innerHTML = startOfDay;