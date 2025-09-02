const galleryRef = document.querySelector('.gallery');
console.log(galleryRef);

export function renderLayout(arr){
    const ren = arr.map(itm =>{
    return `
        <li class="box">
            <img src="https://api.themoviedb.org/3/collection/10/images/${itm.file_path}" alt="">
        </li>
    `
}).join('');

 galleryRef.insertAdjacentHTML('beforeend', ren);

}

{/* <img src=${itm.file_path} alt=""></img> */}