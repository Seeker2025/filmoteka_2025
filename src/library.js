console.log('library');

////// Class
//  import { ToRender } from './js/class';
// import { ToRender } from './js/class';
//  console.log(ToRender);
import { footerScaleJS }    from './js/footer';
import { renderLayout } from './js/render';
console.log(renderLayout);
const render02 = renderLayout;
console.log(render02);
import  noImg  from './img/no_img02.png';

const ulLibrary = document.querySelector('ul.ul_library');
const forModalLib = document.querySelector('.for_modal_lib');
console.log(forModalLib);
console.log(ulLibrary);



const kitWatched = JSON.parse(localStorage.getItem("watched"));

console.log(kitWatched);
// const toRender = new ToRender({
//     arr: kitWatched,
//     noImg: noImg,
//  });

// toRender.renderLayout();
  //  render02(kitWatched, ulLibrary, forModalLib);
  

function renderLayoutLib(arr, ulContainer, modalBox){
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
    toShowModalWin(selectIDbyClick, modalBox);
 }
 }


renderLayoutLib(kitWatched, ulLibrary, forModalLib);

// const arrInLib = kitWatched.map(({id, poster_path, title, release_date})=>{
//     let imgMainPath = `<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">`
//      return `
//                                                          <li class="card" id=${id}>
//                                                              ${imgMainPath}
//      <div class="card_box">
//          <h1 class="card_title">${title}</h1>
//          <h2 class="card_jenre">Drama, Comedy | ${Number.parseInt(release_date)||'No date'}</h2>
//      </div>
//                                                          </li>                                              
//                                                          `
    
// });

// ulLibrary.innerHTML = arrInLib;
// ulLibrary.insertAdjacentElement('beforeend', arrInLib);