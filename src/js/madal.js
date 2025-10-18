import { modal_markup } from './modal_markup.js'

const forModal = document.querySelector('div.for_modal');

export function toShowModalWin(id){
    const chaos = localStorage.getItem('mess');
    const mess = JSON.parse(chaos);


    const oneObj = mess.find((itm) => itm.id === id);
    console.log(oneObj);
    

        forModal.innerHTML = modal_markup(oneObj);

        const orangeBtnAddToWatch = document.querySelector('button.arange_button');
        const whiteBtnAddToQueue = document.querySelector('button.white_button');
        // console.log(orangeBtnAddToWatch);
        orangeBtnAddToWatch.addEventListener('click', (evt)=>{
                // console.log('orange!');
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
                                        toCloseModal();
                                }
                        });

                                        cross.addEventListener('click', ()=>{
                                                        toCloseModal();
                                                cross.removeEventListener('click', ()=>{});
                                                window.removeEventListener('keydown', ()=>{});
                                                orangeBtnAddToWatch.removeEventListener('click', ()=>{});
                                                whiteBtnAddToQueue.removeEventListener('click', ()=>{});
                                        })
}


export function toCloseModal(){
        forModal.innerHTML ='';
}

