import { modal_markup } from './modal_markup.js';
import { ulLibrary, forModalLib } from '../library.js';
import { toWatch, toQueue } from './toFun';
// import { renderLayout} from './render';

// const forModal = document.querySelector('div.for_modal');
// let watchedArr = [];

export function toShowModalWin(id, modalBox){
    const chaos = localStorage.getItem('mess');
    const mess = JSON.parse(chaos);


    const oneObj = mess.find((itm) => itm.id === id);
    console.log(oneObj);
    console.log(oneObj.id);
    

        modalBox.innerHTML = modal_markup(oneObj);

        const btnAddToWatch = document.querySelector('button.arange_button');
        const btnAddToQueue = document.querySelector('button.white_button');
        // console.log(orangeBtnAddToWatch);
        btnAddToWatch.addEventListener('click', (evt)=>{
                // console.log('orange!');
                //  watchedArr.some(itm => itm.id === oneObj.id)
                toWatch(oneObj);
               
                //if(watchedArr.some(itm => itm.id === oneObj.id)){
                //   watchedArr = watchedArr.filter(itm=>itm.id!==oneObj.id);
                        // console.log(arr01);
                //    localStorage.setItem("watched", JSON.stringify(watchedArr));
                //    let kitWatched = JSON.parse(localStorage.getItem("watched"));
                //    renderLayout(kitWatched, ulLibrary, forModalLib);     
                // }else{
                //    watchedArr.push(oneObj);
                //    localStorage.setItem("watched", JSON.stringify(watchedArr));
                //    let kitWatched = JSON.parse(localStorage.getItem("watched"));
                //    renderLayout(kitWatched, ulLibrary, forModalLib);  
                //     }
                
               
                evt.stopPropagation();
        })

        btnAddToQueue.addEventListener('click', (evt)=>{
                toQueue(oneObj);
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
                                                btnAddToWatch.removeEventListener('click', ()=>{});
                                                btnAddToQueue.removeEventListener('click', ()=>{});
                                        })
}


export function toCloseModal(modalBox){
        modalBox.innerHTML ='';
}

