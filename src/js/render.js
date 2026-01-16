  import  noImg                   from '../img/no_img02.png';
  import  noth                    from '../img/noth.png';

 export const galleryRef = document.querySelector('.gallery');
 console.log(galleryRef);
 const ulGallery = document.querySelector('ul.gallery');
 console.log(ulGallery);

 export function renderLayout(arr, ulContainer){
    
    if(!arr.length){
          const ren =`
                             <li class="card card_js ">
                             <img class="img_of_card" src=${noth} alt="No image">
                             </li>    
                                     `
          ulContainer.innerHTML = ren;                          

     }else{
    
     const ren = arr.map(({poster_path, id, title, release_date}, idx) =>{
     let imgMainPath = `<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">`    
        
     
     
     if(!poster_path){
         imgMainPath = `<img class="img_of_card" src=${noImg} alt="No image">`
     }
                            return `
                            <li class="card card_js" id=${id}>
                            ${imgMainPath}
     <div class="card_box">
         <h1 class="card_title">${title}</h1>
         <h2 class="card_jenre">Drama, Comedy | ${Number.parseInt(release_date)||'No date'}</h2>
     </div>
                            </li>                                              
                                    `
 }).join('');
 ulContainer.innerHTML = ren;
}

     


 }






  

