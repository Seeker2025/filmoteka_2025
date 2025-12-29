console.log('library');
import    Pagination            from  'tui-pagination'; 
import {  options,
          container
 }                              from './js/pagination.js';

////// Class
//  import { ToRender } from './js/class';
// import { ToRender } from './js/class';
//  console.log(ToRender);
import { footerScaleJS }    from './js/footer';
import { renderLayout } from './js/render';
import { modalMarkup, toForButtonCross } from './js/modal_markup';
import { toForFind } from './js/toForFind';
import { toWatch, toQueue } from './js/toFun';
// console.log(renderLayout);

            const pageLibrary = document.getElementById('library');
            if(pageLibrary){
               const btnWatched = document.querySelector('a.button_watched_js');
               btnWatched.classList.add('other_color');
            }


const key = 'watched';
const ulLibrary = document.querySelector('ul.ul_library');
const forModalLib = document.querySelector('.for_modal_lib');

const kitWatched = JSON.parse(localStorage.getItem('watched')) ?? [];

function too(  onePage=1){
   renderLayout(kitWatched, ulLibrary);

   const total_pages = Math.ceil(kitWatched.length/20);
// console.log(pages);

// let onePage = 1;
let totalPages = total_pages;

if (onePage < totalPages) {
        options.totalItems = totalPages;
        options.page = onePage;
        const pagination = new Pagination(container, options);
        pagination.on('afterMove', function (event) {
        onePage = event.page;
       too(onePage);
    });
    }
};

too();
 





            ulLibrary.addEventListener('click', (evt)=>{
               evt.preventDefault();
            if(evt.target.closest('.card_js')){
               
                const oneObj = toForFind(evt.target, key);
                if(!oneObj) return;
                
                modalMarkup(oneObj, forModalLib);

                const btnAddToWatch = document.querySelector('button.arange_button');     
                const btnAddToQueue = document.querySelector('button.white_button'); 
                   
                     btnAddToWatch.addEventListener('click', (evt)=>{
                                                 toWatch(oneObj);
                        const kit = JSON.parse(localStorage.getItem('watched')) ?? [];
                        renderLayout(kit, ulLibrary);                         
                                                 evt.stopPropagation();
                                                 });
                        
                     btnAddToQueue.addEventListener('click', (evt)=>{
                                                 toQueue(oneObj);
                                                 evt.stopPropagation();
                                                 });
                                
                toForButtonCross(forModalLib, btnAddToWatch, btnAddToQueue);
               

            }
        })
console.log(kitWatched.length/20);
// const total_pages = Math.ceil(kitWatched.length/20);
// console.log(pages);

// let onePage = 1;
// let totalPages = total_pages;

// if (onePage < totalPages) {
//         options.totalItems = totalPages;
//         options.page = onePage;
//         const pagination = new Pagination(container, options);
//         pagination.on('afterMove', function (event) {
//         onePage = event.page;
//         getAPIdata(main, part,  whatLookingFor, onePage);
//     });
//     }




  






