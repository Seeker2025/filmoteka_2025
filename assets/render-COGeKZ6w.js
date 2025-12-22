(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();const S=document.querySelector(".icon_yellow_js");function w(){setInterval(()=>{S.classList.toggle("icon_scale")},700)}w();const h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==",f="/filmoteka_2025/assets/no_img02-C_eq9g-1.png";function u({poster_path:r,title:t,popularity:c,vote_average:a,vote_count:e,overview:o,genre_ids:n}){let s=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${r}" alt="${t}">`;return r||(s=`<img src=${f} alt="No image">`),`<div class="backdrop">
                <div class = "modal">
                        <div class="cross">
                        
                                
                                        <img src=${h} alt="close">
                                        
                        
                        </div>

                                ${s}
                <table>
                           <caption>${t}</caption>
                                <tr>
                                        <td class="table_cell">
                                                <span>Vote / Votes</span>
                                        </td>
                                        
                                      
                                        <td class="table_two">
                                                <span class="orange">${a}</span> / ${e}
                                        </td>

                                        
                                        
                                </tr>

                                <tr>
                                        <td class="table_cell">
                                                <span>Popularity</span>
                                        </td>

                                        <td class="table_two">
                                                ${c}
                                        </td>
                                       
                                </tr>

                                <tr>
                                        <td class="table_cell">
                                                <span>Original title</span>
                                        </td>

                                        <td class="table_two">
                                                ${t}
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
        ${o||"Unfortunately, this film does not have a description yet."}
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
                `}let i=JSON.parse(localStorage.getItem("watched"))??[],d=JSON.parse(localStorage.getItem("queued"))??[];function v(r){i.some(t=>t.id===r.id)?(i=i.filter(t=>t.id!==r.id),localStorage.setItem("watched",JSON.stringify(i))):(i.push(r),localStorage.setItem("watched",JSON.stringify(i)))}function _(r){d.some(t=>t.id===r.id)?(d=d.filter(t=>t.id!==r.id),localStorage.setItem("queued",JSON.stringify(d))):(d.push(r),localStorage.setItem("queued",JSON.stringify(d)))}const p=document.getElementById("index"),b=document.getElementById("library"),y=document.getElementById("queue");console.log(p);console.log(b);console.log(y);const E=document.querySelector("div.for_modal"),L=document.querySelector("div.for_modal_lib"),I=document.querySelector("div.for_modal_queue");function O(r,t){if(p){const s=JSON.parse(localStorage.getItem("mess")).find(l=>l.id===r);E.innerHTML=u(s)}if(b){const s=JSON.parse(localStorage.getItem("watched")).find(l=>l.id===r);L.innerHTML=u(s)}if(y){const s=JSON.parse(localStorage.getItem("queued")).find(l=>l.id===r);I.innerHTML=u(s)}const c=document.querySelector("button.arange_button"),a=document.querySelector("button.white_button");c.addEventListener("click",n=>{v(oneObj),n.stopPropagation()}),a.addEventListener("click",n=>{_(oneObj),n.stopPropagation()});const e=document.querySelector("div.cross"),o=document.querySelector(".backdrop");o.addEventListener("click",n=>{console.log(n.target),n.target===o&&(console.log("whoa!"),m(t))}),e.addEventListener("click",()=>{m(t),e.removeEventListener("click",()=>{}),window.removeEventListener("keydown",()=>{}),c.removeEventListener("click",()=>{}),a.removeEventListener("click",()=>{})})}function m(r){r.innerHTML=""}document.querySelector(".gallery");function q(r,t,c){const a=r.map(({poster_path:o,id:n,title:s,release_date:l},g)=>{let A=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${o}" alt="${s}">`;return o||(A=`<img class="img_of_card" src=${f} alt="No image">`),`
                                                         <li class="card" id=${n}>
                                                             ${A}
     <div class="card_box">
         <h1 class="card_title">${s}</h1>
         <h2 class="card_jenre">Drama, Comedy | ${Number.parseInt(l)||"No date"}</h2>
     </div>
                                                         </li>                                              
                                                         `}).join("");t.innerHTML=a,t.addEventListener("click",e);function e(o){window.addEventListener("keydown",g=>{g.code==="Escape"&&m(c)});const s=o.target.closest(".card"),l=Number(s.getAttribute("id"));O(l,c)}}export{q as r};
//# sourceMappingURL=render-COGeKZ6w.js.map
