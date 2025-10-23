(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();const A=document.querySelector(".icon_js");function p(){setInterval(()=>{A.classList.toggle("icon_scale")},800)}const f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==",m="/filmoteka_2025/assets/no_img02-C_eq9g-1.png";function b({poster_path:n,title:o,popularity:a,vote_average:l,vote_count:t,overview:e,genre_ids:s}){let r=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${n}" alt="${o}">`;return n||(r=`<img src=${m} alt="No image">`),`<div class="backdrop">
                <div class = "modal">
                        <div class="cross">
                        
                                
                                        <img src=${f} alt="close">
                                        
                        
                        </div>

                                ${r}
                <table>
                           <caption>${o}</caption>
                                <tr>
                                        <td class="table_cell">
                                                <span>Vote / Votes</span>
                                        </td>
                                        
                                      
                                        <td class="table_two">
                                                <span class="orange">${l}</span> / ${t}
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
                `}const y=document.querySelector("div.for_modal");let u=[];function h(n,o=y){const a=localStorage.getItem("mess"),t=JSON.parse(a).find(c=>c.id===n);console.log(t),console.log(t.id),o.innerHTML=b(t);const e=document.querySelector("button.arange_button"),s=document.querySelector("button.white_button");e.addEventListener("click",c=>{console.log("orange!"),u.some(d=>d.id===t.id)?u=u.filter(d=>d.id!==t.id):(u.push(t),localStorage.setItem("watched",JSON.stringify(u)),JSON.parse(localStorage.getItem("watched"))),c.stopPropagation()}),s.addEventListener("click",c=>{c.stopPropagation()});const r=document.querySelector("div.cross"),i=document.querySelector(".backdrop");i.addEventListener("click",c=>{console.log(c.target),c.target===i&&(console.log("whoa!"),g(o))}),r.addEventListener("click",()=>{g(o),r.removeEventListener("click",()=>{}),window.removeEventListener("keydown",()=>{}),e.removeEventListener("click",()=>{}),s.removeEventListener("click",()=>{})})}function g(n){n.innerHTML=""}const w=document.querySelector(".gallery");function S(n,o=w,a){const l=n.map(({poster_path:e,id:s,title:r,release_date:i},c)=>{let d=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${e}" alt="${r}">`;return e||(d=`<img class="img_of_card" src=${m} alt="No image">`),`
                                                        <li class="card" id=${s}>
                                                            ${d}
    <div class="card_box">
        <h1 class="card_title">${r}</h1>
        <h2 class="card_jenre">Drama, Comedy | ${Number.parseInt(i)||"No date"}</h2>
    </div>
                                                        </li>                                              
                                                        `}).join("");o.innerHTML=l,o.addEventListener("click",t);function t(e){window.addEventListener("keydown",c=>{c.code==="Escape"&&g(a)});const r=e.target.closest(".card");console.log(r);const i=Number(r.getAttribute("id"));h(i,a)}}console.log("library");document.querySelector(".ul_library");document.querySelector(".for_modal_lib");const v=JSON.parse(localStorage.getItem("watched"));console.log(v);p();export{p as f,S as r};
//# sourceMappingURL=library-BMALZQVF.js.map
