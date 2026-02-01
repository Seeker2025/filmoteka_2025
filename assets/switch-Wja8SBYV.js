import{a as _}from"./vendor-BNzshISR.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const b=document.querySelector(".icon_yellow_js");function I(){setInterval(()=>{b.classList.toggle("icon_scale")},600)}I();const A="/filmoteka_2025/assets/no_img02-C_eq9g-1.png",w="/filmoteka_2025/assets/noth-DYALNzd5.png",N="/filmoteka_2025/assets/mistake404-HNkT3Q-g.png";function h(t){let e=[];return(JSON.parse(localStorage.getItem("genres"))??[]).map(a=>{t.map(o=>{a.id===o&&e.push(a.name)})}),e}document.querySelector(".gallery");document.querySelector("ul.gallery");function E(t,e){if(t==="mistake404"){const r=`
                             <li class="card card_js card_dark card_light">
                             <img class="img_of_card" src=${N} alt="404">
                             </li>    
                                     `;e.innerHTML=r}if(t?.length){const r=t.map(({poster_path:a,id:o,title:s,release_date:i,genre_ids:d},m)=>{let l=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${a}" alt="${s}">`;return a||(l=`<img class="img_of_card" src=${A} alt="No image">`),`
                            <li class="card card_js card_dark card_light" id=${o}>
                            ${l}
     <div class="card_box">
         <h1 class="card_title">${s||"No title"}</h1>
         <h2 class="card_jenre">${h(d).join(", ")||"No genres"} | ${Number.parseInt(i)||"No date"}</h2>
     </div>
                            </li>                                              
                                    `}).join("");e.innerHTML=r}else{const r=`
                             <li class="card card_js card_dark card_light">
                             <img class="img_of_card" src=${w} alt="No image">
                             </li>    
                                     `;e.innerHTML=r}}const S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==",v="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWY1ZmQwYjgzOGJmMmEyNTlmZjA2Y2I3NTk2ODAzNyIsIm5iZiI6MTY3MDIyNjI2NC4xMzIsInN1YiI6IjYzOGRhMTU4MTI4M2U5MDA5NzY3Njg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LbbNBAE2uu7qSjmBFjXYtTYw99nAa-BxDgIdgH9cD08";async function L(t,e){try{return(await _.get(`${t}movie/${e}/videos`,{headers:{"Content-Type":"application/json",Authorization:v}})).data}catch(r){console.log(r)}}function k(t){return`
            <iframe
            src="https://www.youtube.com/embed/${t}"
            frameborder="0"
            allowfullscreen>
            </iframe>
    
            `}const J="https://api.themoviedb.org/3/";let u=null;function O(t,e){if(JSON.parse(localStorage.getItem("ui"))==="dark"?u="dark":u="light",!t)return;const{poster_path:r,title:a,popularity:o,vote_average:s,vote_count:i,overview:d,genre_ids:m,id:l}=t;console.log(l);let p=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${r}" alt="${a}">`;r||(p=`<img src=${A} alt="No image">`);const y=`<div class="backdrop">
                <div class = "modal ${u}">
                        <div class="cross">
                        
                                
                                <img src=${S} alt="close">
                                        
                        
                        </div>

                                ${L(J,l).then(({results:g})=>{if(console.log(g),!g?.length)return p;let f=g[0].key;console.log(f),console.log(k(f))})}
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
                `;return e.innerHTML=y}document.querySelector("div.modal");function T(t,e,r){window.addEventListener("keyup",i=>{i.code==="Escape"&&s(t)});const a=document.querySelector("div.cross"),o=document.querySelector(".backdrop");o.addEventListener("click",i=>{console.log(i.target),i.target===o&&s(t)}),a.addEventListener("click",()=>{s(t),a.removeEventListener("click",()=>{}),window.removeEventListener("keyup",()=>{}),e.removeEventListener("click",()=>{}),r.removeEventListener("click",()=>{})});function s(i){i.innerHTML=""}}function M(t,e){const r=t.closest(".card"),a=Number(r.getAttribute("id")),o=JSON.parse(localStorage.getItem(e));return o?o.find(i=>i.id===a):void 0}let c=JSON.parse(localStorage.getItem("watched"))??[],n=JSON.parse(localStorage.getItem("queued"))??[];function j(t){c.some(e=>e.id===t.id)?(c=c.filter(e=>e.id!==t.id),localStorage.setItem("watched",JSON.stringify(c))):(c.push(t),localStorage.setItem("watched",JSON.stringify(c)))}function U(t){n.some(e=>e.id===t.id)?(n=n.filter(e=>e.id!==t.id),localStorage.setItem("queued",JSON.stringify(n))):(n.push(t),localStorage.setItem("queued",JSON.stringify(n)))}console.log("switch");function B(t,e,r){t.classList.toggle("light"),e.classList.toggle("con_light"),r&&r.classList.toggle("input_light")}function D(t,e){e&&t.forEach(r=>{r.classList.toggle("card_light")})}export{j as a,U as b,T as c,B as d,D as e,O as m,E as r,M as t};
//# sourceMappingURL=switch-Wja8SBYV.js.map
