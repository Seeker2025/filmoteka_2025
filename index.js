import{a as y,P as b}from"./assets/vendor-D0nrVKD2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();function h({poster_path:n,title:o,popularity:a,vote_average:s,vote_count:t,overview:e,genre_ids:r}){let i=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${n}" alt="${o}">`;return n||(i='<img src="./img/no_img02.png" >'),`<div class="backdrop">
                <div class = "modal">
                        <div class="cross">
                        
                                <svg>
                                        <use href="./img/close.svg"></use>
                                </svg>        
                        
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
                `}const p=document.querySelector("div.for_modal");function v(n){const o=localStorage.getItem("mess"),s=JSON.parse(o).find(c=>c.id===n);console.log(s),p.innerHTML=h(s);const t=document.querySelector("button.arange_button"),e=document.querySelector("button.white_button");t.addEventListener("click",c=>{console.log("orange!"),c.stopPropagation()}),e.addEventListener("click",c=>{console.log("white"),c.stopPropagation()});const r=document.querySelector("div.cross"),i=document.querySelector(".backdrop");i.addEventListener("click",c=>{console.log(c.target),c.target===i&&(console.log("whoa!"),d())}),r.addEventListener("click",()=>{d(),r.removeEventListener("click",()=>{}),window.removeEventListener("keydown",()=>{}),t.removeEventListener("click",()=>{}),e.removeEventListener("click",()=>{})})}function d(){p.innerHTML=""}const m=document.querySelector(".gallery");document.querySelector(".section");document.querySelector("body");function _(n){const o=n.map(({poster_path:a,id:s,title:t},e)=>{let r=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${a}" width="" alt="${t}">`;return a||(r='<img class="img_of_card" src="./img/no_img02.png" width="" alt="No image">'),`
                                                        <li class="card" id=${s}>
                                                            ${r}
                                                            <h1 class="card_title">${t}</h1>
                                                        </li>                                              
                                                        `}).join("");m.innerHTML=o}m.addEventListener("click",I);function I(n){window.addEventListener("keydown",t=>{t.code==="Escape"&&d()});const a=n.target.closest(".card");console.log(a);const s=Number(a.getAttribute("id"));v(s)}const w=document.querySelector(".tui-pagination"),l={totalItems:20,itemsPerPage:10,visiblePages:5,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="buttons_other tui-page-btn">{{page}}</a>',currentPage:'<strong class="button_orange tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="arrow tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="arrow tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="dots tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">. . .</span></a>'}},L="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWY1ZmQwYjgzOGJmMmEyNTlmZjA2Y2I3NTk2ODAzNyIsIm5iZiI6MTY3MDIyNjI2NC4xMzIsInN1YiI6IjYzOGRhMTU4MTI4M2U5MDA5NzY3Njg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LbbNBAE2uu7qSjmBFjXYtTYw99nAa-BxDgIdgH9cD08",g="https://api.themoviedb.org/3/",S="trending/movie/day",E="search/movie";async function u(n,o,a,s=1){try{await y.get(`${n}${o}`,{headers:{"Content-Type":"application/json",Authorization:L},params:{query:a,include_adult:!1,page:s}}).then(t=>{localStorage.setItem("mess",JSON.stringify(t.data.results)),_(t.data.results);const{results:e,total_results:r,total_pages:i}=t.data;let c=i;s<c&&(l.totalItems=c,l.page=s,new b(w,l).on("afterMove",function(f){s=f.page,u(n,o,a,s)}))})}catch(t){console.log(t)}}const N=document.querySelector(".icon_js");function O(){setInterval(()=>{N.classList.toggle("icon_scale")},800)}u(g,S);O();const A=document.querySelector(".js_form");A.addEventListener("submit",n=>{n.preventDefault();const o=n.currentTarget.elements.search.value;u(g,E,o)});
//# sourceMappingURL=index.js.map
