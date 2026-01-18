(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const f=document.querySelector(".icon_yellow_js");function p(){setInterval(()=>{f.classList.toggle("icon_scale")},700)}p();const u="/filmoteka_2025/assets/no_img02-C_eq9g-1.png",A="/filmoteka_2025/assets/noth-DYALNzd5.png",h=document.querySelector(".gallery");console.log(h);const _=document.querySelector("ul.gallery");console.log(_);function b(t,e){if(t.length){const r=t.map(({poster_path:a,id:s,title:o,release_date:c},d)=>{let n=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${a}" alt="${o}">`;return a||(n=`<img class="img_of_card" src=${u} alt="No image">`),`
                            <li class="card card_js card_dark card_light" id=${s}>
                            ${n}
     <div class="card_box">
         <h1 class="card_title">${o}</h1>
         <h2 class="card_jenre">Drama, Comedy | ${Number.parseInt(c)||"No date"}</h2>
     </div>
                            </li>                                              
                                    `}).join("");e.innerHTML=r}else{const r=`
                             <li class="card card_js card_dark card_light">
                             <img class="img_of_card" src=${A} alt="No image">
                             </li>    
                                     `;e.innerHTML=r}}const y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==";function w(t,e){if(!t)return;const{poster_path:r,title:a,popularity:s,vote_average:o,vote_count:c,overview:d,genre_ids:n}=t;let g=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${r}" alt="${a}">`;r||(g=`<img src=${u} alt="No image">`);const m=`<div class="backdrop">
                <div class = "modal">
                        <div class="cross">
                        
                                
                                        <img src=${y} alt="close">
                                        
                        
                        </div>

                                ${g}
                <table>
                           <caption>${a}</caption>
                                <tr>
                                        <td class="table_cell">
                                                <span>Vote / Votes</span>
                                        </td>
                                        
                                      
                                        <td class="table_two">
                                                <span class="orange">${o}</span> / ${c}
                                        </td>

                                        
                                        
                                </tr>

                                <tr>
                                        <td class="table_cell">
                                                <span>Popularity</span>
                                        </td>

                                        <td class="table_two">
                                                ${s}
                                        </td>
                                       
                                </tr>

                                <tr>
                                        <td class="table_cell">
                                                <span>Original title</span>
                                        </td>

                                        <td class="table_two">
                                                ${a}
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
                        <div class="description">
        ${d||"Unfortunately, this film does not have a description yet."}
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
                `;return e.innerHTML=m}function v(t,e,r){window.addEventListener("keyup",c=>{c.code==="Escape"&&o(t)});const a=document.querySelector("div.cross"),s=document.querySelector(".backdrop");s.addEventListener("click",c=>{console.log(c.target),c.target===s&&(console.log("whoa!"),o(t))}),a.addEventListener("click",()=>{o(t),a.removeEventListener("click",()=>{}),window.removeEventListener("keyup",()=>{}),e.removeEventListener("click",()=>{}),r.removeEventListener("click",()=>{})});function o(c){c.innerHTML=""}}function S(t,e){const r=t.closest(".card"),a=Number(r.getAttribute("id"));return JSON.parse(localStorage.getItem(e)).find(c=>c.id===a)}let i=JSON.parse(localStorage.getItem("watched"))??[],l=JSON.parse(localStorage.getItem("queued"))??[];function L(t){i.some(e=>e.id===t.id)?(i=i.filter(e=>e.id!==t.id),localStorage.setItem("watched",JSON.stringify(i))):(i.push(t),localStorage.setItem("watched",JSON.stringify(i)))}function E(t){l.some(e=>e.id===t.id)?(l=l.filter(e=>e.id!==t.id),localStorage.setItem("queued",JSON.stringify(l))):(l.push(t),localStorage.setItem("queued",JSON.stringify(l)))}console.log("switch");function N(t,e,r){t.classList.toggle("light"),e.classList.toggle("con_light"),r&&r.classList.toggle("input_light")}function $(t,e){e&&t.forEach(r=>{r.classList.toggle("card_light")})}export{L as a,E as b,v as c,N as d,$ as e,w as m,b as r,S as t};
//# sourceMappingURL=switch-C9oFtJAk.js.map
