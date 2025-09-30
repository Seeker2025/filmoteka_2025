import { getAPIdata, trending, BASE_URL } from './js/api.js';
import {  renderLayout } from './js/render.js'
// import {  forma } from './js/forma.js'



 getAPIdata( BASE_URL, trending);




const form = document.querySelector('.js_form');
// console.log(form);

form.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    const movie = evt.currentTarget.elements.search.value
    console.log(evt.currentTarget.elements.search.value);
})

