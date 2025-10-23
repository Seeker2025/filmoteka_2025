import { modal_markup } from './modal_markup.js';
import { ulLibrary, forModalLib } from '../library.js';
import { renderLayout} from './render';

const forModal = document.querySelector('div.for_modal');
let watchedArr = [];

export function toShowModalWin(id, modalBox = forModal){
    const chaos = localStorage.getItem('mess');
    const mess = JSON.parse(chaos);


    const oneObj = mess.find((itm) => itm.id === id);
    console.log(oneObj);
    console.log(oneObj.id);
    

        modalBox.innerHTML = modal_markup(oneObj);

        const orangeBtnAddToWatch = document.querySelector('button.arange_button');
        const whiteBtnAddToQueue = document.querySelector('button.white_button');
        // console.log(orangeBtnAddToWatch);
        orangeBtnAddToWatch.addEventListener('click', (evt)=>{
                console.log('orange!');
                //  watchedArr.some(itm => itm.id === oneObj.id)
               
                if(watchedArr.some(itm => itm.id === oneObj.id)){
                   watchedArr = watchedArr.filter(itm=>itm.id!==oneObj.id);
                        // console.log(arr01);
                //    localStorage.setItem("watched", JSON.stringify(watchedArr));
                //    let kitWatched = JSON.parse(localStorage.getItem("watched"));
                //    renderLayout(kitWatched, ulLibrary, forModalLib);     
                }else{
                   watchedArr.push(oneObj);
                   localStorage.setItem("watched", JSON.stringify(watchedArr));
                   let kitWatched = JSON.parse(localStorage.getItem("watched"));
                //    renderLayout(kitWatched, ulLibrary, forModalLib);  
                     }
                
               
                evt.stopPropagation();
        })

        whiteBtnAddToQueue.addEventListener('click', (evt)=>{
                // console.log('white');
                evt.stopPropagation();
        })


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
                                                orangeBtnAddToWatch.removeEventListener('click', ()=>{});
                                                whiteBtnAddToQueue.removeEventListener('click', ()=>{});
                                        })
}


export function toCloseModal(modalBox){
        modalBox.innerHTML ='';
}

