import { 
        toShowModalWin,
        toCloseModal
 }                              from './madal.js';
import  noImg                   from '../img/no_img02.png';

const galleryRef = document.querySelector('.gallery');
const section = document.querySelector('.section');
const body = document.querySelector('body');

export function renderLayout(arr){
    const ren = arr.map(({poster_path, id, title}, idx) =>{
    let imgMainPath = `<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${poster_path}" width="" alt="${title}">`    
    if(!poster_path){
        imgMainPath = `<img class="img_of_card" src=${noImg} width="" alt="No image">`
    }
                                                    return `
                                                        <li class="card" id=${id}>
                                                            ${imgMainPath}
                                                            <h1 class="card_title">${title}</h1>
                                                        </li>                                              
                                                        `
}).join('');

 galleryRef.innerHTML = ren;
}

 galleryRef.addEventListener('click', modalShow);
                                                    function modalShow(evt){
                                                        window.addEventListener('keydown', (evt)=>{
                                                        if(evt.code === 'Escape'){
                                                        toCloseModal();
                                                        }
                                                    });
   const nestedElem = evt.target;
   const upperLi = nestedElem.closest('.card');
   console.log(upperLi);
   const selectIDbyClick = Number(upperLi.getAttribute('id'));
   toShowModalWin(selectIDbyClick);
}

  

