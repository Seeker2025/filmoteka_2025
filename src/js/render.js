// import { toShowModalWin } from './madal.js';

const galleryRef = document.querySelector('.gallery');
const section = document.querySelector('.section');
const body = document.querySelector('body');
// console.log(body);


// console.log(galleryRef);
// console.log(modal);
// console.log(cross);

export function renderLayout(arr){
    const ren = arr.map(({poster_path, id}, idx) =>{
    return `
        <li class="card" id=${id}>
            <h2>${id}</h2>
           <img src="https://image.tmdb.org/t/p/w500${poster_path}" width="200" alt="">
           
        </li>                                              
        `
}).join('');

 galleryRef.insertAdjacentHTML('beforeend', ren);

}

galleryRef.addEventListener('click', modalShow);
// let one = null
function modalShow(evt){
  
    // if(one){
    //     console.log('Hi02');
    //     return;
    // }
    // one = evt.target
   const nestedElem = evt.target;
   const upperLi = nestedElem.closest('.card');
   console.log(upperLi.getAttribute('id'));
//    toShowModalWin();

//    const textWithId = upperLi.querySelector('li h2');
   
//    console.log( textWithId.textContent);
 
   

//    setTimeout(()=>{
//         upperLi.classList.remove('visible');
//    }, 2000)
//    upperLi.classList.remove('visible');
  

    
//           setTimeout(()=>{
//         upperLi.classList.remove('visible');
//    }, 2000) 
         
    

//   modalRender();
//   galleryRef.removeEventListener('click', modalShow);
    // console.log(evt.target.nodeName);
    // evt.target.classList.add('border');
    // body.classList.add('show-modal');
    
   
    // if(evt.code === 'Escape'){
        
    //  }
    // galleryRef.removeEventListener('click', modalShow);
   
}



    // console.log(cross);
    // cross.addEventListener('click', ()=>{
    //      console.log('cross01');
    //      upperLi.classList.remove('visible');
    // });


