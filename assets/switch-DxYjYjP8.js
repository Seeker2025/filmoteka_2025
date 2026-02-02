import{a as b}from"./vendor-BNzshISR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const I=document.querySelector(".icon_yellow_js");function w(){setInterval(()=>{I.classList.toggle("icon_scale")},600)}w();const h="/filmoteka_2025/assets/no_img02-C_eq9g-1.png",N="/filmoteka_2025/assets/noth-DYALNzd5.png",S="/filmoteka_2025/assets/mistake404-HNkT3Q-g.png";function y(e){let t=[];return(JSON.parse(localStorage.getItem("genres"))??[]).map(i=>{e.map(r=>{i.id===r&&t.push(i.name)})}),t}document.querySelector(".gallery");document.querySelector("ul.gallery");function $(e,t){if(e==="mistake404"){const s=`
                             <li class="card card_js card_dark card_light">
                             <img class="img_of_card" src=${S} alt="404">
                             </li>    
                                     `;t.innerHTML=s}if(e?.length){const s=e.map(({poster_path:i,id:r,title:o,release_date:a,genre_ids:d},m)=>{let l=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${i}" alt="${o}">`;return i||(l=`<img class="img_of_card" src=${h} alt="No image">`),`
                            <li class="card card_js card_dark card_light" id=${r}>
                            ${l}
     <div class="card_box">
         <h1 class="card_title">${o||"No title"}</h1>
         <h2 class="card_jenre">${y(d).join(", ")||"No genres"} | ${Number.parseInt(a)||"No date"}</h2>
     </div>
                            </li>                                              
                                    `}).join("");t.innerHTML=s}else{const s=`
                             <li class="card card_js card_dark card_light">
                             <img class="img_of_card" src=${N} alt="No image">
                             </li>    
                                     `;t.innerHTML=s}}const v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==",L="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWY1ZmQwYjgzOGJmMmEyNTlmZjA2Y2I3NTk2ODAzNyIsIm5iZiI6MTY3MDIyNjI2NC4xMzIsInN1YiI6IjYzOGRhMTU4MTI4M2U5MDA5NzY3Njg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LbbNBAE2uu7qSjmBFjXYtTYw99nAa-BxDgIdgH9cD08";async function k(e,t){try{return(await b.get(`${e}movie/${t}/videos`,{headers:{"Content-Type":"application/json",Authorization:L}})).data}catch(s){console.log(s)}}function T(e,t){e.innerHTML=`
            <iframe  class="iframe"
            src="https://www.youtube.com/embed/${t}"
            frameborder="0"
            allowfullscreen>
            </iframe>
                   `}const J="https://api.themoviedb.org/3/";let u=null;function E(e,t){if(JSON.parse(localStorage.getItem("ui"))==="dark"?u="dark":u="light",!e)return;const{poster_path:s,title:i,popularity:r,vote_average:o,vote_count:a,overview:d,genre_ids:m,id:l}=e;console.log(l);let p=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${s}" alt="${i}">`;s||(p=`<img src=${h} alt="No image">`);const _=`<div class="backdrop">
                <div class = "modal ${u}">
                        <div class="cross">
                        
                                
                                <img src=${v} alt="close">
                                        
                        
                        </div>

                        <picture class="picture">
                                ${k(J,l).then(({results:g})=>{console.log(g);const f=document.querySelector(".picture");if(!g?.length)f.innerHTML=p;else{let A=g[0].key;console.log(A),T(f,A)}})}
                        </picture>                       
                            
                <table>
                            <caption>${i}</caption>
                                <tr>
                                        <td class="table_cell">
                                                <span>Vote / Votes</span>
                                        </td>
                                        
                                      
                                        <td class="table_two">
        <span class="orange">${o}</span> / ${a}
                                        </td>

                                        
                                </tr>

                                <tr>
                                        <td class="table_cell">
                                            <span>Popularity</span>
                                        </td>

                                        <td class="table_two">
                                            ${r||"No popularity"}
                                        </td>
                                       
                                </tr>

                                <tr>
                                        <td class="table_cell">
                                            <span>Original title</span>
                                        </td>

                                        <td class="table_two">
                                            ${i||"No title"}
                                        </td>

                                </tr>

                                <tr>
                                    <td class="table_cell">
                                        <span>Genre</span>
                                    </td>

                                    <td class="table_two">
                                        ${y(m).join(", ")||"No genres yet"}
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
                `;return t.innerHTML=_}document.querySelector("div.modal");function O(e,t,s){window.addEventListener("keyup",a=>{a.code==="Escape"&&o(e)});const i=document.querySelector("div.cross"),r=document.querySelector(".backdrop");r.addEventListener("click",a=>{console.log(a.target),a.target===r&&o(e)}),i.addEventListener("click",()=>{o(e),i.removeEventListener("click",()=>{}),window.removeEventListener("keyup",()=>{}),t.removeEventListener("click",()=>{}),s.removeEventListener("click",()=>{})});function o(a){a.innerHTML=""}}function j(e,t){const s=e.closest(".card"),i=Number(s.getAttribute("id")),r=JSON.parse(localStorage.getItem(t));return r?r.find(a=>a.id===i):void 0}let c=JSON.parse(localStorage.getItem("watched"))??[],n=JSON.parse(localStorage.getItem("queued"))??[];function U(e){c.some(t=>t.id===e.id)?(c=c.filter(t=>t.id!==e.id),localStorage.setItem("watched",JSON.stringify(c))):(c.push(e),localStorage.setItem("watched",JSON.stringify(c)))}function B(e){n.some(t=>t.id===e.id)?(n=n.filter(t=>t.id!==e.id),localStorage.setItem("queued",JSON.stringify(n))):(n.push(e),localStorage.setItem("queued",JSON.stringify(n)))}console.log("switch");function D(e,t,s){e.classList.toggle("light"),t.classList.toggle("con_light"),s&&s.classList.toggle("input_light")}function Y(e,t){t&&e.forEach(s=>{s.classList.toggle("card_light")})}export{U as a,B as b,O as c,D as d,Y as e,E as m,$ as r,j as t};
//# sourceMappingURL=switch-DxYjYjP8.js.map
