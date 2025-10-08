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

     const box = `
        <div class="backdrop">
                <div class = "modal">
                        <h2 class="cross">X</h2>

                        <img src="https://image.tmdb.org/t/p/w500${oneObj.poster_path}" width="" alt="">
                        <table>
                                <caption>${oneObj.title}</caption>
                                <tr>
                                        <td></td>
                                        <td></td>

                                </tr>

                                <tr>
                                        <td></td>
                                        <td></td>

                                </tr>

                                <tr>
                                        <td></td>
                                        <td></td>

                                </tr>

                                <tr>
                                        <td></td>
                                        <td></td>

                                </tr>
                        
                        </table>
                     
                </div>
        </div>   
                `
        forModal.innerHTML = box;

        const cross = document.querySelector('h2.cross');
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

