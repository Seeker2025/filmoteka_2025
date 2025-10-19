import{f as h}from"./assets/footer-CsiMSsro.js";import{a as v,P as I}from"./assets/vendor-D0nrVKD2.js";const w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==",g="/filmoteka_2025/assets/no_img02-C_eq9g-1.png";function _({poster_path:e,title:s,popularity:o,vote_average:a,vote_count:t,overview:i,genre_ids:l}){let c=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${e}" alt="${s}">`;return e||(c=`<img src=${g} alt="No image">`),`<div class="backdrop">
                <div class = "modal">
                        <div class="cross">
                        
                                
                                        <img src=${w} alt="close">
                                        
                        
                        </div>

                                ${c}
                <table>
                           <caption>${s}</caption>
                                <tr>
                                        <td class="table_cell">
                                                <span>Vote / Votes</span>
                                        </td>
                                        
                                      
                                        <td class="table_two">
                                                <span class="orange">${a}</span> / ${t}
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
                                                ${s}
                                        </td>

                                </tr>

                                <tr>
                                        <td class="table_cell">
                                                <span>Genre</span>
                                        </td>

                                        <td class="table_two">
                                                ${l[0],l[1]}
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
        ${i||"Unfortunately, this film does not have a description yet."}
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
                `}const p=document.querySelector("div.for_modal");function E(e){const s=localStorage.getItem("mess"),a=JSON.parse(s).find(n=>n.id===e);console.log(a),p.innerHTML=_(a);const t=document.querySelector("button.arange_button"),i=document.querySelector("button.white_button");t.addEventListener("click",n=>{n.stopPropagation()}),i.addEventListener("click",n=>{n.stopPropagation()});const l=document.querySelector("div.cross"),c=document.querySelector(".backdrop");c.addEventListener("click",n=>{console.log(n.target),n.target===c&&(console.log("whoa!"),d())}),l.addEventListener("click",()=>{d(),l.removeEventListener("click",()=>{}),window.removeEventListener("keydown",()=>{}),t.removeEventListener("click",()=>{}),i.removeEventListener("click",()=>{})})}function d(){p.innerHTML=""}const A=document.querySelector(".gallery");document.querySelector(".section");document.querySelector("body");function S(e){const s=e.map(({poster_path:o,id:a,title:t,release_date:i},l)=>{let c=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${o}" alt="${t}">`;return o||(c=`<img class="img_of_card" src=${g} alt="No image">`),`
                                                        <li class="card" id=${a}>
                                                            ${c}
    <div class="card_box">
        <h1 class="card_title">${t}</h1>
        <h2 class="card_jenre">Drama, Comedy | ${Number.parseInt(i)||"No date"}</h2>
    </div>
                                                        </li>                                              
                                                        `}).join("");A.innerHTML=s}A.addEventListener("click",L);function L(e){window.addEventListener("keydown",t=>{t.code==="Escape"&&d()});const o=e.target.closest(".card");console.log(o);const a=Number(o.getAttribute("id"));E(a)}const M=document.querySelector(".tui-pagination"),r={totalItems:20,itemsPerPage:10,visiblePages:5,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="buttons_other tui-page-btn">{{page}}</a>',currentPage:'<strong class="button_orange tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="arrow tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="arrow tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="dots tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">. . .</span></a>'}},b=document.querySelector(".box");function B(){b.style.visibility="visible"}function N(){b.style.visibility="hidden"}const T="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWY1ZmQwYjgzOGJmMmEyNTlmZjA2Y2I3NTk2ODAzNyIsIm5iZiI6MTY3MDIyNjI2NC4xMzIsInN1YiI6IjYzOGRhMTU4MTI4M2U5MDA5NzY3Njg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LbbNBAE2uu7qSjmBFjXYtTYw99nAa-BxDgIdgH9cD08",y="https://api.themoviedb.org/3/",k="trending/movie/day",$="search/movie";async function u(e,s,o,a=1){try{await v.get(`${e}${s}`,{headers:{"Content-Type":"application/json",Authorization:T},params:{query:o,include_adult:!1,page:a}}).then(t=>{localStorage.setItem("mess",JSON.stringify(t.data.results)),t.data&&N(),S(t.data.results),console.log(t.data.results);const{results:i,total_results:l,total_pages:c}=t.data;let n=c;a<n&&(r.totalItems=n,r.page=a,new I(M,r).on("afterMove",function(f){a=f.page,u(e,s,o,a)}))})}catch(t){console.log(t)}}u(y,k);h();const m=document.querySelector(".js_form");m.addEventListener("submit",e=>{e.preventDefault();const s=e.currentTarget.elements.search.value;B(),u(y,$,s),m.reset()});
//# sourceMappingURL=index.js.map
