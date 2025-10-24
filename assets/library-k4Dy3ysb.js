(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function c(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=c(t);fetch(t.href,e)}})();const p=document.querySelector(".icon_js");function A(){setInterval(()=>{p.classList.toggle("icon_scale")},800)}const f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==",u="/filmoteka_2025/assets/no_img02-C_eq9g-1.png";function b({poster_path:l,title:o,popularity:c,vote_average:r,vote_count:t,overview:e,genre_ids:s}){let n=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${l}" alt="${o}">`;return l||(n=`<img src=${u} alt="No image">`),`<div class="backdrop">
                <div class = "modal">
                        <div class="cross">
                        
                                
                                        <img src=${f} alt="close">
                                        
                        
                        </div>

                                ${n}
                <table>
                           <caption>${o}</caption>
                                <tr>
                                        <td class="table_cell">
                                                <span>Vote / Votes</span>
                                        </td>
                                        
                                      
                                        <td class="table_two">
                                                <span class="orange">${r}</span> / ${t}
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
                `}let m=[];function h(l,o){const c=localStorage.getItem("mess"),t=JSON.parse(c).find(a=>a.id===l);console.log(t),console.log(t.id),o.innerHTML=b(t);const e=document.querySelector("button.arange_button"),s=document.querySelector("button.white_button");e.addEventListener("click",a=>{console.log("orange!"),m.some(d=>d.id===t.id)?m=m.filter(d=>d.id!==t.id):(m.push(t),localStorage.setItem("watched",JSON.stringify(m)),JSON.parse(localStorage.getItem("watched"))),a.stopPropagation()}),s.addEventListener("click",a=>{a.stopPropagation()});const n=document.querySelector("div.cross"),i=document.querySelector(".backdrop");i.addEventListener("click",a=>{console.log(a.target),a.target===i&&(console.log("whoa!"),g(o))}),n.addEventListener("click",()=>{g(o),n.removeEventListener("click",()=>{}),window.removeEventListener("keydown",()=>{}),e.removeEventListener("click",()=>{}),s.removeEventListener("click",()=>{})})}function g(l){l.innerHTML=""}const L=document.querySelector(".gallery");function E(l,o,c){const r=l.map(({poster_path:e,id:s,title:n,release_date:i},a)=>{let d=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${e}" alt="${n}">`;return e||(d=`<img class="img_of_card" src=${u} alt="No image">`),`
                                                        <li class="card" id=${s}>
                                                            ${d}
    <div class="card_box">
        <h1 class="card_title">${n}</h1>
        <h2 class="card_jenre">Drama, Comedy | ${Number.parseInt(i)||"No date"}</h2>
    </div>
                                                        </li>                                              
                                                        `}).join("");o.innerHTML=r,o.addEventListener("click",t);function t(e){window.addEventListener("keydown",a=>{a.code==="Escape"&&g(c)});const n=e.target.closest(".card");console.log(n);const i=Number(n.getAttribute("id"));h(i,c)}}class y{constructor({arr:o,ulContainer:c,modalBox:r}){this.arr=o,this.ulContainer=c,this.modalBox=r}renderLayout(){const o=this.arr.map(({poster_path:r,id:t,title:e,release_date:s},n)=>{let i=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${r}" alt="${e}">`;return r||(i=`<img class="img_of_card" src=${noImg} alt="No image">`),`
                                                            <li class="card" id=${t}>
                                                                ${i}
        <div class="card_box">
            <h1 class="card_title">${e}</h1>
            <h2 class="card_jenre">Drama, Comedy | ${Number.parseInt(s)||"No date"}</h2>
        </div>
                                                            </li>                                              
                                                            `}).join("");this.ulContainer.innerHTML=o,this.ulContainer.addEventListener("click",c);function c(r){window.addEventListener("keydown",n=>{n.code==="Escape"&&toCloseModal(modalBox)});const e=r.target.closest(".card");console.log(e);const s=Number(e.getAttribute("id"));toShowModalWin(s,modalBox)}}}console.log("library");const w=document.querySelector(".ul_library"),_=document.querySelector(".for_modal_lib");console.log(_);console.log(w);console.log(y);const v=JSON.parse(localStorage.getItem("watched"));console.log(v);A();export{A as f,L as g,E as r};
//# sourceMappingURL=library-k4Dy3ysb.js.map
