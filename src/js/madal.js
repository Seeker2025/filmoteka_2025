import { modal_markup } from './modal_markup.js';
//import { ulLibrary, forModalLib } from '../library.js';
import { toWatch, toQueue } from './toFun';
// import { renderLayout} from './render';


const pageIndex = document.getElementById('index');
const pageLibrary = document.getElementById('library');
const pageQueue = document.getElementById('queue');
console.log(pageIndex);
console.log(pageLibrary);
console.log(pageQueue);
const forModal = document.querySelector('div.for_modal');
const forModalLib = document.querySelector('div.for_modal_lib');
const forModalQue = document.querySelector('div.for_modal_queue');



export function toShowModalWin(id, modalBox){
        // let queuedArr = JSON.parse(localStorage.getItem('queued')) ?? [];
        if(pageIndex){
                const arrAll = JSON.parse(localStorage.getItem('mess'));
                const oneObj = arrAll.find(itm => itm.id === id);
                forModal.innerHTML = modal_markup(oneObj);
             
        const btnAddToWatch = document.querySelector('button.arange_button');     
        const btnAddToQueue = document.querySelector('button.white_button');            
        console.log(btnAddToQueue);
        console.log(btnAddToWatch);  
        
                        btnAddToWatch.addEventListener('click', (evt)=>{
                        toWatch(oneObj);
                        evt.stopPropagation();
                        });

                        btnAddToQueue.addEventListener('click', (evt)=>{
                        toQueue(oneObj);
                        evt.stopPropagation();
                        })
        

          interrupt(btnAddToWatch,  btnAddToQueue);
               
      
               
        }
        if(pageLibrary){
                const arrAll = JSON.parse(localStorage.getItem('watched'));
                const oneObj = arrAll.find(itm => itm.id === id);
                forModalLib.innerHTML = modal_markup(oneObj);
        }
        if(pageQueue){
                const arrAll = JSON.parse(localStorage.getItem('queued'));
                const oneObj = arrAll.find(itm => itm.id === id);
                forModalQue.innerHTML = modal_markup(oneObj);
        }
//     const arrAll = JSON.parse(localStorage.getItem('watched'));
//         console.log(arrAll);
//         console.log(id);
        
//     const oneObj = arrAll.find(itm => itm.id === id);
     
//     console.log(oneObj);
//     console.log(oneObj.id);
    

        // modalBox.innerHTML = modal_markup(oneObj);

        
      
         

        // btnAddToQueue.addEventListener('click', toQueueClick)
        // function toQueueClick(evt, oneObj){
        //         toQueue(oneObj);
        //         evt.stopPropagation();
        // }
function  interrupt(btnAddToWatch,  btnAddToQueue){

                        const cross = document.querySelector('div.cross');
                        const backdrop = document.querySelector('.backdrop');

                        backdrop.addEventListener('click', (evt)=>{
                                console.log(evt.target);
                                if(evt.target === backdrop){
                                        console.log('whoa!');
                                        toCloseModal(modalBox);
                                }
                        });

                                cross.addEventListener('click', ()=>{
                                        toCloseModal(modalBox);
                                cross.removeEventListener('click', ()=>{});
                                window.removeEventListener('keydown', ()=>{});
                                btnAddToWatch.removeEventListener('click', ()=>{});
                                btnAddToQueue.removeEventListener('click', ()=>{});
                                })
}
} 

export function toCloseModal(modalBox){
        modalBox.innerHTML ='';
}

