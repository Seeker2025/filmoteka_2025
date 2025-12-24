(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const S=document.querySelector(".icon_yellow_js");function w(){setInterval(()=>{S.classList.toggle("icon_scale")},700)}w();const h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==",A="/filmoteka_2025/assets/no_img02-C_eq9g-1.png";function u({poster_path:r,title:o,popularity:l,vote_average:c,vote_count:e,overview:t,genre_ids:n}){let s=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${r}" alt="${o}">`;return r||(s=`<img src=${A} alt="No image">`),`<div class="backdrop">
                <div class = "modal">
                        <div class="cross">
                        
                                
                                        <img src=${h} alt="close">
                                        
                        
                        </div>

                                ${s}
                <table>
                           <caption>${o}</caption>
                                <tr>
                                        <td class="table_cell">
                                                <span>Vote / Votes</span>
                                        </td>
                                        
                                      
                                        <td class="table_two">
                                                <span class="orange">${c}</span> / ${e}
                                        </td>

                                        
                                        
                                </tr>

                                <tr>
                                        <td class="table_cell">
                                                <span>Popularity</span>
                                        </td>

                                        <td class="table_two">
                                                ${l}
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
                                                ${n[0],n[1]}
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
        ${t||"Unfortunately, this film does not have a description yet."}
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
                `}const v=document.querySelector(".arange_button");console.log(v);let a=JSON.parse(localStorage.getItem("watched"))??[],i=JSON.parse(localStorage.getItem("queued"))??[];function _(r){a.some(o=>o.id===r.id)?(a=a.filter(o=>o.id!==r.id),localStorage.setItem("watched",JSON.stringify(a))):(a.push(r),localStorage.setItem("watched",JSON.stringify(a)))}function E(r){i.some(o=>o.id===r.id)?(i=i.filter(o=>o.id!==r.id),localStorage.setItem("queued",JSON.stringify(i))):(i.push(r),localStorage.setItem("queued",JSON.stringify(i)))}const p=document.getElementById("index"),b=document.getElementById("library"),y=document.getElementById("queue");console.log(p);console.log(b);console.log(y);const L=document.querySelector("div.for_modal"),I=document.querySelector("div.for_modal_lib"),q=document.querySelector("div.for_modal_queue");function O(r,o){if(p){const e=JSON.parse(localStorage.getItem("mess")).find(s=>s.id===r);L.innerHTML=u(e);const t=document.querySelector("button.arange_button"),n=document.querySelector("button.white_button");console.log(n),console.log(t),t.addEventListener("click",s=>{_(e),s.stopPropagation()}),n.addEventListener("click",s=>{E(e),s.stopPropagation()}),l(t,n)}if(b){const e=JSON.parse(localStorage.getItem("watched")).find(t=>t.id===r);I.innerHTML=u(e)}if(y){const e=JSON.parse(localStorage.getItem("queued")).find(t=>t.id===r);q.innerHTML=u(e)}function l(c,e){const t=document.querySelector("div.cross"),n=document.querySelector(".backdrop");n.addEventListener("click",s=>{console.log(s.target),s.target===n&&(console.log("whoa!"),g(o))}),t.addEventListener("click",()=>{g(o),t.removeEventListener("click",()=>{}),window.removeEventListener("keydown",()=>{}),c.removeEventListener("click",()=>{}),e.removeEventListener("click",()=>{})})}}function g(r){r.innerHTML=""}document.querySelector(".gallery");function N(r,o,l){const c=r.map(({poster_path:t,id:n,title:s,release_date:d},m)=>{let f=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${t}" alt="${s}">`;return t||(f=`<img class="img_of_card" src=${A} alt="No image">`),`
                                                         <li class="card" id=${n}>
                                                             ${f}
     <div class="card_box">
         <h1 class="card_title">${s}</h1>
         <h2 class="card_jenre">Drama, Comedy | ${Number.parseInt(d)||"No date"}</h2>
     </div>
                                                         </li>                                              
                                                         `}).join("");o.innerHTML=c,o.addEventListener("click",e);function e(t){window.addEventListener("keydown",m=>{m.code==="Escape"&&g(l)});const s=t.target.closest(".card"),d=Number(s.getAttribute("id"));O(d,l)}}export{N as r};
//# sourceMappingURL=render-oED7Lnw1.js.map
