const galleryRef = document.querySelector('.gallery');
const section = document.querySelector('.section');
const body = document.querySelector('body');
// console.log(body);


// console.log(galleryRef);
// console.log(modal);
// console.log(cross);

export function renderLayout(arr){
    const ren = arr.map(({poster_path}, idx) =>{
    return `
        <li class="card">
            <h2></h2>
           <img src="https://image.tmdb.org/t/p/w500${poster_path}" width="200" alt="">
       
 
                                                      <div class="backdrop">   
                                                            <div class="modal">
                                                                <h3 class="cross">X</h3>
                                                                <h2>Modal</h2>
                                                                <h2>${idx}</h2>
           <img src="https://image.tmdb.org/t/p/w500${poster_path}" width="100" alt="">
                                                            </div>
                                                      </div>
        </li>                                              
        `
}).join('');

 galleryRef.insertAdjacentHTML('beforeend', ren);

}

galleryRef.addEventListener('click', modalShow);
let one = null
function modalShow(evt){
    
    
    // if(one){
    //     console.log('Hi02');
    //     return;
    // }
    // one = evt.target
   const nestedElem = evt.target;
   const upperLi = nestedElem.closest('.card');
   console.log(upperLi);
   upperLi.classList.add('border');
   
   upperLi.classList.add('visible');
//    setTimeout(()=>{
//         upperLi.classList.remove('visible');
//    }, 2000)
//    upperLi.classList.remove('visible');
  const cross = upperLi.querySelector('.cross');
    console.log(cross);

    cross.addEventListener('click', toCloseMo);

    function toCloseMo(){
          console.log('cross_01');
          setTimeout(()=>{
        upperLi.classList.remove('visible');
   }, 2000) 
          cross.removeEventListener('click', toCloseMo);
    }

//   modalRender();
//   galleryRef.removeEventListener('click', modalShow);
    // console.log(evt.target.nodeName);
    // evt.target.classList.add('border');
    // body.classList.add('show-modal');
    
   
    // if(evt.code === 'Escape'){
        
    //  }
    // galleryRef.removeEventListener('click', modalShow);
 
}



    // console.log(cross);
    // cross.addEventListener('click', ()=>{
    //      console.log('cross01');
    //      upperLi.classList.remove('visible');
    // });



