import{a as _}from"./vendor-BNzshISR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const y=document.querySelector(".icon_yellow_js");function b(){setInterval(()=>{y.classList.toggle("icon_scale")},600)}b();const p="/filmoteka_2025/assets/no_img02-C_eq9g-1.png",I="/filmoteka_2025/assets/noth-DYALNzd5.png",N="/filmoteka_2025/assets/mistake404-HNkT3Q-g.png";function f(e){let r=[];return(JSON.parse(localStorage.getItem("genres"))??[]).map(o=>{e.map(s=>{o.id===s&&r.push(o.name)})}),r}document.querySelector(".gallery");document.querySelector("ul.gallery");function k(e,r){if(e==="mistake404"){const t=`
                             <li class="card card_js card_dark card_light">
                             <img class="img_of_card" src=${N} alt="404">
                             </li>    
                                     `;r.innerHTML=t}if(e?.length){const t=e.map(({poster_path:o,id:s,title:i,release_date:a,genre_ids:n},d)=>{let l=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${o}" alt="${i}">`;return o||(l=`<img class="img_of_card" src=${p} alt="No image">`),`
                            <li class="card card_js card_dark card_light" id=${s}>
                            ${l}
     <div class="card_box">
         <h1 class="card_title">${i||"No title"}</h1>
         <h2 class="card_jenre">${f(n).join(", ")||"No genres"} | ${Number.parseInt(a)||"No date"}</h2>
     </div>
                            </li>                                              
                                    `}).join("");r.innerHTML=t}else{const t=`
                             <li class="card card_js card_dark card_light">
                             <img class="img_of_card" src=${I} alt="No image">
                             </li>    
                                     `;r.innerHTML=t}}const v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==",w="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWY1ZmQwYjgzOGJmMmEyNTlmZjA2Y2I3NTk2ODAzNyIsIm5iZiI6MTY3MDIyNjI2NC4xMzIsInN1YiI6IjYzOGRhMTU4MTI4M2U5MDA5NzY3Njg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LbbNBAE2uu7qSjmBFjXYtTYw99nAa-BxDgIdgH9cD08";async function L(e,r){try{return(await _.get(`${e}movie/${r}/videos`,{headers:{"Content-Type":"application/json",Authorization:w}})).data}catch(t){console.log(t)}}function S(e,r){e.innerHTML=`
            <iframe  class="iframe"
            src="https://www.youtube.com/embed/${r}"
            frameborder="0"
            allowfullscreen>
            </iframe>
                   `}const T="https://api.themoviedb.org/3/";let c=null;function M(e,r){if(JSON.parse(localStorage.getItem("ui"))==="dark"?c="dark":c="light",!e)return;const{poster_path:t,title:o,popularity:s,vote_average:i,vote_count:a,overview:n,genre_ids:d,id:l}=e;let g=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${t}" alt="${o}">`;t||(g=`<img src=${p} alt="No image">`);const A=`<div class="backdrop">
                <div class = "modal ${c}">
                        <div class="cross">
                        
                                
                                <img src=${v} alt="close">
                                        
                        
                        </div>

                        <picture class="picture">
                                ${L(T,l).then(({results:u})=>{const m=document.querySelector(".picture");if(!u?.length)m.innerHTML=g;else{let h=u[0].key;S(m,h)}})}
                        </picture>                       
                            
                <table>
                            <caption>${o}</caption>
                                <tr>
                                        <td class="table_cell">
                                                <span>Vote / Votes</span>
                                        </td>
                                        
                                      
                                        <td class="table_two">
        <span class="orange">${i}</span> / ${a}
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
                                            ${o||"No title"}
                                        </td>

                                </tr>

                                <tr>
                                    <td class="table_cell">
                                        <span>Genre</span>
                                    </td>

                                    <td class="table_two">
                                        ${f(d).join(", ")||"No genres yet"}
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
        ${n||"Unfortunately, this film does not have a description yet."}
                        </div>
        </td>
                                </tr>
                      
                      
                                        <tr class="two_buttons">
                        <td>
        <button type="button" class="arange_button ${c}">ADD TO WATCHED</button>
                        </td>
                        <td>
        <button type="button" class="white_button ${c}">ADD TO QUEUE</button>
                        </td>
                                        </tr>
                                
                </table>
                
                     
                </div>
        </div>   
                `;r.innerHTML=A}function O(e,r,t){window.addEventListener("keyup",a=>{a.code==="Escape"&&i(e)});const o=document.querySelector("div.cross"),s=document.querySelector(".backdrop");s.addEventListener("click",a=>{a.target===s&&i(e)}),o.addEventListener("click",()=>{i(e),o.removeEventListener("click",()=>{}),window.removeEventListener("keyup",()=>{}),r.removeEventListener("click",()=>{}),t.removeEventListener("click",()=>{})});function i(a){a.innerHTML=""}}function E(e,r){const t=e.closest(".card"),o=Number(t.getAttribute("id")),s=JSON.parse(localStorage.getItem(r));return s?s.find(a=>a.id===o):void 0}function J(e,r){let t=JSON.parse(localStorage.getItem(r))??[];t.some(o=>o.id===e.id)?(t=t.filter(o=>o.id!==e.id),localStorage.setItem(r,JSON.stringify(t))):(t.push(e),localStorage.setItem(r,JSON.stringify(t)))}console.log("switch");function j(e,r,t){e.classList.toggle("light"),r.classList.toggle("con_light"),t&&t.classList.toggle("input_light")}function B(e,r){r&&e.forEach(t=>{t.classList.toggle("card_light")})}function C(e,r,t,o,s){(JSON.parse(localStorage.getItem(t))??[]).some(n=>n.id===r.id)?e.textContent=o:e.textContent=s}export{C as a,J as b,O as c,j as d,B as e,M as m,k as r,E as t};
//# sourceMappingURL=toChangeText-NkKa1gw9.js.map
