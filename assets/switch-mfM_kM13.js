import{a as _}from"./vendor-BNzshISR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const y=document.querySelector(".icon_yellow_js");function I(){setInterval(()=>{y.classList.toggle("icon_scale")},600)}I();const p="/filmoteka_2025/assets/no_img02-C_eq9g-1.png",b="/filmoteka_2025/assets/noth-DYALNzd5.png",N="/filmoteka_2025/assets/mistake404-HNkT3Q-g.png";function f(e){let t=[];return(JSON.parse(localStorage.getItem("genres"))??[]).map(a=>{e.map(s=>{a.id===s&&t.push(a.name)})}),t}document.querySelector(".gallery");document.querySelector("ul.gallery");function J(e,t){if(e==="mistake404"){const r=`
                             <li class="card card_js card_dark card_light">
                             <img class="img_of_card" src=${N} alt="404">
                             </li>    
                                     `;t.innerHTML=r}if(e?.length){const r=e.map(({poster_path:a,id:s,title:o,release_date:i,genre_ids:d},u)=>{let l=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${a}" alt="${o}">`;return a||(l=`<img class="img_of_card" src=${p} alt="No image">`),`
                            <li class="card card_js card_dark card_light" id=${s}>
                            ${l}
     <div class="card_box">
         <h1 class="card_title">${o||"No title"}</h1>
         <h2 class="card_jenre">${f(d).join(", ")||"No genres"} | ${Number.parseInt(i)||"No date"}</h2>
     </div>
                            </li>                                              
                                    `}).join("");t.innerHTML=r}else{const r=`
                             <li class="card card_js card_dark card_light">
                             <img class="img_of_card" src=${b} alt="No image">
                             </li>    
                                     `;t.innerHTML=r}}const S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==",v="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWY1ZmQwYjgzOGJmMmEyNTlmZjA2Y2I3NTk2ODAzNyIsIm5iZiI6MTY3MDIyNjI2NC4xMzIsInN1YiI6IjYzOGRhMTU4MTI4M2U5MDA5NzY3Njg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LbbNBAE2uu7qSjmBFjXYtTYw99nAa-BxDgIdgH9cD08";async function w(e,t){try{return(await _.get(`${e}movie/${t}/videos`,{headers:{"Content-Type":"application/json",Authorization:v}})).data}catch(r){console.log(r)}}const L="https://api.themoviedb.org/3/";let g=null;function E(e,t){if(JSON.parse(localStorage.getItem("ui"))==="dark"?g="dark":g="light",!e)return;const{poster_path:r,title:a,popularity:s,vote_average:o,vote_count:i,overview:d,genre_ids:u,id:l}=e;console.log(l),w(L,l).then(({results:h})=>{console.log(h[0].key)});let m=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${r}" alt="${a}">`;r||(m=`<img src=${p} alt="No image">`);const A=`<div class="backdrop">
                <div class = "modal ${g}">
                        <div class="cross">
                        
                                
                                <img src=${S} alt="close">
                                        
                        
                        </div>

                                ${m}
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
                                            ${f(u).join(", ")||"No genres yet"}
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
                `;return t.innerHTML=A}document.querySelector("div.modal");function O(e,t,r){window.addEventListener("keyup",i=>{i.code==="Escape"&&o(e)});const a=document.querySelector("div.cross"),s=document.querySelector(".backdrop");s.addEventListener("click",i=>{console.log(i.target),i.target===s&&o(e)}),a.addEventListener("click",()=>{o(e),a.removeEventListener("click",()=>{}),window.removeEventListener("keyup",()=>{}),t.removeEventListener("click",()=>{}),r.removeEventListener("click",()=>{})});function o(i){i.innerHTML=""}}function T(e,t){const r=e.closest(".card"),a=Number(r.getAttribute("id")),s=JSON.parse(localStorage.getItem(t));return s?s.find(i=>i.id===a):void 0}let c=JSON.parse(localStorage.getItem("watched"))??[],n=JSON.parse(localStorage.getItem("queued"))??[];function $(e){c.some(t=>t.id===e.id)?(c=c.filter(t=>t.id!==e.id),localStorage.setItem("watched",JSON.stringify(c))):(c.push(e),localStorage.setItem("watched",JSON.stringify(c)))}function M(e){n.some(t=>t.id===e.id)?(n=n.filter(t=>t.id!==e.id),localStorage.setItem("queued",JSON.stringify(n))):(n.push(e),localStorage.setItem("queued",JSON.stringify(n)))}console.log("switch");function j(e,t,r){e.classList.toggle("light"),t.classList.toggle("con_light"),r&&r.classList.toggle("input_light")}function U(e,t){t&&e.forEach(r=>{r.classList.toggle("card_light")})}export{$ as a,M as b,O as c,j as d,U as e,E as m,J as r,T as t};
//# sourceMappingURL=switch-mfM_kM13.js.map
