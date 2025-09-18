import { getAPIdata } from './js/api.js';
import {  renderLayout } from './js/render.js'
 import {  toCloseModal } from './js/madal.js'

 getAPIdata();


// console.log(toGetOneId(1061474));

window.addEventListener('keydown', closeByEsc);

function closeByEsc(evt){
    if(evt.code === 'Escape'){
        toCloseModal();
         
    }
   
}

