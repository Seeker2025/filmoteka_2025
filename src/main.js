import { 
    getAPIdata,
    trending,
    BASE_URL,
    search
 } from './js/api';
 import { scaleJS, iconJS } from './js/footer';
//  console.log(iconJS);

getAPIdata( BASE_URL, trending);
scaleJS();

const form = document.querySelector('.js_form');

form.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    const movie = evt.currentTarget.elements.search.value
    // console.log(evt.currentTarget.elements.search.value);
    getAPIdata( BASE_URL, search, movie);
})


