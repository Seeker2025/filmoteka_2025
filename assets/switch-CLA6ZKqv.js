import{a as y}from"./vendor-BNzshISR.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const _=document.querySelector(".icon_yellow_js");function I(){setInterval(()=>{_.classList.toggle("icon_scale")},600)}I();const p="/filmoteka_2025/assets/no_img02-C_eq9g-1.png",b="/filmoteka_2025/assets/noth-DYALNzd5.png",N="/filmoteka_2025/assets/mistake404-HNkT3Q-g.png";function A(t){let e=[];return(JSON.parse(localStorage.getItem("genres"))??[]).map(o=>{t.map(r=>{o.id===r&&e.push(o.name)})}),e}document.querySelector(".gallery");document.querySelector("ul.gallery");function k(t,e){if(t==="mistake404"){const s=`
                             <li class="card card_js card_dark card_light">
                             <img class="img_of_card" src=${N} alt="404">
                             </li>    
                                     `;e.innerHTML=s}if(t?.length){const s=t.map(({poster_path:o,id:r,title:a,release_date:i,genre_ids:n},u)=>{let d=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${o}" alt="${a}">`;return o||(d=`<img class="img_of_card" src=${p} alt="No image">`),`
                            <li class="card card_js card_dark card_light" id=${r}>
                            ${d}
     <div class="card_box">
         <h1 class="card_title">${a||"No title"}</h1>
         <h2 class="card_jenre">${A(n).join(", ")||"No genres"} | ${Number.parseInt(i)||"No date"}</h2>
     </div>
                            </li>                                              
                                    `}).join("");e.innerHTML=s}else{const s=`
                             <li class="card card_js card_dark card_light">
                             <img class="img_of_card" src=${b} alt="No image">
                             </li>    
                                     `;e.innerHTML=s}}const w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==",S="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWY1ZmQwYjgzOGJmMmEyNTlmZjA2Y2I3NTk2ODAzNyIsIm5iZiI6MTY3MDIyNjI2NC4xMzIsInN1YiI6IjYzOGRhMTU4MTI4M2U5MDA5NzY3Njg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LbbNBAE2uu7qSjmBFjXYtTYw99nAa-BxDgIdgH9cD08";async function J(t,e){try{await y.get(`${t}movie/${e}/videos`,{headers:{"Content-Type":"application/json",Authorization:S}}).then(s=>{console.log(s.data);let o=null;o=s.data.results[0].key,s.data.results?.length||(o=null),localStorage.setItem("key",JSON.stringify(o))})}catch(s){console.log(s)}}function v(t){return t===null?null:`
            <iframe
            src="https://www.youtube.com/embed/${t}"
            frameborder="0"
            allowfullscreen>
            </iframe>
    
            `}let g=null;function O(t,e){if(JSON.parse(localStorage.getItem("ui"))==="dark"?g="dark":g="light",!t)return;const{poster_path:s,title:o,popularity:r,vote_average:a,vote_count:i,overview:n,genre_ids:u,id:d}=t,m=JSON.parse(localStorage.getItem("key"));console.log(m);let f=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${s}" alt="${o}">`;s||(f=`<img src=${p} alt="No image">`);const h=`<div class="backdrop">
                <div class = "modal ${g}">
                        <div class="cross">
                        
                                
                                <img src=${w} alt="close">
                                        
                        
                        </div>

                                ${v(m)||f}
                <table>
                            <caption>${o}</caption>
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
                                            ${r||"No popularity"}
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
        ${n||"Unfortunately, this film does not have a description yet."}
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
                `;return e.innerHTML=h}document.querySelector("div.modal");function $(t,e,s){window.addEventListener("keyup",i=>{i.code==="Escape"&&a(t)});const o=document.querySelector("div.cross"),r=document.querySelector(".backdrop");r.addEventListener("click",i=>{console.log(i.target),i.target===r&&a(t)}),o.addEventListener("click",()=>{a(t),o.removeEventListener("click",()=>{}),window.removeEventListener("keyup",()=>{}),e.removeEventListener("click",()=>{}),s.removeEventListener("click",()=>{})});function a(i){i.innerHTML=""}}function T(t,e){const s=t.closest(".card"),o=Number(s.getAttribute("id"));console.log(o);const r=JSON.parse(localStorage.getItem(e));return r?r.find(i=>i.id===o):void 0}let c=JSON.parse(localStorage.getItem("watched"))??[],l=JSON.parse(localStorage.getItem("queued"))??[];function E(t){c.some(e=>e.id===t.id)?(c=c.filter(e=>e.id!==t.id),localStorage.setItem("watched",JSON.stringify(c))):(c.push(t),localStorage.setItem("watched",JSON.stringify(c)))}function M(t){l.some(e=>e.id===t.id)?(l=l.filter(e=>e.id!==t.id),localStorage.setItem("queued",JSON.stringify(l))):(l.push(t),localStorage.setItem("queued",JSON.stringify(l)))}console.log("switch");function j(t,e,s){t.classList.toggle("light"),e.classList.toggle("con_light"),s&&s.classList.toggle("input_light")}function D(t,e){e&&t.forEach(s=>{s.classList.toggle("card_light")})}export{E as a,M as b,$ as c,j as d,D as e,J as f,O as m,k as r,T as t};
//# sourceMappingURL=switch-CLA6ZKqv.js.map
