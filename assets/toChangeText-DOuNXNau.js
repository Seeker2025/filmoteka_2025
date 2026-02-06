import{a as _}from"./vendor-BNzshISR.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();const y=document.querySelector(".icon_yellow_js");function b(){setInterval(()=>{y.classList.toggle("icon_scale")},600)}b();const p="/filmoteka_2025/assets/no_img02-C_eq9g-1.png",I="/filmoteka_2025/assets/noth-DYALNzd5.png",v="/filmoteka_2025/assets/mistake404-HNkT3Q-g.png";function f(t){let e=[];return(JSON.parse(localStorage.getItem("genres"))??[]).map(r=>{t.map(s=>{r.id===s&&e.push(r.name)})}),e}document.querySelector(".gallery");document.querySelector("ul.gallery");function $(t,e){if(t==="mistake404"){const o=`
                             <li class="card card_js card_dark card_light">
                             <img class="img_of_card" src=${v} alt="404">
                             </li>    
                                     `;e.innerHTML=o}if(t?.length){const o=t.map(({poster_path:r,id:s,title:i,release_date:n,genre_ids:c},d)=>{let l=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${r}" alt="${i}">`;return r||(l=`<img class="img_of_card" src=${p} alt="No image">`),`
                            <li class="card card_js card_dark card_light" id=${s}>
                            ${l}
     <div class="card_box">
         <h1 class="card_title">${i||"No title"}</h1>
         <h2 class="card_jenre">${f(c).join(", ")||"No genres"} | ${Number.parseInt(n)||"No date"}</h2>
     </div>
                            </li>                                              
                                    `}).join("");e.innerHTML=o}else{const o=`
                             <li class="card card_js card_dark card_light">
                             <img class="img_of_card" src=${I} alt="No image">
                             </li>    
                                     `;e.innerHTML=o}}const w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==",N="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWY1ZmQwYjgzOGJmMmEyNTlmZjA2Y2I3NTk2ODAzNyIsIm5iZiI6MTY3MDIyNjI2NC4xMzIsInN1YiI6IjYzOGRhMTU4MTI4M2U5MDA5NzY3Njg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LbbNBAE2uu7qSjmBFjXYtTYw99nAa-BxDgIdgH9cD08";async function L(t,e){try{return(await _.get(`${t}movie/${e}/videos`,{headers:{"Content-Type":"application/json",Authorization:N}})).data}catch(o){console.log(o)}}function S(t,e){t.innerHTML=`
            <iframe  class="iframe"
            src="https://www.youtube.com/embed/${e}"
            frameborder="0"
            allowfullscreen>
            </iframe>
                   `}const k="https://api.themoviedb.org/3/";let a=null;function M(t,e){if(JSON.parse(localStorage.getItem("ui"))==="dark"?a="dark":a="light",!t)return;const{poster_path:o,title:r,popularity:s,vote_average:i,vote_count:n,overview:c,genre_ids:d,id:l}=t;let g=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${o}" alt="${r}">`;o||(g=`<img src=${p} alt="No image">`);const A=`<div class="backdrop">
                <div class = "modal ${a}">
                        <div class="cross">
                        
                                
                                <img src=${w} alt="close">
                                        
                        
                        </div>

                        <picture class="picture">
                                ${L(k,l).then(({results:u})=>{const m=document.querySelector(".picture");if(!u?.length)m.innerHTML=g;else{let h=u[0].key;S(m,h)}})}
                        </picture>                       
                            
                <table>
                            <caption>${r}</caption>
                                <tr>
                                        <td class="table_cell">
                                                <span>Vote / Votes</span>
                                        </td>
                                        
                                      
                                        <td class="table_two">
        <span class="orange">${i}</span> / ${n}
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
                                            ${r||"No title"}
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
        ${c||"Unfortunately, this film does not have a description yet."}
                        </div>
        </td>
                                </tr>
                      
                      
                                        <tr class="two_buttons">
                        <td>
        <button type="button" class="arange_button ${a}">ADD TO WATCHED</button>
                        </td>
                        <td>
        <button type="button" class="white_button ${a}">ADD TO QUEUE</button>
                        </td>
                                        </tr>
                                
                </table>
                
                     
                </div>
        </div>   
                `;e.innerHTML=A}function E(t,e,o){window.addEventListener("keyup",n=>{n.code==="Escape"&&i(t)});const r=document.querySelector("div.cross"),s=document.querySelector(".backdrop");s.addEventListener("click",n=>{n.target===s&&i(t)}),r.addEventListener("click",()=>{i(t),r.removeEventListener("click",()=>{}),window.removeEventListener("keyup",()=>{}),e.removeEventListener("click",()=>{}),o.removeEventListener("click",()=>{})});function i(n){n.innerHTML=""}}function O(t,e){const o=t.closest(".card"),r=Number(o.getAttribute("id")),s=JSON.parse(localStorage.getItem(e));return s?s.find(n=>n.id===r):void 0}function J(t,e,o){t.some(r=>r.id===e.id)?(t=t.filter(r=>r.id!==e.id),console.log(t),localStorage.setItem(o,JSON.stringify(t))):(t.push(e),console.log(t),localStorage.setItem(o,JSON.stringify(t)))}console.log("switch");function j(t,e,o){t.classList.toggle("light"),e.classList.toggle("con_light"),o&&o.classList.toggle("input_light")}function B(t,e){e&&t.forEach(o=>{o.classList.toggle("card_light")})}function C(t,e,o,r,s){(JSON.parse(localStorage.getItem(o))??[]).some(c=>c.id===e.id)?t.textContent=r:t.textContent=s}export{C as a,J as b,E as c,j as d,B as e,M as m,$ as r,O as t};
//# sourceMappingURL=toChangeText-DOuNXNau.js.map
