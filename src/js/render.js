import { 
        toShowModalWin,
        toCloseModal
 }                              from './madal.js';

const galleryRef = document.querySelector('.gallery');
const section = document.querySelector('.section');
const body = document.querySelector('body');

export function renderLayout(arr){
    const ren = arr.map(({poster_path, id, title}, idx) =>{
    let img_main_path = `<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${poster_path}" width="" alt="${title}">`    
    if(!poster_path){
        img_main_path = `<img class="img_of_card" src="./img/no_img02.png" width="" alt="No image">`
    }
                                                    return `
                                                        <li class="card" id=${id}>
                                                            ${img_main_path}
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

  

