
import closeIcon        from '../img/close.png';
import noImg            from '../img/no_img02.png';
import { genres } from './genres';
import {apiForTrl,
         toIframe
        
                        } from './apiForTrl';
const BASE_URL = 'https://api.themoviedb.org/3/';

// console.log(toSum(1, 2));




let dark = null;
export function modalMarkup(oneObj, forModal) {
        
// console.log(oneObj);



        if(JSON.parse(localStorage.getItem('ui'))==='dark'){
                        dark = 'dark';
        }else{
                        dark = 'light';
        }
        if(!oneObj) return;
                
        const{ 
                        poster_path,
                        title,
                        popularity,
                        vote_average,
                        vote_count,
                        overview,
                        genre_ids,
                        id

              } = oneObj;
         console.log(id);
              
 let imgAnotherPath = `<img class="img_modal" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">`  
                        if(!poster_path){
                        imgAnotherPath = `<img src=${noImg} alt="No image">`;
                        }  

 const raw = `<div class="backdrop">
                <div class = "modal ${dark}">
                        <div class="cross">
                        
                                
                                <img src=${closeIcon} alt="close">
                                        
                        
                        </div>

<div class="picture">
                                ${
                

                                apiForTrl(BASE_URL, id)
.then(({results})=>{
       console.log(results);
       const picture = document.querySelector('.picture');
               
        if(!results?.length){
           
        
        picture.innerHTML=  imgAnotherPath;
        }else{
         let key = results[0].key;
         console.log(key);
         
         toIframe(picture, key);
        }
         
})                
                      
                                }
    </div>                       
                            
                <table>
                            <caption>${title}</caption>
                                <tr>
                                        <td class="table_cell">
                                                <span>Vote / Votes</span>
                                        </td>
                                        
                                      
                                        <td class="table_two">
        <span class="orange">${vote_average}</span> / ${vote_count}
                                        </td>

                                        
                                </tr>

                                <tr>
                                        <td class="table_cell">
                                            <span>Popularity</span>
                                        </td>

                                        <td class="table_two">
                                            ${popularity||'No popularity'}
                                        </td>
                                       
                                </tr>

                                <tr>
                                        <td class="table_cell">
                                            <span>Original title</span>
                                        </td>

                                        <td class="table_two">
                                            ${title||'No title'}
                                        </td>

                                </tr>

                                <tr>
                                        <td class="table_cell">
                                            <span>Genre</span>
                                        </td>

                                        <td class="table_two">
                                            ${genres(genre_ids).join(', ')||'No genres yet'}
                                        </td>

                                </tr>

                                <tr>
                                        <td colspan = "2"></td>
                                </tr>

                                <tr>
                                        <td colspan = "2">ABOUT</td>
                                </tr>

                                <tr>
        <td colspan = "2">
                        <div class="description">
        ${overview||'Unfortunately, this film does not have a description yet.'}
                        </div>
        </td>
                                </tr>
                      
                      
                                        <tr class="two_buttons">
                        <td>
                <button type="button" class="arange_button">ADD TO WATCHED</button>
                        </td>
                        <td>
                <button type="button" class="white_button">ADD TO QUEUE</button>
                        </td>
                                        </tr>
                                
                </table>
                
                     
                </div>
        </div>   
                `

        return forModal.innerHTML = raw;   

        };

        const modal020 = document.querySelector('div.modal');
       
 export function toForButtonCross(modalBox, btnWatch, btnQueue){
        
                        window.addEventListener('keyup', (evt)=>{
                                if(evt.code === 'Escape'){
                                toCloseModal(modalBox);
                                }
                        })

                        const cross = document.querySelector('div.cross');
                        const backdrop = document.querySelector('.backdrop');

                        backdrop.addEventListener('click', (evt)=>{
                                console.log(evt.target);
                                if(evt.target === backdrop){
                                        toCloseModal(modalBox);
                                }
                        });

                                cross.addEventListener('click', ()=>{
                                        toCloseModal(modalBox);
                                cross.removeEventListener('click', ()=>{});
                                window.removeEventListener('keyup', ()=>{});
                                btnWatch.removeEventListener('click', ()=>{});
                                btnQueue.removeEventListener('click', ()=>{});
                                })

                                function toCloseModal(modalBox){
                                modalBox.innerHTML ='';
}
}


 