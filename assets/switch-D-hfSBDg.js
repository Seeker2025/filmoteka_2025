(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const p=document.querySelector(".icon_yellow_js");function A(){setInterval(()=>{p.classList.toggle("icon_scale")},700)}A();const m="/filmoteka_2025/assets/no_img02-C_eq9g-1.png",h="/filmoteka_2025/assets/noth-DYALNzd5.png",_=document.querySelector(".gallery");console.log(_);const y=document.querySelector("ul.gallery");console.log(y);function w(e,t){if(e.length){const r=e.map(({poster_path:c,id:o,title:s,release_date:a},g)=>{let n=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${c}" alt="${s}">`;return c||(n=`<img class="img_of_card" src=${m} alt="No image">`),`
                            <li class="card card_js card_dark card_light" id=${o}>
                            ${n}
     <div class="card_box">
         <h1 class="card_title">${s}</h1>
         <h2 class="card_jenre">Drama, Comedy | ${Number.parseInt(a)||"No date"}</h2>
     </div>
                            </li>                                              
                                    `}).join("");t.innerHTML=r,console.log(t)}else{const r=`
                             <li class="card card_js card_dark card_light">
                             <img class="img_of_card" src=${h} alt="No image">
                             </li>    
                                     `;t.innerHTML=r}}const b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==";let d=null;function S(e,t){if(JSON.parse(localStorage.getItem("ui"))==="dark"?d="dark":d="light",!e)return;const{poster_path:r,title:c,popularity:o,vote_average:s,vote_count:a,overview:g,genre_ids:n}=e;let u=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${r}" alt="${c}">`;r||(u=`<img src=${m} alt="No image">`);const f=`<div class="backdrop">
                <div class = "modal ${d}">
                        <div class="cross">
                        
                                
                                        <img src=${b} alt="close">
                                        
                        
                        </div>

                                ${u}
                <table>
                           <caption>${c}</caption>
                                <tr>
                                        <td class="table_cell">
                                                <span>Vote / Votes</span>
                                        </td>
                                        
                                      
                                        <td class="table_two">
                                                <span class="orange">${s}</span> / ${a}
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
                                                ${c}
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
                `;return t.innerHTML=f}const v=document.querySelector("div.modal");console.log(v);function L(e,t,r){window.addEventListener("keyup",a=>{a.code==="Escape"&&s(e)});const c=document.querySelector("div.cross"),o=document.querySelector(".backdrop");o.addEventListener("click",a=>{console.log(a.target),a.target===o&&(console.log("whoa!"),s(e))}),c.addEventListener("click",()=>{s(e),c.removeEventListener("click",()=>{}),window.removeEventListener("keyup",()=>{}),t.removeEventListener("click",()=>{}),r.removeEventListener("click",()=>{})});function s(a){a.innerHTML=""}}function E(e,t){const r=e.closest(".card"),c=Number(r.getAttribute("id"));return JSON.parse(localStorage.getItem(t)).find(a=>a.id===c)}let l=JSON.parse(localStorage.getItem("watched"))??[],i=JSON.parse(localStorage.getItem("queued"))??[];function N(e){l.some(t=>t.id===e.id)?(l=l.filter(t=>t.id!==e.id),localStorage.setItem("watched",JSON.stringify(l))):(l.push(e),localStorage.setItem("watched",JSON.stringify(l)))}function $(e){i.some(t=>t.id===e.id)?(i=i.filter(t=>t.id!==e.id),localStorage.setItem("queued",JSON.stringify(i))):(i.push(e),localStorage.setItem("queued",JSON.stringify(i)))}console.log("switch");function k(e,t,r){e.classList.toggle("light"),t.classList.toggle("con_light"),r&&r.classList.toggle("input_light")}function I(e,t){t&&e.forEach(r=>{r.classList.toggle("card_light")})}export{N as a,$ as b,L as c,k as d,I as e,S as m,w as r,E as t};
//# sourceMappingURL=switch-D-hfSBDg.js.map
