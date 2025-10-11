export function modal_markup({ 
                                        poster_path,
                                        title,
                                        popularity,
                                        vote_average,
                                        vote_count,
                                        overview,
                                        genre_ids
 }) {

 let img_another_path = `<img class="img_modal" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">`  
                                        if(!poster_path){
                                                img_another_path = '<img src="./img/no_img02.png" >';
                                                
                                        }  

 return `<div class="backdrop">
                <div class = "modal">
                        <div class="cross">
                        
                                
                                        <img src="./img/close.png" title="close">
                                        
                        
                        </div>

                                ${img_another_path}
                        <table>
                           <caption>${title}</caption>
                                <tr>
                                        <td class="vote_box table_cell">
                                                <span>Vote / Votes</span>
                                        </td>
                                      
                                        <td colspan="2">
                                                <span class="orange">${vote_average}</span> / ${vote_count}
                                        </td>
                                </tr>

                                <tr>
                                        <td class="table_cell">
                                                <span>Popularity</span>
                                        </td>

                                        <td colspan="2">
                                                ${popularity}
                                        </td>
                                       
                                </tr>

                                <tr>
                                        <td class="table_cell">
                                                <span>Original title</span>
                                        </td>

                                        <td>
                                                ${title}
                                        </td>

                                </tr>

                                <tr>
                                        <td class="table_cell">
                                                <span>Genre</span>
                                        </td>

                                        <td>
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
        <td colspan = "2">${overview||'Unfortunately, this film does not have a description yet.'}</td>
                                </tr>

                                <tr>
                                        <td colspan = "2"></td>
                                </tr>

                                <tr class="row__padding">
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
                `};