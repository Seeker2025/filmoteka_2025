import{a as _}from"./vendor-BNzshISR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const I=document.querySelector(".icon_yellow_js");function b(){setInterval(()=>{I.classList.toggle("icon_scale")},600)}b();const f="/filmoteka_2025/assets/no_img02-C_eq9g-1.png",N="/filmoteka_2025/assets/noth-DYALNzd5.png",v="/filmoteka_2025/assets/mistake404-HNkT3Q-g.png";function A(e){let t=[];return(JSON.parse(localStorage.getItem("genres"))??[]).map(a=>{e.map(o=>{a.id===o&&t.push(a.name)})}),t}document.querySelector(".gallery");document.querySelector("ul.gallery");function E(e,t){if(e==="mistake404"){const s=`
                             <li class="card card_js card_dark card_light">
                             <img class="img_of_card" src=${v} alt="404">
                             </li>    
                                     `;t.innerHTML=s}if(e?.length){const s=e.map(({poster_path:a,id:o,title:r,release_date:i,genre_ids:d},u)=>{let l=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${a}" alt="${r}">`;return a||(l=`<img class="img_of_card" src=${f} alt="No image">`),`
                            <li class="card card_js card_dark card_light" id=${o}>
                            ${l}
     <div class="card_box">
         <h1 class="card_title">${r||"No title"}</h1>
         <h2 class="card_jenre">${A(d).join(", ")||"No genres"} | ${Number.parseInt(i)||"No date"}</h2>
     </div>
                            </li>                                              
                                    `}).join("");t.innerHTML=s}else{const s=`
                             <li class="card card_js card_dark card_light">
                             <img class="img_of_card" src=${N} alt="No image">
                             </li>    
                                     `;t.innerHTML=s}}const S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==",w="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWY1ZmQwYjgzOGJmMmEyNTlmZjA2Y2I3NTk2ODAzNyIsIm5iZiI6MTY3MDIyNjI2NC4xMzIsInN1YiI6IjYzOGRhMTU4MTI4M2U5MDA5NzY3Njg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LbbNBAE2uu7qSjmBFjXYtTYw99nAa-BxDgIdgH9cD08";async function L(e,t){try{await _.get(`${e}movie/${t}/videos`,{headers:{"Content-Type":"application/json",Authorization:w}}).then(s=>{console.log(s.data);let a=null;return s.data})}catch(s){console.log(s)}}const k="https://api.themoviedb.org/3/";let g=null;function O(e,t){if(JSON.parse(localStorage.getItem("ui"))==="dark"?g="dark":g="light",!e)return;const{poster_path:s,title:a,popularity:o,vote_average:r,vote_count:i,overview:d,genre_ids:u,id:l}=e;console.log(l);const m=L(k,l);m.then(({results:y})=>console.log(y)),console.log(m);let p=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${s}" alt="${a}">`;s||(p=`<img src=${f} alt="No image">`);const h=`<div class="backdrop">
                <div class = "modal ${g}">
                        <div class="cross">
                        
                                
                                <img src=${S} alt="close">
                                        
                        
                        </div>

                                ${p}
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
                                            ${o||"No popularity"}
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
                `;return t.innerHTML=h}document.querySelector("div.modal");function T(e,t,s){window.addEventListener("keyup",i=>{i.code==="Escape"&&r(e)});const a=document.querySelector("div.cross"),o=document.querySelector(".backdrop");o.addEventListener("click",i=>{console.log(i.target),i.target===o&&r(e)}),a.addEventListener("click",()=>{r(e),a.removeEventListener("click",()=>{}),window.removeEventListener("keyup",()=>{}),t.removeEventListener("click",()=>{}),s.removeEventListener("click",()=>{})});function r(i){i.innerHTML=""}}function $(e,t){const s=e.closest(".card"),a=Number(s.getAttribute("id")),o=JSON.parse(localStorage.getItem(t));return o?o.find(i=>i.id===a):void 0}let c=JSON.parse(localStorage.getItem("watched"))??[],n=JSON.parse(localStorage.getItem("queued"))??[];function M(e){c.some(t=>t.id===e.id)?(c=c.filter(t=>t.id!==e.id),localStorage.setItem("watched",JSON.stringify(c))):(c.push(e),localStorage.setItem("watched",JSON.stringify(c)))}function j(e){n.some(t=>t.id===e.id)?(n=n.filter(t=>t.id!==e.id),localStorage.setItem("queued",JSON.stringify(n))):(n.push(e),localStorage.setItem("queued",JSON.stringify(n)))}console.log("switch");function U(e,t,s){e.classList.toggle("light"),t.classList.toggle("con_light"),s&&s.classList.toggle("input_light")}function B(e,t){t&&e.forEach(s=>{s.classList.toggle("card_light")})}export{M as a,j as b,T as c,U as d,B as e,O as m,E as r,$ as t};
//# sourceMappingURL=switch-DzTzLy_6.js.map
