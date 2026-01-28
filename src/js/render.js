import  noImg                   from '../img/no_img02.png';
import  noth                    from '../img/noth.png';
import { genres } from './genres';

//   console.log(genres([12]).join(', '));
  

 export const galleryRef = document.querySelector('.gallery');
 const ulGallery = document.querySelector('ul.gallery');

 export function renderLayout(arr, ulContainer){
    
    if(!arr?.length){
          const ren =`
                             <li class="card card_js card_dark card_light">
                             <img class="img_of_card" src=${noth} alt="No image">
                             </li>    
                                     `
          ulContainer.innerHTML = ren;                          

     }else{
    
     const ren = arr.map(({poster_path, id, title, release_date, genre_ids}, idx) =>{
     let imgMainPath = `<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">`    
        
     
     
     
     
     
     if(!poster_path){
         imgMainPath = `<img class="img_of_card" src=${noImg} alt="No image">`
     }
                            return `
                            <li class="card card_js card_dark card_light" id=${id}>
                            ${imgMainPath}
     <div class="card_box">
         <h1 class="card_title">${title||'No title'}</h1>
         <h2 class="card_jenre">${genres(genre_ids).join(', ')||'No genres'} | ${Number.parseInt(release_date)||'No date'}</h2>
     </div>
                            </li>                                              
                                    `
 }).join('');
 ulContainer.innerHTML = ren;

    }

}






  

