console.log('queue');

import { footerScaleJS }    from './js/footer';
import { renderLayout } from './js/render';
import { modalMarkup, toForButtonCross } from './js/modal_markup';
import { toForFind } from './js/toForFind';
import { toWatch, toQueue } from './js/toFun';

            const pageQueue = document.getElementById('queue');
            if(pageQueue){
               const btnQueued = document.querySelector('a.button_queue_js');
               btnQueued.classList.add('other_color');
            }


const key = 'queued';
const ulQueue = document.querySelector('ul.ul_queue');
const forModalQue = document.querySelector('.for_modal_queue');
console.log(ulQueue);
console.log(forModalQue);

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
                        })