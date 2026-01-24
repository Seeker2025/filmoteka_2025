(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const p=document.querySelector(".icon_yellow_js");function A(){setInterval(()=>{p.classList.toggle("icon_scale")},600)}A();const m="/filmoteka_2025/assets/no_img02-C_eq9g-1.png",h="/filmoteka_2025/assets/noth-DYALNzd5.png",_=document.querySelector(".gallery");console.log(_);const y=document.querySelector("ul.gallery");console.log(y);function w(o,t){if(o.length){const r=o.map(({poster_path:a,id:e,title:s,release_date:c},g)=>{let n=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${a}" alt="${s}">`;return a||(n=`<img class="img_of_card" src=${m} alt="No image">`),`
                            <li class="card card_js card_dark card_light" id=${e}>
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
                                     `;t.innerHTML=r}}const b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==";let d=null;function S(o,t){if(JSON.parse(localStorage.getItem("ui"))==="dark"?d="dark":d="light",!o)return;const{poster_path:r,title:a,popularity:e,vote_average:s,vote_count:c,overview:g,genre_ids:n}=o;let u=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${r}" alt="${a}">`;r||(u=`<img src=${m} alt="No image">`);const f=`<div class="backdrop">
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
                                                ${e}
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
                `;return t.innerHTML=f}const v=document.querySelector("div.modal");console.log(v);function L(o,t,r){window.addEventListener("keyup",c=>{c.code==="Escape"&&s(o)});const a=document.querySelector("div.cross"),e=document.querySelector(".backdrop");e.addEventListener("click",c=>{console.log(c.target),c.target===e&&(console.log("whoa!"),s(o))}),a.addEventListener("click",()=>{s(o),a.removeEventListener("click",()=>{}),window.removeEventListener("keyup",()=>{}),t.removeEventListener("click",()=>{}),r.removeEventListener("click",()=>{})});function s(c){c.innerHTML=""}}function E(o,t){const r=o.closest(".card"),a=Number(r.getAttribute("id"));console.log(a);const e=JSON.parse(localStorage.getItem(t));return e?e.find(c=>c.id===a):void 0}let l=JSON.parse(localStorage.getItem("watched"))??[],i=JSON.parse(localStorage.getItem("queued"))??[];function N(o){l.some(t=>t.id===o.id)?(l=l.filter(t=>t.id!==o.id),localStorage.setItem("watched",JSON.stringify(l))):(l.push(o),localStorage.setItem("watched",JSON.stringify(l)))}function $(o){i.some(t=>t.id===o.id)?(i=i.filter(t=>t.id!==o.id),localStorage.setItem("queued",JSON.stringify(i))):(i.push(o),localStorage.setItem("queued",JSON.stringify(i)))}console.log("switch");function k(o,t,r){o.classList.toggle("light"),t.classList.toggle("con_light"),r&&r.classList.toggle("input_light")}function I(o,t){t&&o.forEach(r=>{r.classList.toggle("card_light")})}export{N as a,$ as b,L as c,k as d,I as e,S as m,w as r,E as t};
//# sourceMappingURL=switch-rY8mkWOX.js.map
