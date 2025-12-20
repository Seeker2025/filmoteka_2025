(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const p=document.querySelector(".icon_yellow_js");function f(){setInterval(()=>{p.classList.toggle("icon_scale")},700)}f();const b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==",A="/filmoteka_2025/assets/no_img02-C_eq9g-1.png";function w({poster_path:s,title:t,popularity:l,vote_average:n,vote_count:e,overview:o,genre_ids:r}){let a=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${s}" alt="${t}">`;return s||(a=`<img src=${A} alt="No image">`),`<div class="backdrop">
                <div class = "modal">
                        <div class="cross">
                        
                                
                                        <img src=${b} alt="close">
                                        
                        
                        </div>

                                ${a}
                <table>
                           <caption>${t}</caption>
                                <tr>
                                        <td class="table_cell">
                                                <span>Vote / Votes</span>
                                        </td>
                                        
                                      
                                        <td class="table_two">
                                                <span class="orange">${n}</span> / ${e}
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
                                                ${t}
                                        </td>

                                </tr>

                                <tr>
                                        <td class="table_cell">
                                                <span>Genre</span>
                                        </td>

                                        <td class="table_two">
                                                ${r[0],r[1]}
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
                `}let i=JSON.parse(localStorage.getItem("watched"))??[],d=JSON.parse(localStorage.getItem("queued"))??[];function y(s){i.some(t=>t.id===s.id)?(i=i.filter(t=>t.id!==s.id),localStorage.setItem("watched",JSON.stringify(i))):(i.push(s),localStorage.setItem("watched",JSON.stringify(i)))}function h(s){d.some(t=>t.id===s.id)?(d=d.filter(t=>t.id!==s.id),localStorage.setItem("queued",JSON.stringify(d))):(d.push(s),localStorage.setItem("queued",JSON.stringify(d)))}function S(s,t){const l=JSON.parse(localStorage.getItem("mess"));console.log(l),console.log(s);const n=l.find(c=>c.id===s);console.log(n),t.innerHTML=w(n);const e=document.querySelector("button.arange_button"),o=document.querySelector("button.white_button");e.addEventListener("click",c=>{y(n),c.stopPropagation()}),o.addEventListener("click",c=>{h(n),c.stopPropagation()});const r=document.querySelector("div.cross"),a=document.querySelector(".backdrop");a.addEventListener("click",c=>{console.log(c.target),c.target===a&&(console.log("whoa!"),u(t))}),r.addEventListener("click",()=>{u(t),r.removeEventListener("click",()=>{}),window.removeEventListener("keydown",()=>{}),e.removeEventListener("click",()=>{}),o.removeEventListener("click",()=>{})})}function u(s){s.innerHTML=""}document.querySelector(".gallery");function v(s,t,l){const n=s.map(({poster_path:o,id:r,title:a,release_date:c},g)=>{let m=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${o}" alt="${a}">`;return o||(m=`<img class="img_of_card" src=${A} alt="No image">`),`
                                                         <li class="card" id=${r}>
                                                             ${m}
     <div class="card_box">
         <h1 class="card_title">${a}</h1>
         <h2 class="card_jenre">Drama, Comedy | ${Number.parseInt(c)||"No date"}</h2>
     </div>
                                                         </li>                                              
                                                         `}).join("");t.innerHTML=n,t.addEventListener("click",e);function e(o){window.addEventListener("keydown",g=>{g.code==="Escape"&&u(l)});const a=o.target.closest(".card"),c=Number(a.getAttribute("id"));S(c,l)}}export{v as r};
//# sourceMappingURL=render-BfpeFNq6.js.map
