(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const _=document.querySelector(".icon_yellow_js");function v(){setInterval(()=>{_.classList.toggle("icon_scale")},700)}v();const L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==",b="/filmoteka_2025/assets/no_img02-C_eq9g-1.png";function g({poster_path:r,title:o,popularity:l,vote_average:s,vote_count:e,overview:t,genre_ids:n}){let c=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${r}" alt="${o}">`;return r||(c=`<img src=${b} alt="No image">`),`<div class="backdrop">
                <div class = "modal">
                        <div class="cross">
                        
                                
                                        <img src=${L} alt="close">
                                        
                        
                        </div>

                                ${c}
                <table>
                           <caption>${o}</caption>
                                <tr>
                                        <td class="table_cell">
                                                <span>Vote / Votes</span>
                                        </td>
                                        
                                      
                                        <td class="table_two">
                                                <span class="orange">${s}</span> / ${e}
                                        </td>

                                        
                                        
                                </tr>

                                <tr>
                                        <td class="table_cell">
                                                <span>Popularity</span>
                                        </td>

                                        <td class="table_two">
                                                ${l}
                                        </td>
                                       
                                </tr>

                                <tr>
                                        <td class="table_cell">
                                                <span>Original title</span>
                                        </td>

                                        <td class="table_two">
                                                ${o}
                                        </td>

                                </tr>

                                <tr>
                                        <td class="table_cell">
                                                <span>Genre</span>
                                        </td>

                                        <td class="table_two">
                                                ${n[0],n[1]}
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
        ${t||"Unfortunately, this film does not have a description yet."}
        </td>
                                </tr>
                      
                       <tr>
                                        <td colspan = "2" class="two_buttons">

                <button type="button" class="arange_button">ADD TO WATCHED</button>
                <button type="button" class="white_button">ADD TO QUEUE</button>
                
                                        </td>
                                </tr>  
                </table>
                
                     
                </div>
        </div>   
                `}const E=document.querySelector(".arange_button");console.log(E);let d=JSON.parse(localStorage.getItem("watched"))??[],u=JSON.parse(localStorage.getItem("queued"))??[];function f(r){d.some(o=>o.id===r.id)?(d=d.filter(o=>o.id!==r.id),localStorage.setItem("watched",JSON.stringify(d))):(d.push(r),localStorage.setItem("watched",JSON.stringify(d)))}function A(r){u.some(o=>o.id===r.id)?(u=u.filter(o=>o.id!==r.id),localStorage.setItem("queued",JSON.stringify(u))):(u.push(r),localStorage.setItem("queued",JSON.stringify(u)))}const y=document.getElementById("index"),S=document.getElementById("library"),h=document.getElementById("queue");console.log(y);console.log(S);console.log(h);const w=document.querySelector("div.for_modal"),I=document.querySelector("div.for_modal_queue");console.log(w);function q(r,o){if(y){const e=JSON.parse(localStorage.getItem("mess")).find(c=>c.id===r);w.innerHTML=g(e);const t=document.querySelector("button.arange_button"),n=document.querySelector("button.white_button");t.addEventListener("click",c=>{f(e),c.stopPropagation()}),n.addEventListener("click",c=>{A(e),c.stopPropagation()}),l(t,n)}if(S){const s=document.querySelector("ul.ul_library"),e=document.querySelector(".for_modal_lib"),n=JSON.parse(localStorage.getItem("watched")).find(a=>a.id===r);e.innerHTML=g(n);const c=document.querySelector("button.arange_button"),i=document.querySelector("button.white_button");c.addEventListener("click",a=>{f(n),a.stopPropagation()}),i.addEventListener("click",a=>{A(n),a.stopPropagation()}),console.log(e),console.log(s),JSON.parse(localStorage.getItem("watched")),l(c,i)}if(h){const e=JSON.parse(localStorage.getItem("queued")).find(t=>t.id===r);I.innerHTML=g(e)}function l(s,e){const t=document.querySelector("div.cross"),n=document.querySelector(".backdrop");n.addEventListener("click",c=>{console.log(c.target),c.target===n&&(console.log("whoa!"),m(o))}),t.addEventListener("click",()=>{m(o),t.removeEventListener("click",()=>{}),window.removeEventListener("keydown",()=>{}),s.removeEventListener("click",()=>{}),e.removeEventListener("click",()=>{})})}}function m(r){r.innerHTML=""}document.querySelector(".gallery");function O(r,o,l){const s=r.map(({poster_path:t,id:n,title:c,release_date:i},a)=>{let p=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${t}" alt="${c}">`;return t||(p=`<img class="img_of_card" src=${b} alt="No image">`),`
                                                         <li class="card" id=${n}>
                                                             ${p}
     <div class="card_box">
         <h1 class="card_title">${c}</h1>
         <h2 class="card_jenre">Drama, Comedy | ${Number.parseInt(i)||"No date"}</h2>
     </div>
                                                         </li>                                              
                                                         `}).join("");o.innerHTML=s,o.addEventListener("click",e);function e(t){window.addEventListener("keydown",a=>{a.code==="Escape"&&m(l)});const c=t.target.closest(".card"),i=Number(c.getAttribute("id"));q(i,l)}}export{O as r};
//# sourceMappingURL=render-Drs29TEL.js.map
