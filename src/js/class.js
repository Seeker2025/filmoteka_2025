import { toShowModalWin } from "./madal";
// import { galleryRef } from "./api";
// console.log(galleryRef);

const forModal = document.querySelector('.for_modal');
const ulContainer = document.querySelector('.gallery');
// const ulContainer = galleryRef;
const modalBox = forModal;
// console.log(galleryRef);
console.log(forModal);


export class ToRender{
    constructor({arr, noImg}){
        this.arr = arr;
        this.ulContainer = ulContainer;
        this.noImg = noImg;
    }
    // renderLayout(arr, ulContainer, modalBox)
    renderLayout(){
        const ren = this.arr.map(({poster_path, id, title, release_date}, idx) =>{
        let imgMainPath = `<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">`    
        if(!poster_path){
            imgMainPath = `<img class="img_of_card" src=${this.noImg} alt="No image">`
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
    
        this.ulContainer.innerHTML = ren;
    }
}

//============================================================================


        ulContainer.addEventListener('click', modalShow);
                                         function modalShow(evt){
                                         window.addEventListener('keydown', (evt)=>{
                                         if(evt.code === 'Escape'){
                                         toCloseModal(modalBox);
                                            }
                                         });
        const nestedElem = evt.target;
        const upperLi = nestedElem.closest('.card');
        console.log(upperLi);
        const selectIDbyClick = Number(upperLi.getAttribute('id'));
    
        toShowModalWin(selectIDbyClick, modalBox);
    
     }