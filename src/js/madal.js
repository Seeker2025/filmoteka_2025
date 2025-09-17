const forModal = document.querySelector('div.for_modal')

function toGetOneId(id){
    const chaos = localStorage.getItem('mess');
    const mess = JSON.parse(chaos);
    console.log(mess);
    const oneItem = mess.find(itm => itm.id === id);
    console.log(oneItem);
    return oneItem;
}

export const oneObj =  toGetOneId(1078605)



export function toShowModalWin(oneObj){
    const box = `
        <div class = "modal">
            <h1>Hi!</h1>
            <img src="https://image.tmdb.org/t/p/w500${oneObj.poster_path}" width="200" alt="">
        </div>
    `
    
    forModal.insertAdjacentHTML('beforeend', box);
}


