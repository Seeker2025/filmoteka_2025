import { 
        toShowModalWin,
        toCloseModal
 } from './madal.js';

const galleryRef = document.querySelector('.gallery');
const section = document.querySelector('.section');
const body = document.querySelector('body');

// console.log(galleryRef);
// console.log(modal);
// console.log(cross);

export function renderLayout(arr){
    const ren = arr.map(({poster_path, id}, idx) =>{
    return `
        <li class="card" id=${id}>
            <h2>${id}</h2>
           <img src="https://image.tmdb.org/t/p/w500${poster_path}" width="" alt="">
           
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

  

