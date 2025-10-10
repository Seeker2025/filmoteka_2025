import { modal_markup } from './modal_markup.js'
// export modal_markup;
// console.log(modal_markup);

const forModal = document.querySelector('div.for_modal');

export function toShowModalWin(id){
    const chaos = localStorage.getItem('mess');
    const mess = JSON.parse(chaos);
//     console.log(mess);
//     console.log(id);

    const oneObj = mess.find((itm) => itm.id === id);
    console.log(oneObj);
    
    // console.log(mess.find(itm => itm.id === id));
    // mess.find(itm => itm.id === id);
    // return oneObj;
//      const{ poster_path, title, popularity, vote_average, vote_count, overview, genre_ids } = oneObj; 
//      const box = `
//         <div class="backdrop">
//                 <div class = "modal">
//                         <div class="cross">
                        
//                 <svg>
//                         <use href="./img/close.svg"></use>
//                 </svg>        
                        
//                         </div>

//                         <img src="https://image.tmdb.org/t/p/w500${poster_path}" width="" alt="">
                        
//                         <table>
//                                <caption>${title}</caption>
//                                 <tr>
//                                         <td class="vote_box table_cell">
//                                         <span>Vote / Votes</span>
//                                         </td>
                                      
//                                         <td colspan="2">
//                                         <span class="orange">${vote_average}</span> / ${vote_count}
//                                         </td>

                                       

                                        
//                                 </tr>

//                                 <tr>
//                                         <td class="table_cell">
//                                         <span>Popularity</span>
//                                         </td>

//                                         <td colspan="2">
//                                         ${popularity}
//                                         </td>
                                       
//                                 </tr>

//                                 <tr>
//                                         <td class="table_cell">
//                                         <span>Original title</span>
//                                         </td>

//                                         <td>
//                                         ${title}
//                                         </td>

//                                 </tr>

//                                     <tr>
//                                         <td class="table_cell">
//                                         <span>Genre</span>
//                                         </td>

//                                         <td>
//                                         ${genre_ids[0], genre_ids[1]}
//                                         </td>

//                                 </tr>

//                                 <tr>
//                                         <td colspan = "2"></td>
//                                 </tr>


//                                 <tr>
//                                         <td colspan = "2">ABOUT</td>
//                                 </tr>

//                                 <tr>
//                                         <td colspan = "2">${overview}</td>
//                                 </tr>

//                                 <tr>
//                                         <td colspan = "2"></td>
//                                 </tr>

//                                  <tr class="row__padding">
//                                         <td>
//                                         <button type="button" class="arange_button">ADD TO WATCHED</button>
//                                         </td>
//                                         <td>
//                                         <button type="button" class="white_button">ADD TO QUEUE</button>
//                                         </td>
//                                 </tr>
                        
//                         </table>
                     
//                 </div>
//         </div>   
//                 `
        forModal.innerHTML = modal_markup(oneObj);

        const orangeBtnAddToWatch = document.querySelector('button.arange_button');
        const whiteBtnAddToQueue = document.querySelector('button.white_button');
        // console.log(orangeBtnAddToWatch);
        orangeBtnAddToWatch.addEventListener('click', (evt)=>{
                console.log('orange!');
                evt.stopPropagation();
        })

        whiteBtnAddToQueue.addEventListener('click', (evt)=>{
                console.log('white');
                evt.stopPropagation();
        })


        const cross = document.querySelector('div.cross');
        // const modalRef = document.querySelector('div.modal');
        // console.log(cross);
        // console.log(modalRef);
        // console.log(modalRef);
        // modalRef.addEventListener('click', (evt)=>{
                //  console.log(evt.target);
                // }
                // window.addEventListener('click', (evt)=>{
                // if(evt.target === modalRef){
                //         console.log('Whoa!');
                //         toCloseModal();
                // }
        // })
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
// const oneObj = mess.find(itm => itm.id === id);
//     console.log(oneObj);
// export const oneObj =  toGetOneId(1078605)

// export function toShowModalWin(oneObj){
//     const box = `
//         <div class = "modal">
//             <h1>Hi!</h1>
//             <img src="https://image.tmdb.org/t/p/w500${oneObj.poster_path}" width="200" alt="">
//         </div>
//     `
//     forModal.insertAdjacentHTML('beforeend', box);
// }

export function toCloseModal(){
        forModal.innerHTML ='';
}

