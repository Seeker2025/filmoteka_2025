(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function c(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=c(t);fetch(t.href,e)}})();const p=document.querySelector(".icon_yellow_js");function A(){setInterval(()=>{p.classList.toggle("icon_scale")},700)}A();const g="/filmoteka_2025/assets/no_img02-C_eq9g-1.png",f="/filmoteka_2025/assets/noth-DYALNzd5.png",y=document.querySelector(".gallery");console.log(y);const b=document.querySelector("ul.gallery");console.log(b);function _(s,o){if(s.length){const c=s.map(({poster_path:a,id:t,title:e,release_date:r},d)=>{let i=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${a}" alt="${e}">`;return a||(i=`<img class="img_of_card" src=${g} alt="No image">`),`
                            <li class="card card_js" id=${t}>
                            ${i}
     <div class="card_box">
         <h1 class="card_title">${e}</h1>
         <h2 class="card_jenre">Drama, Comedy | ${Number.parseInt(r)||"No date"}</h2>
     </div>
                            </li>                                              
                                    `}).join("");o.innerHTML=c}else{const c=`
                             <li class="card card_js">
                             <img class="img_of_card" src=${f} alt="No image">
                             </li>    
                                     `;o.innerHTML=c}}const h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==";function v(s,o){if(!s)return;const{poster_path:c,title:a,popularity:t,vote_average:e,vote_count:r,overview:d,genre_ids:i}=s;let u=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${c}" alt="${a}">`;c||(u=`<img src=${g} alt="No image">`);const m=`<div class="backdrop">
                <div class = "modal">
                        <div class="cross">
                        
                                
                                        <img src=${h} alt="close">
                                        
                        
                        </div>

                                ${u}
                <table>
                           <caption>${a}</caption>
                                <tr>
                                        <td class="table_cell">
                                                <span>Vote / Votes</span>
                                        </td>
                                        
                                      
                                        <td class="table_two">
                                                <span class="orange">${e}</span> / ${r}
                                        </td>

                                        
                                        
                                </tr>

                                <tr>
                                        <td class="table_cell">
                                                <span>Popularity</span>
                                        </td>

                                        <td class="table_two">
                                                ${t}
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
                                                ${i[0],i[1]}
                                        </td>

                                </tr>

                                <tr>
                                        <td colspan = "2"></td>
                                </tr>

                                <tr>
                                        <td colspan = "2">ABOUT</td>
                                </tr>

                                <tr class="description">
        <td colspan = "2">
        ${d||"Unfortunately, this film does not have a description yet."}
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
                `;return o.innerHTML=m}function w(s,o,c){window.addEventListener("keyup",r=>{r.code==="Escape"&&e(s)});const a=document.querySelector("div.cross"),t=document.querySelector(".backdrop");t.addEventListener("click",r=>{console.log(r.target),r.target===t&&(console.log("whoa!"),e(s))}),a.addEventListener("click",()=>{e(s),a.removeEventListener("click",()=>{}),window.removeEventListener("keyup",()=>{}),o.removeEventListener("click",()=>{}),c.removeEventListener("click",()=>{})});function e(r){r.innerHTML=""}}function S(s,o){const c=s.closest(".card"),a=Number(c.getAttribute("id"));return JSON.parse(localStorage.getItem(o)).find(r=>r.id===a)}let n=JSON.parse(localStorage.getItem("watched"))??[],l=JSON.parse(localStorage.getItem("queued"))??[];function L(s){n.some(o=>o.id===s.id)?(n=n.filter(o=>o.id!==s.id),localStorage.setItem("watched",JSON.stringify(n))):(n.push(s),localStorage.setItem("watched",JSON.stringify(n)))}function E(s){l.some(o=>o.id===s.id)?(l=l.filter(o=>o.id!==s.id),localStorage.setItem("queued",JSON.stringify(l))):(l.push(s),localStorage.setItem("queued",JSON.stringify(l)))}export{L as a,E as b,w as c,v as m,_ as r,S as t};
//# sourceMappingURL=toFun-CRhCGtP3.js.map
