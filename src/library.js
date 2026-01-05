console.log('library');
import    Pagination            from  'tui-pagination'; 
import {  options,
          container
 }                              from './js/pagination.js';
import {  toChangeTxtOnBtn } from './js/toChangeText.js';

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


const KEY = 'watched';
const ulLibrary = document.querySelector('ul.ul_library');
const forModalLib = document.querySelector('.for_modal_lib');

const kitWatched = JSON.parse(localStorage.getItem('watched')) ?? [];
//------------------------------------------------------------------
function too(onePage=1){
   const kitWatched = JSON.parse(localStorage.getItem('watched')) ?? [];
   const startIndex = (onePage - 1) * 20;
   const endIndex = startIndex + 20;
   const itemsForPage = kitWatched.slice(startIndex, endIndex);
   renderLayout(itemsForPage, ulLibrary);

if (kitWatched.length > 20) {
        if (container) container.innerHTML = '';
        options.totalItems = kitWatched.length;
        options.itemsPerPage = 20;
        options.page = onePage;
        const pagination = new Pagination(container, options);
        pagination.on('afterMove', function (event) {
        onePage = event.page;
        too(onePage);
    });
    }
};
//=====================================================    

too();
 
            ulLibrary.addEventListener('click', (evt)=>{
               evt.preventDefault();
            if(evt.target.closest('.card_js')){
               
                const oneObj = toForFind(evt.target, KEY);
                if(!oneObj) return;
                
                modalMarkup(oneObj, forModalLib);

                const btnAddToWatch = document.querySelector('button.arange_button');     
                const btnAddToQueue = document.querySelector('button.white_button'); 

                        toChangeTxtOnBtn(
                        btnAddToWatch,
                        oneObj,
                        'watched',
                        'REMOVE FROM WATCHED',
                        'ADD TO WATCHED'
                                         ); 

               


                        toChangeTxtOnBtn(
                        btnAddToQueue,
                        oneObj,
                        'queued',
                        'REMOVE FROM QUEUE',
                        'ADD TO QUEUE'
                                        );      
                            
                   
                    btnAddToWatch.addEventListener('click', (evt)=>{
                                    toWatch(oneObj);
                        toChangeTxtOnBtn(
                        btnAddToWatch,
                        oneObj,
                        'watched',
                        'REMOVE FROM WATCHED',
                        'ADD TO WATCHED'
                        );                     
                                    too();
                                             
                                                evt.stopPropagation();
                                                });




  
                    btnAddToQueue.addEventListener('click', (evt)=>{
                                    toQueue(oneObj);

                        toChangeTxtOnBtn(
                        btnAddToQueue,
                        oneObj,
                        'queued',
                        'REMOVE FROM QUEUE',
                        'ADD TO QUEUE'
                                        );                                           
                                                evt.stopPropagation();
                                                });
                                
                toForButtonCross(forModalLib, btnAddToWatch, btnAddToQueue);
               

            }
        })