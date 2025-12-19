(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const p=document.querySelector(".icon_yellow_js");function f(){setInterval(()=>{p.classList.toggle("icon_scale")},800)}f();const b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==",A="/filmoteka_2025/assets/no_img02-C_eq9g-1.png";function h({poster_path:s,title:e,popularity:a,vote_average:i,vote_count:t,overview:o,genre_ids:r}){let n=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${s}" alt="${e}">`;return s||(n=`<img src=${A} alt="No image">`),`<div class="backdrop">
                <div class = "modal">
                        <div class="cross">
                        
                                
                                        <img src=${b} alt="close">
                                        
                        
                        </div>

                                ${n}
                <table>
                           <caption>${e}</caption>
                                <tr>
                                        <td class="table_cell">
                                                <span>Vote / Votes</span>
                                        </td>
                                        
                                      
                                        <td class="table_two">
                                                <span class="orange">${i}</span> / ${t}
                                        </td>

                                        
                                        
                                </tr>

                                <tr>
                                        <td class="table_cell">
                                                <span>Popularity</span>
                                        </td>

                                        <td class="table_two">
                                                ${a}
                                        </td>
                                       
                                </tr>

                                <tr>
                                        <td class="table_cell">
                                                <span>Original title</span>
                                        </td>

                                        <td class="table_two">
                                                ${e}
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
                `}let d=JSON.parse(localStorage.getItem("watched"))??[],u=JSON.parse(localStorage.getItem("queued"))??[];function w(s){d.some(e=>e.id===s.id)?(d=d.filter(e=>e.id!==s.id),localStorage.setItem("watched",JSON.stringify(d))):(d.push(s),localStorage.setItem("watched",JSON.stringify(d)))}function y(s){u.some(e=>e.id===s.id)?(u=u.filter(e=>e.id!==s.id),localStorage.setItem("queued",JSON.stringify(u))):(u.push(s),localStorage.setItem("queued",JSON.stringify(u)))}function S(s,e){const a=localStorage.getItem("mess"),t=JSON.parse(a).find(c=>c.id===s);console.log(t),console.log(t.id),e.innerHTML=h(t);const o=document.querySelector("button.arange_button"),r=document.querySelector("button.white_button");o.addEventListener("click",c=>{w(t),c.stopPropagation()}),r.addEventListener("click",c=>{y(t),c.stopPropagation()});const n=document.querySelector("div.cross"),l=document.querySelector(".backdrop");l.addEventListener("click",c=>{console.log(c.target),c.target===l&&(console.log("whoa!"),g(e))}),n.addEventListener("click",()=>{g(e),n.removeEventListener("click",()=>{}),window.removeEventListener("keydown",()=>{}),o.removeEventListener("click",()=>{}),r.removeEventListener("click",()=>{})})}function g(s){s.innerHTML=""}document.querySelector(".gallery");function v(s,e,a){const i=s.map(({poster_path:o,id:r,title:n,release_date:l},c)=>{let m=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${o}" alt="${n}">`;return o||(m=`<img class="img_of_card" src=${A} alt="No image">`),`
                                                         <li class="card" id=${r}>
                                                             ${m}
     <div class="card_box">
         <h1 class="card_title">${n}</h1>
         <h2 class="card_jenre">Drama, Comedy | ${Number.parseInt(l)||"No date"}</h2>
     </div>
                                                         </li>                                              
                                                         `}).join("");e.innerHTML=i,e.addEventListener("click",t);function t(o){window.addEventListener("keydown",c=>{c.code==="Escape"&&g(a)});const n=o.target.closest(".card"),l=Number(n.getAttribute("id"));S(l,a)}}export{A as n,v as r};
//# sourceMappingURL=render-DSDfpURu.js.map
