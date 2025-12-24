import closeIcon        from '../img/close.png';
import noImg            from '../img/no_img02.png';

export function modal_markup({ 
                                        poster_path,
                                        title,
                                        popularity,
                                        vote_average,
                                        vote_count,
                                        overview,
                                        genre_ids
 }) {

 let imgAnotherPath = `<img class="img_modal" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">`  
                        if(!poster_path){
                        imgAnotherPath = `<img src=${noImg} alt="No image">`;
                        }  

 return `<div class="backdrop">
                <div class = "modal">
                        <div class="cross">
                        
                                
                                        <img src=${closeIcon} alt="close">
                                        
                        
                        </div>

                                ${imgAnotherPath}
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
                                                ${popularity}
                                        </td>
                                       
                                </tr>

                                <tr>
                                        <td class="table_cell">
                                                <span>Original title</span>
                                        </td>

                                        <td class="table_two">
                                                ${title}
                                        </td>

                                </tr>

                                <tr>
                                        <td class="table_cell">
                                                <span>Genre</span>
                                        </td>

                                        <td class="table_two">
                                                ${genre_ids[0], genre_ids[1]}
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
        ${overview||'Unfortunately, this film does not have a description yet.'}
        </td>
                                </tr>
                      
                       <tr>
                                        <td colspan = "2" class="two_buttons">

                <button type="button" class="arange_button">ADD TO WATCHED</button>
                <button type="button" class="white_button">ADD TO QUEUE</button>
                
                                        </td>
                                </tr>  
                </table>
                
                     
                </div>
        </div>   
                `};

const fff = document.querySelector('.arange_button')
console.log(fff);
