(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const A=document.querySelector(".icon_yellow_js");function h(){setInterval(()=>{A.classList.toggle("icon_scale")},600)}h();const m="/filmoteka_2025/assets/no_img02-C_eq9g-1.png",_="/filmoteka_2025/assets/noth-DYALNzd5.png";function p(r){let t=[];return(JSON.parse(localStorage.getItem("genres"))??[]).map(a=>{r.map(e=>{a.id===e&&t.push(a.name)})}),t}document.querySelector(".gallery");document.querySelector("ul.gallery");function S(r,t){if(r?.length){const o=r.map(({poster_path:a,id:e,title:s,release_date:i,genre_ids:d},u)=>{let l=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${a}" alt="${s}">`;return a||(l=`<img class="img_of_card" src=${m} alt="No image">`),`
                            <li class="card card_js card_dark card_light" id=${e}>
                            ${l}
     <div class="card_box">
         <h1 class="card_title">${s||"No title"}</h1>
         <h2 class="card_jenre">${p(d).join(", ")||"No genres"} | ${Number.parseInt(i)||"No date"}</h2>
     </div>
                            </li>                                              
                                    `}).join("");t.innerHTML=o}else{const o=`
                             <li class="card card_js card_dark card_light">
                             <img class="img_of_card" src=${_} alt="No image">
                             </li>    
                                     `;t.innerHTML=o}}const y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==";let g=null;function b(r,t){if(JSON.parse(localStorage.getItem("ui"))==="dark"?g="dark":g="light",!r)return;const{poster_path:o,title:a,popularity:e,vote_average:s,vote_count:i,overview:d,genre_ids:u}=r;let l=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${o}" alt="${a}">`;o||(l=`<img src=${m} alt="No image">`);const f=`<div class="backdrop">
                <div class = "modal ${g}">
                        <div class="cross">
                        
                                
                                        <img src=${y} alt="close">
                                        
                        
                        </div>

                                ${l}
                <table>
                            <caption>${a}</caption>
                                <tr>
                                        <td class="table_cell">
                                                <span>Vote / Votes</span>
                                        </td>
                                        
                                      
                                        <td class="table_two">
        <span class="orange">${s}</span> / ${i}
                                        </td>

                                        
                                        
                                </tr>

                                <tr>
                                        <td class="table_cell">
                                            <span>Popularity</span>
                                        </td>

                                        <td class="table_two">
                                            ${e||"No popularity"}
                                        </td>
                                       
                                </tr>

                                <tr>
                                        <td class="table_cell">
                                            <span>Original title</span>
                                        </td>

                                        <td class="table_two">
                                            ${a||"No title"}
                                        </td>

                                </tr>

                                <tr>
                                        <td class="table_cell">
                                            <span>Genre</span>
                                        </td>

                                        <td class="table_two">
                                            ${p(u).join(", ")||"No genres yet"}
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
                `;return t.innerHTML=f}document.querySelector("div.modal");function v(r,t,o){window.addEventListener("keyup",i=>{i.code==="Escape"&&s(r)});const a=document.querySelector("div.cross"),e=document.querySelector(".backdrop");e.addEventListener("click",i=>{console.log(i.target),i.target===e&&s(r)}),a.addEventListener("click",()=>{s(r),a.removeEventListener("click",()=>{}),window.removeEventListener("keyup",()=>{}),t.removeEventListener("click",()=>{}),o.removeEventListener("click",()=>{})});function s(i){i.innerHTML=""}}function w(r,t){const o=r.closest(".card"),a=Number(o.getAttribute("id"));console.log(a);const e=JSON.parse(localStorage.getItem(t));return e?e.find(i=>i.id===a):void 0}let c=JSON.parse(localStorage.getItem("watched"))??[],n=JSON.parse(localStorage.getItem("queued"))??[];function L(r){c.some(t=>t.id===r.id)?(c=c.filter(t=>t.id!==r.id),localStorage.setItem("watched",JSON.stringify(c))):(c.push(r),localStorage.setItem("watched",JSON.stringify(c)))}function N(r){n.some(t=>t.id===r.id)?(n=n.filter(t=>t.id!==r.id),localStorage.setItem("queued",JSON.stringify(n))):(n.push(r),localStorage.setItem("queued",JSON.stringify(n)))}console.log("switch");function E(r,t,o){r.classList.toggle("light"),t.classList.toggle("con_light"),o&&o.classList.toggle("input_light")}function $(r,t){t&&r.forEach(o=>{o.classList.toggle("card_light")})}export{L as a,N as b,v as c,E as d,$ as e,b as m,S as r,w as t};
//# sourceMappingURL=switch-BkCa2zjD.js.map
