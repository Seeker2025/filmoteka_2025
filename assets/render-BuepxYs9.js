(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();const A=document.querySelector(".icon_js");function w(){setInterval(()=>{A.classList.toggle("icon_scale")},800)}const p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==",m="/filmoteka_2025/assets/no_img02-C_eq9g-1.png";function f({poster_path:c,title:o,popularity:a,vote_average:i,vote_count:t,overview:e,genre_ids:s}){let n=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${c}" alt="${o}">`;return c||(n=`<img src=${m} alt="No image">`),`<div class="backdrop">
                <div class = "modal">
                        <div class="cross">
                        
                                
                                        <img src=${p} alt="close">
                                        
                        
                        </div>

                                ${n}
                <table>
                           <caption>${o}</caption>
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
                                                ${o}
                                        </td>

                                </tr>

                                <tr>
                                        <td class="table_cell">
                                                <span>Genre</span>
                                        </td>

                                        <td class="table_two">
                                                ${s[0],s[1]}
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
        ${e||"Unfortunately, this film does not have a description yet."}
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
                `}const b=document.querySelector("div.for_modal");let u=[];function y(c,o=b){const a=localStorage.getItem("mess"),t=JSON.parse(a).find(r=>r.id===c);console.log(t),console.log(t.id),o.innerHTML=f(t);const e=document.querySelector("button.arange_button"),s=document.querySelector("button.white_button");e.addEventListener("click",r=>{console.log("orange!"),u.some(d=>d.id===t.id)?u=u.filter(d=>d.id!==t.id):u.push(t),localStorage.setItem("watched",JSON.stringify(u)),r.stopPropagation()}),s.addEventListener("click",r=>{r.stopPropagation()});const n=document.querySelector("div.cross"),l=document.querySelector(".backdrop");l.addEventListener("click",r=>{console.log(r.target),r.target===l&&(console.log("whoa!"),g(o))}),n.addEventListener("click",()=>{g(o),n.removeEventListener("click",()=>{}),window.removeEventListener("keydown",()=>{}),e.removeEventListener("click",()=>{}),s.removeEventListener("click",()=>{})})}function g(c){c.innerHTML=""}const h=document.querySelector(".gallery");function v(c,o=h,a){const i=c.map(({poster_path:e,id:s,title:n,release_date:l},r)=>{let d=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${e}" alt="${n}">`;return e||(d=`<img class="img_of_card" src=${m} alt="No image">`),`
                                                        <li class="card" id=${s}>
                                                            ${d}
    <div class="card_box">
        <h1 class="card_title">${n}</h1>
        <h2 class="card_jenre">Drama, Comedy | ${Number.parseInt(l)||"No date"}</h2>
    </div>
                                                        </li>                                              
                                                        `}).join("");o.innerHTML=i,o.addEventListener("click",t);function t(e){window.addEventListener("keydown",r=>{r.code==="Escape"&&g(a)});const n=e.target.closest(".card");console.log(n);const l=Number(n.getAttribute("id"));y(l,a)}}export{w as f,v as r};
//# sourceMappingURL=render-BuepxYs9.js.map
