(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const A=document.querySelector(".icon_yellow_js");function _(){setInterval(()=>{A.classList.toggle("icon_scale")},600)}_();const m="/filmoteka_2025/assets/no_img02-C_eq9g-1.png",h="/filmoteka_2025/assets/noth-DYALNzd5.png",y="/filmoteka_2025/assets/mistake404-HNkT3Q-g.png";function p(e){let t=[];return(JSON.parse(localStorage.getItem("genres"))??[]).map(a=>{e.map(s=>{a.id===s&&t.push(a.name)})}),t}document.querySelector(".gallery");document.querySelector("ul.gallery");function b(e,t){if(e==="mistake404"){const o=`
                             <li class="card card_js card_dark card_light">
                             <img class="img_of_card" src=${y} alt="404">
                             </li>    
                                     `;t.innerHTML=o}if(e?.length){const o=e.map(({poster_path:a,id:s,title:r,release_date:i,genre_ids:d},u)=>{let n=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${a}" alt="${r}">`;return a||(n=`<img class="img_of_card" src=${m} alt="No image">`),`
                            <li class="card card_js card_dark card_light" id=${s}>
                            ${n}
     <div class="card_box">
         <h1 class="card_title">${r||"No title"}</h1>
         <h2 class="card_jenre">${p(d).join(", ")||"No genres"} | ${Number.parseInt(i)||"No date"}</h2>
     </div>
                            </li>                                              
                                    `}).join("");t.innerHTML=o}else{const o=`
                             <li class="card card_js card_dark card_light">
                             <img class="img_of_card" src=${h} alt="No image">
                             </li>    
                                     `;t.innerHTML=o}}const S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==";let g=null;function v(e,t){if(JSON.parse(localStorage.getItem("ui"))==="dark"?g="dark":g="light",!e)return;const{poster_path:o,title:a,popularity:s,vote_average:r,vote_count:i,overview:d,genre_ids:u}=e;let n=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${o}" alt="${a}">`;o||(n=`<img src=${m} alt="No image">`);const f=`<div class="backdrop">
                <div class = "modal ${g}">
                        <div class="cross">
                        
                                
                                        <img src=${S} alt="close">
                                        
                        
                        </div>

                                ${n}
                <table>
                            <caption>${a}</caption>
                                <tr>
                                        <td class="table_cell">
                                                <span>Vote / Votes</span>
                                        </td>
                                        
                                      
                                        <td class="table_two">
        <span class="orange">${r}</span> / ${i}
                                        </td>

                                        
                                        
                                </tr>

                                <tr>
                                        <td class="table_cell">
                                            <span>Popularity</span>
                                        </td>

                                        <td class="table_two">
                                            ${s||"No popularity"}
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
                `;return t.innerHTML=f}document.querySelector("div.modal");function w(e,t,o){window.addEventListener("keyup",i=>{i.code==="Escape"&&r(e)});const a=document.querySelector("div.cross"),s=document.querySelector(".backdrop");s.addEventListener("click",i=>{console.log(i.target),i.target===s&&r(e)}),a.addEventListener("click",()=>{r(e),a.removeEventListener("click",()=>{}),window.removeEventListener("keyup",()=>{}),t.removeEventListener("click",()=>{}),o.removeEventListener("click",()=>{})});function r(i){i.innerHTML=""}}function L(e,t){const o=e.closest(".card"),a=Number(o.getAttribute("id"));console.log(a);const s=JSON.parse(localStorage.getItem(t));return s?s.find(i=>i.id===a):void 0}let c=JSON.parse(localStorage.getItem("watched"))??[],l=JSON.parse(localStorage.getItem("queued"))??[];function N(e){c.some(t=>t.id===e.id)?(c=c.filter(t=>t.id!==e.id),localStorage.setItem("watched",JSON.stringify(c))):(c.push(e),localStorage.setItem("watched",JSON.stringify(c)))}function k(e){l.some(t=>t.id===e.id)?(l=l.filter(t=>t.id!==e.id),localStorage.setItem("queued",JSON.stringify(l))):(l.push(e),localStorage.setItem("queued",JSON.stringify(l)))}console.log("switch");function $(e,t,o){e.classList.toggle("light"),t.classList.toggle("con_light"),o&&o.classList.toggle("input_light")}function E(e,t){t&&e.forEach(o=>{o.classList.toggle("card_light")})}export{N as a,k as b,w as c,$ as d,E as e,v as m,b as r,L as t};
//# sourceMappingURL=switch-CsF0uf-e.js.map
