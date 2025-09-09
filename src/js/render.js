const galleryRef = document.querySelector('.gallery');


const section = document.querySelector('.section');
// console.log(galleryRef);
// console.log(modal);
// console.log(cross);

export function renderLayout(arr){
    const ren = arr.map(({poster_path}) =>{
    return `
        <li class="card">
            <h2></h2>
           <img src="https://image.tmdb.org/t/p/w500${poster_path}" width="200" alt="">
        </li>
    `
}).join('');

 galleryRef.insertAdjacentHTML('beforeend', ren);

}

// function toOpenModal(){
//     modal.classList.add('visible');
// }
// function toCloseModal(){
//      modal.classList.add('hidden');
// }

galleryRef.addEventListener('click', modalShow);
let one = null
function modalShow(evt){
    // if(one){
    //     console.log('Hi02');
    //     return;
    // }
    one = evt.target
  modalRender();
//   galleryRef.removeEventListener('click', modalShow);
}

// cross.addEventListener('click', toCloseByClick);


function modalRender(arr){
    const modalWin =  `
                                                      <div class="background">   
                                                            <div class="modal">
                                                            <h3 class="cross">X</h3>
                                                            <h2>Modal</h2>
                                                            </div>
                                                         
                                                        </div>
                                                        `
    section.insertAdjacentHTML('beforeend', modalWin);
        const cross = document.querySelector('.cross');
        const background = document.querySelector('.background');
        const modal = document.querySelector('.modal');
    cross.addEventListener('click', toCloseByClick);

}

        function toCloseByClick(){
        // modal.classList.add('hidden');
        // background.classList.add('hidden');
        // cross.removeEventListener('click', toCloseByClick);
    console.log('Hi!');
}