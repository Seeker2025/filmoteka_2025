console.log('library');

import      Pagination                  from  'tui-pagination'; 
import {    options,
            container
                                }       from './js/pagination.js';
import {    toChangeTxtOnBtn    }       from './js/toChangeText.js';
import {    toSwitchToDarkUI    }       from './js/switch';
import {    toSwitchUIforLiCard }       from './js/switch.js';
import {    footerScaleJS       }       from './js/footer';
import {    renderLayout        }       from './js/render';
import {    modalMarkup,
            toForButtonCross    }       from './js/modal_markup';
import {    toForFind           }       from './js/toForFind';
import {    toWatch,
            toQueue             }       from './js/toFun';

const containerHeadLib = document.querySelector('.container_head_lib');
const pageLibrary = document.getElementById('library');


            if(pageLibrary){
            const btnWatched = document.querySelector('a.button_watched_js');
            btnWatched.classList.add('other_color');
            }


const KEY = 'watched';
const ulLibrary = document.querySelector('ul.ul_library');
const forModalLib = document.querySelector('.for_modal_lib');

/////// Pagination for library page
let itemsForPage = null;
function too(onePage = 1){
   const kitWatched = JSON.parse(localStorage.getItem('watched')) ?? [];
   const startIndex = (onePage - 1) * 20;
   const endIndex = startIndex + 20;
   itemsForPage = kitWatched.slice(startIndex, endIndex);
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
                            const modalOpas = document.querySelector('div.modal');
                            console.log(modalOpas);
                            setTimeout(() => { modalOpas.classList.add('modal_opas')}, 10);
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
        });
    const switchInpLib = document.querySelector('input.switch');
//  console.log(switchInpLib);     

 ////// UI for library page      
    const ui = JSON.parse(localStorage.getItem('ui'));
    if(ui==='dark'){ 
        switchInpLib.checked = true;
        toSwitchToDarkUI(pageLibrary, containerHeadLib, null);
        const sense = switchInpLib.checked;
        renderLayout(itemsForPage, ulLibrary);
        const cards = document.querySelectorAll('li.card_js');
        toSwitchUIforLiCard(cards, true);
     
        }
        

////// switching UI for library page
   
       
   switchInpLib.addEventListener('change', (evt)=>{
        
    // console.log(evt.target.checked);
       if(evt.target.checked) localStorage.setItem('ui', JSON.stringify('dark'));
       else localStorage.setItem('ui', JSON.stringify('light')); 
       renderLayout(itemsForPage, ulLibrary);
       toSwitchToDarkUI(pageLibrary, containerHeadLib, null);
       const cards = document.querySelectorAll('li.card_js');
////// For cards in 'ul'
       toSwitchUIforLiCard(cards, evt.target.checked);
       })  