import{a as b,P as y}from"./assets/vendor-D0nrVKD2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();const h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==",m="/filmoteka_2025/assets/no_img02-C_eq9g-1.png";function v({poster_path:a,title:o,popularity:n,vote_average:s,vote_count:t,overview:e,genre_ids:r}){let i=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${a}" alt="${o}">`;return a||(i=`<img src=${m} alt="No image">`),`<div class="backdrop">
                <div class = "modal">
                        <div class="cross">
                        
                                
                                        <img src=${h} alt="close">
                                        
                        
                        </div>

                                ${i}
                <table>
                           <caption>${o}</caption>
                                <tr>
                                        <td class="table_cell">
                                                <span>Vote / Votes</span>
                                        </td>
                                        
                                      
                                        <td class="table_two">
                                                <span class="orange">${s}</span> / ${t}
                                        </td>

                                        
                                        
                                </tr>

                                <tr>
                                        <td class="table_cell">
                                                <span>Popularity</span>
                                        </td>

                                        <td class="table_two">
                                                ${n}
                                        </td>
                                       
                                </tr>

                                <tr>
                                        <td class="table_cell">
                                                <span>Original title</span>
                                        </td>

                                        <td class="table_two">
                                                ${o}
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
        ${e||"Unfortunately, this film does not have a description yet."}
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
                `}const g=document.querySelector("div.for_modal");function I(a){const o=localStorage.getItem("mess"),s=JSON.parse(o).find(c=>c.id===a);console.log(s),g.innerHTML=v(s);const t=document.querySelector("button.arange_button"),e=document.querySelector("button.white_button");t.addEventListener("click",c=>{console.log("orange!"),c.stopPropagation()}),e.addEventListener("click",c=>{console.log("white"),c.stopPropagation()});const r=document.querySelector("div.cross"),i=document.querySelector(".backdrop");i.addEventListener("click",c=>{console.log(c.target),c.target===i&&(console.log("whoa!"),d())}),r.addEventListener("click",()=>{d(),r.removeEventListener("click",()=>{}),window.removeEventListener("keydown",()=>{}),t.removeEventListener("click",()=>{}),e.removeEventListener("click",()=>{})})}function d(){g.innerHTML=""}const p=document.querySelector(".gallery");document.querySelector(".section");document.querySelector("body");function w(a){const o=a.map(({poster_path:n,id:s,title:t,release_date:e},r)=>{let i=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${n}" alt="${t}">`;return n||(i=`<img class="img_of_card" src=${m} alt="No image">`),`
                                                        <li class="card" id=${s}>
                                                            ${i}
            <div class="card_box">
                <h1 class="card_title">${t}</h1>
                <h2 class="card_jenre">Drama, Comedy | ${Number.parseInt(e)||"No date"}</h2>
            </div>
                                                        </li>                                              
                                                        `}).join("");p.innerHTML=o}p.addEventListener("click",_);function _(a){window.addEventListener("keydown",t=>{t.code==="Escape"&&d()});const n=a.target.closest(".card");console.log(n);const s=Number(n.getAttribute("id"));I(s)}const E=document.querySelector(".tui-pagination"),l={totalItems:20,itemsPerPage:10,visiblePages:5,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="buttons_other tui-page-btn">{{page}}</a>',currentPage:'<strong class="button_orange tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="arrow tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="arrow tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="dots tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">. . .</span></a>'}},L="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWY1ZmQwYjgzOGJmMmEyNTlmZjA2Y2I3NTk2ODAzNyIsIm5iZiI6MTY3MDIyNjI2NC4xMzIsInN1YiI6IjYzOGRhMTU4MTI4M2U5MDA5NzY3Njg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LbbNBAE2uu7qSjmBFjXYtTYw99nAa-BxDgIdgH9cD08",A="https://api.themoviedb.org/3/",S="trending/movie/day",N="search/movie";async function u(a,o,n,s=1){try{await b.get(`${a}${o}`,{headers:{"Content-Type":"application/json",Authorization:L},params:{query:n,include_adult:!1,page:s}}).then(t=>{localStorage.setItem("mess",JSON.stringify(t.data.results)),w(t.data.results),console.log(t.data.results);const{results:e,total_results:r,total_pages:i}=t.data;let c=i;s<c&&(l.totalItems=c,l.page=s,new y(E,l).on("afterMove",function(f){s=f.page,u(a,o,n,s)}))})}catch(t){console.log(t)}}const M=document.querySelector(".icon_js");function B(){setInterval(()=>{M.classList.toggle("icon_scale")},800)}u(A,S);B();const T=document.querySelector(".js_form");T.addEventListener("submit",a=>{a.preventDefault();const o=a.currentTarget.elements.search.value;u(A,N,o)});
//# sourceMappingURL=index.js.map
