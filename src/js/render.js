const galleryRef = document.querySelector('.gallery');
console.log(galleryRef);

export function renderLayout(arr){
    const ren = arr.map(({poster_path}) =>{
    return `
        <li class="box">
            <h2></h2>
           <img src="https://image.tmdb.org/t/p/w500${poster_path}" width="200" alt="">
        </li>
    `
}).join('');

 galleryRef.insertAdjacentHTML('beforeend', ren);

}

{/* <img src=${itm.file_path} alt=""></img> */}
