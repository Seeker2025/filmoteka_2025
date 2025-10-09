const forModal = document.querySelector('div.for_modal');

export function toShowModalWin(id){
    const chaos = localStorage.getItem('mess');
    const mess = JSON.parse(chaos);
//     console.log(mess);
//     console.log(id);

    const oneObj = mess.find((itm) => itm.id === id);
//     console.log(oneObj);
    
    // console.log(mess.find(itm => itm.id === id));
    // mess.find(itm => itm.id === id);
    // return oneObj;
     const{ poster_path, title, popularity, vote_average, vote_count, overview, genre_ids } = oneObj; 
     const box = `
        <div class="backdrop">
                <div class = "modal">
                        <div class="cross">
                        
                <svg>
                        <use href="./img/close.svg"></use>
                </svg>        
                        
                        </div>

                        <img src="https://image.tmdb.org/t/p/w500${poster_path}" width="" alt="">
                        
                        <table>
                               <caption>${title}</caption>
                                <tr>
                                        <td>
                                        <span>Vote / Votes</span>
                                        </td>
                                      
                                        <td colspan="2">
                                        ${vote_average} / ${vote_count}
                                        </td>

                                        
                                </tr>

                                <tr>
                                        <td>
                                        <span>Popularity</span>
                                        </td>

                                        <td>
                                        ${popularity}
                                        </td>
                                </tr>

                                <tr>
                                        <td>
                                        <span>Original title</span>
                                        </td>

                                        <td>
                                        ${title}
                                        </td>

                                </tr>

                                    <tr>
                                        <td>
                                        <span>Genre</span>
                                        </td>

                                        <td>
                                        ${genre_ids[0], genre_ids[1]}
                                        </td>

                                </tr>


                                <tr>
                                        <td colspan = "2">ABAUT</td>
                                </tr>

                                <tr>
                                        <td colspan = "2">${overview}</td>
                                </tr>
                        
                        </table>
                     
                </div>
        </div>   
                `
        forModal.innerHTML = box;

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

