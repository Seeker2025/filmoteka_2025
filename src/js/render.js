import { 
        toShowModalWin,
        toCloseModal
 }                              from './madal.js';
// import  noImg                   from '../img/no_img02.png';



export const galleryRef = document.querySelector('.gallery');

// const a = galleryRef;
        // const section = document.querySelector('.section');
        // const body = document.querySelector('body');

export function renderLayout(arr, ulContainer, modalBox){
    const ren = arr.map(({poster_path, id, title, release_date}, idx) =>{
    let imgMainPath = `<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">`    
    if(!poster_path){
        imgMainPath = `<img class="img_of_card" src=${noImg} alt="No image">`
    }
                                                    return `
                                                        <li class="card" id=${id}>
                                                            ${imgMainPath}
    <div class="card_box">
        <h1 class="card_title">${title}</h1>
        <h2 class="card_jenre">Drama, Comedy | ${Number.parseInt(release_date)||'No date'}</h2>
    </div>
                                                        </li>                                              
                                                        `
}).join('');

    ulContainer.innerHTML = ren;

    ulContainer.addEventListener('click', modalShow);
                                    function modalShow(evt){
                                        window.addEventListener('keydown', (evt)=>{
                                        if(evt.code === 'Escape'){
                                        toCloseModal(modalBox);
                                        }
                                    });
   const nestedElem = evt.target;
   const upperLi = nestedElem.closest('.card');
//    console.log(upperLi);
   const selectIDbyClick = Number(upperLi.getAttribute('id'));
//    toShowModalWin(selectIDbyClick, modalBox);
}
}



  

