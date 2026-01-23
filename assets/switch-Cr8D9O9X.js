(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const p=document.querySelector(".icon_yellow_js");function A(){setInterval(()=>{p.classList.toggle("icon_scale")},700)}A();const m="/filmoteka_2025/assets/no_img02-C_eq9g-1.png",h="/filmoteka_2025/assets/noth-DYALNzd5.png",y=document.querySelector(".gallery");console.log(y);const _=document.querySelector("ul.gallery");console.log(_);function v(e,t){if(e.length){const r=e.map(({poster_path:a,id:o,title:s,release_date:c},g)=>{let n=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${a}" alt="${s}">`;return a||(n=`<img class="img_of_card" src=${m} alt="No image">`),`
                            <li class="card card_js card_dark card_light" id=${o}>
                            ${n}
     <div class="card_box">
         <h1 class="card_title">${s}</h1>
         <h2 class="card_jenre">Drama, Comedy | ${Number.parseInt(c)||"No date"}</h2>
     </div>
                            </li>                                              
                                    `}).join("");t.innerHTML=r,console.log(t)}else{const r=`
                             <li class="card card_js card_dark card_light">
                             <img class="img_of_card" src=${h} alt="No image">
                             </li>    
                                     `;t.innerHTML=r}}const b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==";document.getElementById("library");document.getElementById("queue");document.querySelector("body#index");let d=null;function w(e,t){if(JSON.parse(localStorage.getItem("ui"))==="dark"?d="dark":d="light",!e)return;const{poster_path:r,title:a,popularity:o,vote_average:s,vote_count:c,overview:g,genre_ids:n}=e;let u=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${r}" alt="${a}">`;r||(u=`<img src=${m} alt="No image">`);const f=`<div class="backdrop">
                <div class = "modal ${d}">
                        <div class="cross">
                        
                                
                                        <img src=${b} alt="close">
                                        
                        
                        </div>

                                ${u}
                <table>
                           <caption>${a}</caption>
                                <tr>
                                        <td class="table_cell">
                                                <span>Vote / Votes</span>
                                        </td>
                                        
                                      
                                        <td class="table_two">
                                                <span class="orange">${s}</span> / ${c}
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
        ${g||"Unfortunately, this film does not have a description yet."}
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
                `;return t.innerHTML=f}const S=document.querySelector("div.modal");console.log(S);function L(e,t,r){window.addEventListener("keyup",c=>{c.code==="Escape"&&s(e)});const a=document.querySelector("div.cross"),o=document.querySelector(".backdrop");o.addEventListener("click",c=>{console.log(c.target),c.target===o&&(console.log("whoa!"),s(e))}),a.addEventListener("click",()=>{s(e),a.removeEventListener("click",()=>{}),window.removeEventListener("keyup",()=>{}),t.removeEventListener("click",()=>{}),r.removeEventListener("click",()=>{})});function s(c){c.innerHTML=""}}function E(e,t){const r=e.closest(".card"),a=Number(r.getAttribute("id"));return JSON.parse(localStorage.getItem(t)).find(c=>c.id===a)}let l=JSON.parse(localStorage.getItem("watched"))??[],i=JSON.parse(localStorage.getItem("queued"))??[];function I(e){l.some(t=>t.id===e.id)?(l=l.filter(t=>t.id!==e.id),localStorage.setItem("watched",JSON.stringify(l))):(l.push(e),localStorage.setItem("watched",JSON.stringify(l)))}function N(e){i.some(t=>t.id===e.id)?(i=i.filter(t=>t.id!==e.id),localStorage.setItem("queued",JSON.stringify(i))):(i.push(e),localStorage.setItem("queued",JSON.stringify(i)))}console.log("switch");function $(e,t,r){e.classList.toggle("light"),t.classList.toggle("con_light"),r&&r.classList.toggle("input_light")}function k(e,t){t&&e.forEach(r=>{r.classList.toggle("card_light")})}export{I as a,N as b,L as c,$ as d,k as e,w as m,v as r,E as t};
//# sourceMappingURL=switch-Cr8D9O9X.js.map
