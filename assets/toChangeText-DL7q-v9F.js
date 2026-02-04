import{a as I}from"./vendor-BNzshISR.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const b=document.querySelector(".icon_yellow_js");function w(){setInterval(()=>{b.classList.toggle("icon_scale")},600)}w();const A="/filmoteka_2025/assets/no_img02-C_eq9g-1.png",N="/filmoteka_2025/assets/noth-DYALNzd5.png",S="/filmoteka_2025/assets/mistake404-HNkT3Q-g.png";function h(t){let e=[];return(JSON.parse(localStorage.getItem("genres"))??[]).map(a=>{t.map(r=>{a.id===r&&e.push(a.name)})}),e}document.querySelector(".gallery");document.querySelector("ul.gallery");function O(t,e){if(t==="mistake404"){const s=`
                             <li class="card card_js card_dark card_light">
                             <img class="img_of_card" src=${S} alt="404">
                             </li>    
                                     `;e.innerHTML=s}if(t?.length){const s=t.map(({poster_path:a,id:r,title:o,release_date:i,genre_ids:l},m)=>{let g=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${a}" alt="${o}">`;return a||(g=`<img class="img_of_card" src=${A} alt="No image">`),`
                            <li class="card card_js card_dark card_light" id=${r}>
                            ${g}
     <div class="card_box">
         <h1 class="card_title">${o||"No title"}</h1>
         <h2 class="card_jenre">${h(l).join(", ")||"No genres"} | ${Number.parseInt(i)||"No date"}</h2>
     </div>
                            </li>                                              
                                    `}).join("");e.innerHTML=s}else{const s=`
                             <li class="card card_js card_dark card_light">
                             <img class="img_of_card" src=${N} alt="No image">
                             </li>    
                                     `;e.innerHTML=s}}const v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==",L="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWY1ZmQwYjgzOGJmMmEyNTlmZjA2Y2I3NTk2ODAzNyIsIm5iZiI6MTY3MDIyNjI2NC4xMzIsInN1YiI6IjYzOGRhMTU4MTI4M2U5MDA5NzY3Njg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LbbNBAE2uu7qSjmBFjXYtTYw99nAa-BxDgIdgH9cD08";async function k(t,e){try{return(await I.get(`${t}movie/${e}/videos`,{headers:{"Content-Type":"application/json",Authorization:L}})).data}catch(s){console.log(s)}}function T(t,e){t.innerHTML=`
            <iframe  class="iframe"
            src="https://www.youtube.com/embed/${e}"
            frameborder="0"
            allowfullscreen>
            </iframe>
                   `}const $="https://api.themoviedb.org/3/";let d=null;function M(t,e){if(JSON.parse(localStorage.getItem("ui"))==="dark"?d="dark":d="light",!t)return;const{poster_path:s,title:a,popularity:r,vote_average:o,vote_count:i,overview:l,genre_ids:m,id:g}=t;let p=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${s}" alt="${a}">`;s||(p=`<img src=${A} alt="No image">`);const y=`<div class="backdrop">
                <div class = "modal ${d}">
                        <div class="cross">
                        
                                
                                <img src=${v} alt="close">
                                        
                        
                        </div>

                        <picture class="picture">
                                ${k($,g).then(({results:u})=>{console.log(u);const f=document.querySelector(".picture");if(!u?.length)f.innerHTML=p;else{let _=u[0].key;T(f,_)}})}
                        </picture>                       
                            
                <table>
                            <caption>${a}</caption>
                                <tr>
                                        <td class="table_cell">
                                                <span>Vote / Votes</span>
                                        </td>
                                        
                                      
                                        <td class="table_two">
        <span class="orange">${o}</span> / ${i}
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
                                            ${a||"No title"}
                                        </td>

                                </tr>

                                <tr>
                                    <td class="table_cell">
                                        <span>Genre</span>
                                    </td>

                                    <td class="table_two">
                                        ${h(m).join(", ")||"No genres yet"}
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
        ${l||"Unfortunately, this film does not have a description yet."}
                        </div>
        </td>
                                </tr>
                      
                      
                                        <tr class="two_buttons">
                        <td>
        <button type="button" class="arange_button ${d}">ADD TO WATCHED</button>
                        </td>
                        <td>
        <button type="button" class="white_button ${d}">ADD TO QUEUE</button>
                        </td>
                                        </tr>
                                
                </table>
                
                     
                </div>
        </div>   
                `;e.innerHTML=y}document.querySelector("div.modal");function E(t,e,s){window.addEventListener("keyup",i=>{i.code==="Escape"&&o(t)});const a=document.querySelector("div.cross"),r=document.querySelector(".backdrop");r.addEventListener("click",i=>{console.log(i.target),i.target===r&&o(t)}),a.addEventListener("click",()=>{o(t),a.removeEventListener("click",()=>{}),window.removeEventListener("keyup",()=>{}),e.removeEventListener("click",()=>{}),s.removeEventListener("click",()=>{})});function o(i){i.innerHTML=""}}function j(t,e){const s=t.closest(".card"),a=Number(s.getAttribute("id")),r=JSON.parse(localStorage.getItem(e));return r?r.find(i=>i.id===a):void 0}let c=JSON.parse(localStorage.getItem("watched"))??[],n=JSON.parse(localStorage.getItem("queued"))??[];function B(t){c.some(e=>e.id===t.id)?(c=c.filter(e=>e.id!==t.id),localStorage.setItem("watched",JSON.stringify(c))):(c.push(t),localStorage.setItem("watched",JSON.stringify(c)))}function C(t){n.some(e=>e.id===t.id)?(n=n.filter(e=>e.id!==t.id),localStorage.setItem("queued",JSON.stringify(n))):(n.push(t),localStorage.setItem("queued",JSON.stringify(n)))}console.log("switch");function U(t,e,s){t.classList.toggle("light"),e.classList.toggle("con_light"),s&&s.classList.toggle("input_light")}function D(t,e){e&&t.forEach(s=>{s.classList.toggle("card_light")})}function Y(t,e,s,a,r){(JSON.parse(localStorage.getItem(s))??[]).some(l=>l.id===e.id)?t.textContent=a:t.textContent=r}export{Y as a,B as b,C as c,E as d,U as e,D as f,M as m,O as r,j as t};
//# sourceMappingURL=toChangeText-DL7q-v9F.js.map
