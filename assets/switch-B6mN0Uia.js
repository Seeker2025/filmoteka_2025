(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const _=document.querySelector(".icon_yellow_js");function y(){setInterval(()=>{_.classList.toggle("icon_scale")},700)}y();const m="/filmoteka_2025/assets/no_img02-C_eq9g-1.png",b="/filmoteka_2025/assets/noth-DYALNzd5.png",S=document.querySelector(".gallery");console.log(S);const v=document.querySelector("ul.gallery");console.log(v);function k(e,t){if(e.length){const r=e.map(({poster_path:a,id:o,title:s,release_date:l},g)=>{let n=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${a}" alt="${s}">`;return a||(n=`<img class="img_of_card" src=${m} alt="No image">`),`
                            <li class="card card_js card_dark card_light" id=${o}>
                            ${n}
     <div class="card_box">
         <h1 class="card_title">${s}</h1>
         <h2 class="card_jenre">Drama, Comedy | ${Number.parseInt(l)||"No date"}</h2>
     </div>
                            </li>                                              
                                    `}).join("");t.innerHTML=r,console.log(t)}else{const r=`
                             <li class="card card_js card_dark card_light">
                             <img class="img_of_card" src=${b} alt="No image">
                             </li>    
                                     `;t.innerHTML=r}}const w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==",L=document.getElementById("library"),I=document.getElementById("queue"),E=document.querySelector("body#index");let d=null;function O(e,t){if(E||L||I){localStorage.setItem("ui_lib",JSON.stringify("light_lib"));const f=JSON.parse(localStorage.getItem("ui"))==="dark",A=JSON.parse(localStorage.getItem("ui_lib"))==="dark_lib",h=JSON.parse(localStorage.getItem("ui_que"))==="dark_que";f||A||h?(d="dark",console.log("dark")):(d="light",console.log("light"))}if(!e)return;const{poster_path:r,title:a,popularity:o,vote_average:s,vote_count:l,overview:g,genre_ids:n}=e;let u=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${r}" alt="${a}">`;r||(u=`<img src=${m} alt="No image">`);const p=`<div class="backdrop">
                <div class = "modal ${d}">
                        <div class="cross">
                        
                                
                                        <img src=${w} alt="close">
                                        
                        
                        </div>

                                ${u}
                <table>
                           <caption>${a}</caption>
                                <tr>
                                        <td class="table_cell">
                                                <span>Vote / Votes</span>
                                        </td>
                                        
                                      
                                        <td class="table_two">
                                                <span class="orange">${s}</span> / ${l}
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
                `;return t.innerHTML=p}const N=document.querySelector("div.modal");console.log(N);function $(e,t,r){window.addEventListener("keyup",l=>{l.code==="Escape"&&s(e)});const a=document.querySelector("div.cross"),o=document.querySelector(".backdrop");o.addEventListener("click",l=>{console.log(l.target),l.target===o&&(console.log("whoa!"),s(e))}),a.addEventListener("click",()=>{s(e),a.removeEventListener("click",()=>{}),window.removeEventListener("keyup",()=>{}),t.removeEventListener("click",()=>{}),r.removeEventListener("click",()=>{})});function s(l){l.innerHTML=""}}function J(e,t){const r=e.closest(".card"),a=Number(r.getAttribute("id"));return JSON.parse(localStorage.getItem(t)).find(l=>l.id===a)}let c=JSON.parse(localStorage.getItem("watched"))??[],i=JSON.parse(localStorage.getItem("queued"))??[];function q(e){c.some(t=>t.id===e.id)?(c=c.filter(t=>t.id!==e.id),localStorage.setItem("watched",JSON.stringify(c))):(c.push(e),localStorage.setItem("watched",JSON.stringify(c)))}function M(e){i.some(t=>t.id===e.id)?(i=i.filter(t=>t.id!==e.id),localStorage.setItem("queued",JSON.stringify(i))):(i.push(e),localStorage.setItem("queued",JSON.stringify(i)))}console.log("switch");function T(e,t,r){e.classList.toggle("light"),t.classList.toggle("con_light"),r&&r.classList.toggle("input_light")}function U(e,t){t&&e.forEach(r=>{r.classList.toggle("card_light")})}export{q as a,M as b,$ as c,T as d,U as e,O as m,k as r,J as t};
//# sourceMappingURL=switch-B6mN0Uia.js.map
