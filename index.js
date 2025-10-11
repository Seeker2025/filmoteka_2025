import{a as f,P as y}from"./assets/vendor-D0nrVKD2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();const b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==";function h({poster_path:n,title:o,popularity:a,vote_average:s,vote_count:t,overview:e,genre_ids:r}){let i=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${n}" alt="${o}">`;return n||(i='<img src="../img/no_img02.png" >'),`<div class="backdrop">
                <div class = "modal">
                        <div class="cross">
                        
                                
                                        <img src=${b} title="close">
                                        
                        
                        </div>

                                ${i}
                        <table>
                           <caption>${o}</caption>
                                <tr>
                                        <td class="vote_box table_cell">
                                                <span>Vote / Votes</span>
                                        </td>
                                      
                                        <td colspan="2">
                                                <span class="orange">${s}</span> / ${t}
                                        </td>
                                </tr>

                                <tr>
                                        <td class="table_cell">
                                                <span>Popularity</span>
                                        </td>

                                        <td colspan="2">
                                                ${a}
                                        </td>
                                       
                                </tr>

                                <tr>
                                        <td class="table_cell">
                                                <span>Original title</span>
                                        </td>

                                        <td>
                                                ${o}
                                        </td>

                                </tr>

                                <tr>
                                        <td class="table_cell">
                                                <span>Genre</span>
                                        </td>

                                        <td>
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
        <td colspan = "2">${e||"Unfortunately, this film does not have a description yet."}</td>
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
                `}const p=document.querySelector("div.for_modal");function v(n){const o=localStorage.getItem("mess"),s=JSON.parse(o).find(c=>c.id===n);console.log(s),p.innerHTML=h(s);const t=document.querySelector("button.arange_button"),e=document.querySelector("button.white_button");t.addEventListener("click",c=>{console.log("orange!"),c.stopPropagation()}),e.addEventListener("click",c=>{console.log("white"),c.stopPropagation()});const r=document.querySelector("div.cross"),i=document.querySelector(".backdrop");i.addEventListener("click",c=>{console.log(c.target),c.target===i&&(console.log("whoa!"),d())}),r.addEventListener("click",()=>{d(),r.removeEventListener("click",()=>{}),window.removeEventListener("keydown",()=>{}),t.removeEventListener("click",()=>{}),e.removeEventListener("click",()=>{})})}function d(){p.innerHTML=""}const g=document.querySelector(".gallery");document.querySelector(".section");document.querySelector("body");function I(n){const o=n.map(({poster_path:a,id:s,title:t},e)=>{let r=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${a}" width="" alt="${t}">`;return a||(r='<img class="img_of_card" src="./img/no_img02.png" width="" alt="No image">'),`
                                                        <li class="card" id=${s}>
                                                            ${r}
                                                            <h1 class="card_title">${t}</h1>
                                                        </li>                                              
                                                        `}).join("");g.innerHTML=o}g.addEventListener("click",w);function w(n){window.addEventListener("keydown",t=>{t.code==="Escape"&&d()});const a=n.target.closest(".card");console.log(a);const s=Number(a.getAttribute("id"));v(s)}const _=document.querySelector(".tui-pagination"),l={totalItems:20,itemsPerPage:10,visiblePages:5,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="buttons_other tui-page-btn">{{page}}</a>',currentPage:'<strong class="button_orange tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="arrow tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="arrow tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="dots tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">. . .</span></a>'}},E="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWY1ZmQwYjgzOGJmMmEyNTlmZjA2Y2I3NTk2ODAzNyIsIm5iZiI6MTY3MDIyNjI2NC4xMzIsInN1YiI6IjYzOGRhMTU4MTI4M2U5MDA5NzY3Njg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LbbNBAE2uu7qSjmBFjXYtTYw99nAa-BxDgIdgH9cD08",m="https://api.themoviedb.org/3/",L="trending/movie/day",S="search/movie";async function u(n,o,a,s=1){try{await f.get(`${n}${o}`,{headers:{"Content-Type":"application/json",Authorization:E},params:{query:a,include_adult:!1,page:s}}).then(t=>{localStorage.setItem("mess",JSON.stringify(t.data.results)),I(t.data.results);const{results:e,total_results:r,total_pages:i}=t.data;let c=i;s<c&&(l.totalItems=c,l.page=s,new y(_,l).on("afterMove",function(A){s=A.page,u(n,o,a,s)}))})}catch(t){console.log(t)}}const M=document.querySelector(".icon_js");function B(){setInterval(()=>{M.classList.toggle("icon_scale")},800)}u(m,L);B();const N=document.querySelector(".js_form");N.addEventListener("submit",n=>{n.preventDefault();const o=n.currentTarget.elements.search.value;u(m,S,o)});
//# sourceMappingURL=index.js.map
