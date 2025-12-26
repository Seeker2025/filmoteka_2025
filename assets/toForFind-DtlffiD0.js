import{n as A}from"./render-DXq_GJfC.js";const p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==";function b(s,a){const{poster_path:t,title:e,popularity:o,vote_average:n,vote_count:l,overview:d,genre_ids:r}=s;let c=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${t}" alt="${e}">`;t||(c=`<img src=${A} alt="No image">`);const i=`<div class="backdrop">
                <div class = "modal">
                        <div class="cross">
                        
                                
                                        <img src=${p} alt="close">
                                        
                        
                        </div>

                                ${c}
                <table>
                           <caption>${e}</caption>
                                <tr>
                                        <td class="table_cell">
                                                <span>Vote / Votes</span>
                                        </td>
                                        
                                      
                                        <td class="table_two">
                                                <span class="orange">${n}</span> / ${l}
                                        </td>

                                        
                                        
                                </tr>

                                <tr>
                                        <td class="table_cell">
                                                <span>Popularity</span>
                                        </td>

                                        <td class="table_two">
                                                ${o}
                                        </td>
                                       
                                </tr>

                                <tr>
                                        <td class="table_cell">
                                                <span>Original title</span>
                                        </td>

                                        <td class="table_two">
                                                ${e}
                                        </td>

                                </tr>

                                <tr>
                                        <td class="table_cell">
                                                <span>Genre</span>
                                        </td>

                                        <td class="table_two">
                                                ${r[0],r[1]}
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
        ${d||"Unfortunately, this film does not have a description yet."}
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
                `;return a.innerHTML=i}function m(s){const a=document.querySelector("div.cross"),t=document.querySelector(".backdrop");t.addEventListener("click",o=>{console.log(o.target),o.target===t&&(console.log("whoa!"),e(s))}),a.addEventListener("click",()=>{e(s),a.removeEventListener("click",()=>{}),window.removeEventListener("keydown",()=>{}),btnAddToWatch.removeEventListener("click",()=>{}),btnAddToQueue.removeEventListener("click",()=>{})});function e(o){o.innerHTML=""}}function u(s){const a=s.closest(".card"),t=Number(a.getAttribute("id"));return JSON.parse(localStorage.getItem("mess")).find(n=>n.id===t)}export{m as a,b as m,u as t};
//# sourceMappingURL=toForFind-DtlffiD0.js.map
