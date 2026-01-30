import{a as _}from"./vendor-BNzshISR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const I=document.querySelector(".icon_yellow_js");function b(){setInterval(()=>{I.classList.toggle("icon_scale")},600)}b();const f="/filmoteka_2025/assets/no_img02-C_eq9g-1.png",N="/filmoteka_2025/assets/noth-DYALNzd5.png",v="/filmoteka_2025/assets/mistake404-HNkT3Q-g.png";function A(e){let t=[];return(JSON.parse(localStorage.getItem("genres"))??[]).map(r=>{e.map(s=>{r.id===s&&t.push(r.name)})}),t}document.querySelector(".gallery");document.querySelector("ul.gallery");function E(e,t){if(e==="mistake404"){const o=`
                             <li class="card card_js card_dark card_light">
                             <img class="img_of_card" src=${v} alt="404">
                             </li>    
                                     `;t.innerHTML=o}if(e?.length){const o=e.map(({poster_path:r,id:s,title:a,release_date:i,genre_ids:d},u)=>{let l=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${r}" alt="${a}">`;return r||(l=`<img class="img_of_card" src=${f} alt="No image">`),`
                            <li class="card card_js card_dark card_light" id=${s}>
                            ${l}
     <div class="card_box">
         <h1 class="card_title">${a||"No title"}</h1>
         <h2 class="card_jenre">${A(d).join(", ")||"No genres"} | ${Number.parseInt(i)||"No date"}</h2>
     </div>
                            </li>                                              
                                    `}).join("");t.innerHTML=o}else{const o=`
                             <li class="card card_js card_dark card_light">
                             <img class="img_of_card" src=${N} alt="No image">
                             </li>    
                                     `;t.innerHTML=o}}const S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==",w="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWY1ZmQwYjgzOGJmMmEyNTlmZjA2Y2I3NTk2ODAzNyIsIm5iZiI6MTY3MDIyNjI2NC4xMzIsInN1YiI6IjYzOGRhMTU4MTI4M2U5MDA5NzY3Njg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LbbNBAE2uu7qSjmBFjXYtTYw99nAa-BxDgIdgH9cD08";async function L(e,t){try{await _.get(`${e}movie/${t}/videos`,{headers:{"Content-Type":"application/json",Authorization:w}}).then(o=>{console.log(o.data);let r=null;return r=o.data.results[0].key,o.data.results?.length||(r=null),r})}catch(o){console.log(o)}}const k="https://api.themoviedb.org/3/";let g=null;function O(e,t){if(JSON.parse(localStorage.getItem("ui"))==="dark"?g="dark":g="light",!e)return;const{poster_path:o,title:r,popularity:s,vote_average:a,vote_count:i,overview:d,genre_ids:u,id:l}=e;console.log(l);const m=L(k,l);m.then(({results:y})=>console.log(y)),console.log(m);let p=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${o}" alt="${r}">`;o||(p=`<img src=${f} alt="No image">`);const h=`<div class="backdrop">
                <div class = "modal ${g}">
                        <div class="cross">
                        
                                
                                <img src=${S} alt="close">
                                        
                        
                        </div>

                                ${p}
                <table>
                            <caption>${r}</caption>
                                <tr>
                                        <td class="table_cell">
                                                <span>Vote / Votes</span>
                                        </td>
                                        
                                      
                                        <td class="table_two">
        <span class="orange">${a}</span> / ${i}
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
                                            ${A(u).join(", ")||"No genres yet"}
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
                `;return t.innerHTML=h}document.querySelector("div.modal");function T(e,t,o){window.addEventListener("keyup",i=>{i.code==="Escape"&&a(e)});const r=document.querySelector("div.cross"),s=document.querySelector(".backdrop");s.addEventListener("click",i=>{console.log(i.target),i.target===s&&a(e)}),r.addEventListener("click",()=>{a(e),r.removeEventListener("click",()=>{}),window.removeEventListener("keyup",()=>{}),t.removeEventListener("click",()=>{}),o.removeEventListener("click",()=>{})});function a(i){i.innerHTML=""}}function $(e,t){const o=e.closest(".card"),r=Number(o.getAttribute("id")),s=JSON.parse(localStorage.getItem(t));return s?s.find(i=>i.id===r):void 0}let c=JSON.parse(localStorage.getItem("watched"))??[],n=JSON.parse(localStorage.getItem("queued"))??[];function M(e){c.some(t=>t.id===e.id)?(c=c.filter(t=>t.id!==e.id),localStorage.setItem("watched",JSON.stringify(c))):(c.push(e),localStorage.setItem("watched",JSON.stringify(c)))}function j(e){n.some(t=>t.id===e.id)?(n=n.filter(t=>t.id!==e.id),localStorage.setItem("queued",JSON.stringify(n))):(n.push(e),localStorage.setItem("queued",JSON.stringify(n)))}console.log("switch");function U(e,t,o){e.classList.toggle("light"),t.classList.toggle("con_light"),o&&o.classList.toggle("input_light")}function B(e,t){t&&e.forEach(o=>{o.classList.toggle("card_light")})}export{M as a,j as b,T as c,U as d,B as e,O as m,E as r,$ as t};
//# sourceMappingURL=switch-DVrJejkT.js.map
