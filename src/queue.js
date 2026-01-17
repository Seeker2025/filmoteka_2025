console.log('queue');

import { footerScaleJS }    from './js/footer';
import { renderLayout } from './js/render';
import { modalMarkup, toForButtonCross } from './js/modal_markup';
import { toForFind } from './js/toForFind';
import { toWatch, toQueue } from './js/toFun';
import { toSwitchToDarkUI } from './js/switch';

            const pageQueue = document.getElementById('queue');
            const containerHeadLib = document.querySelector('.container_head_lib');

            if(pageQueue){
               const btnQueued = document.querySelector('a.button_queue_js');
               btnQueued.classList.add('other_color');
            }


const key = 'queued';
const ulQueue = document.querySelector('ul.ul_queue');
const forModalQue = document.querySelector('.for_modal_queue');

const kitQueued = JSON.parse(localStorage.getItem('queued')) ?? [];

renderLayout(kitQueued, ulQueue);

 ulQueue.addEventListener('click', (evt)=>{
               evt.preventDefault();
            if(evt.target.closest('.card_js')){
               
                const oneObj = toForFind(evt.target, key);
                if(!oneObj) return;
                modalMarkup(oneObj, forModalQue);
                const btnAddToWatch = document.querySelector('button.arange_button');     
                const btnAddToQueue = document.querySelector('button.white_button');

                btnAddToWatch.addEventListener('click', (evt)=>{
                                                toWatch(oneObj);
                                                evt.stopPropagation();
                                                        });
                                        
                btnAddToQueue.addEventListener('click', (evt)=>{
                toQueue(oneObj);
                const kit = JSON.parse(localStorage.getItem('queued')) ?? [];
                renderLayout(kit, ulQueue);    
                                                       
                                                evt.stopPropagation();
                                                        });
                                                
                                
                                           
                        toForButtonCross(forModalQue, btnAddToWatch, btnAddToQueue);
                               
                
                            }
                        });

////// switching UI for queue page
const switchInpLib = document.querySelector('input.switch');
       console.log(switchInpLib); 
 switchInpLib.addEventListener('change', (evt)=>{
       console.log(evt.target.checked);
       toSwitchToDarkUI(pageQueue, containerHeadLib, null);
       })                                