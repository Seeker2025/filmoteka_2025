console.log('queue');

import {    footerScaleJS       }      from './js/footer';
import {    renderLayout        }      from './js/render';
import {    modalMarkup,
            toForButtonCross    }      from './js/modal_markup';
import {    toForFind           }      from './js/toForFind';
import {    toFun               }      from './js/toFun';
import {    toSwitchToDarkUI    }      from './js/switch';
import {    toSwitchUIforLiCard }      from './js/switch.js';
import {    toChangeTxtOnBtn    }      from './js/toChangeText.js';

            const pageQueue = document.getElementById('queue');
           
            const containerHeadLib = document.querySelector('.container_head_lib');

            if(pageQueue){
            const btnQueued = document.querySelector('a.button_queue_js');
            btnQueued.classList.add('other_color');
            }


const key = 'queued';
const ulQueue = document.querySelector('ul.ul_queue');
const forModalQue = document.querySelector('.for_modal_queue');

let watchedArr = JSON.parse(localStorage.getItem('watched')) ?? [];
const kitQueued = JSON.parse(localStorage.getItem('queued')) ?? [];

renderLayout(kitQueued, ulQueue);

 ulQueue.addEventListener('click', (evt)=>{
               evt.preventDefault();
            if(evt.target.closest('.card_js')){
               
                const oneObj = toForFind(evt.target, key);
                if(!oneObj) return;
                modalMarkup(oneObj, forModalQue);
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

                                                toFun(
                                                    watchedArr, 
                                                    oneObj,
                                                    'watched'
                                                    );

                                                evt.stopPropagation();

                        toChangeTxtOnBtn(
                        btnAddToWatch,
                        oneObj,
                        'watched',
                        'REMOVE FROM WATCHED',
                        'ADD TO WATCHED'
                                        );                            
                                                        });
                                        
                btnAddToQueue.addEventListener('click', (evt)=>{
                

                                                toFun(
                                                    kitQueued,
                                                    oneObj,
                                                    'queued'
                                                    );


                        toChangeTxtOnBtn(
                        btnAddToQueue,
                        oneObj,
                        'queued',
                        'REMOVE FROM QUEUE',
                        'ADD TO QUEUE'
                                        ); 
                                         
                const kit = JSON.parse(localStorage.getItem('queued')) ?? [];
                renderLayout(kit, ulQueue);    
                                                       
                                                evt.stopPropagation();
                                                        });
                                                
                                
                                           
                        toForButtonCross(forModalQue, btnAddToWatch, btnAddToQueue);
                               
                
                            }
                        });

    const switchInpLib = document.querySelector('input.switch');
//  console.log(switchInpLib);     

////// UI for queue page    
    const ui = JSON.parse(localStorage.getItem('ui'));
    if(ui==='dark'){ 
        switchInpLib.checked = true;
        toSwitchToDarkUI(pageQueue, containerHeadLib, null);
        const sense = switchInpLib.checked;
        renderLayout(kitQueued, ulQueue);
        const cards = document.querySelectorAll('li.card_js');
        toSwitchUIforLiCard(cards, true);
     
        }                        

////// switching UI for queue page

 switchInpLib.addEventListener('change', (evt)=>{
    // console.log(evt.target.checked);
       if(evt.target.checked) localStorage.setItem('ui', JSON.stringify('dark'));
       else localStorage.setItem('ui', JSON.stringify('light')); 
       renderLayout(kitQueued, ulQueue);
       toSwitchToDarkUI(pageQueue, containerHeadLib, null);
       const cards = document.querySelectorAll('li.card_js');
////// For cards in 'ul'       
       toSwitchUIforLiCard(cards, evt.target.checked);
       })                                