import { getAPIdata } from './js/api.js';
import {  renderLayout } from './js/render.js'
// import {  forma } from './js/forma.js'


 getAPIdata();




const form = document.querySelector('.js_form');
// console.log(form);

form.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    console.log(evt.currentTarget.elements.search.value);
})

