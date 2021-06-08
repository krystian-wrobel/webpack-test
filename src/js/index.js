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

document.cookie = "name = krystian"

document.cookie = "test = ciasteczek"

console.log(localStorage.getItem('human'));


localStorage.setItem('human','krystian')