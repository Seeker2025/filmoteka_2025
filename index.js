import"./assets/library-CbvY5W3E.js";import{a as w,P as _}from"./assets/vendor-D0nrVKD2.js";const E=document.querySelector(".tui-pagination"),u={totalItems:20,itemsPerPage:10,visiblePages:5,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="buttons_other tui-page-btn">{{page}}</a>',currentPage:'<strong class="button_orange tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="arrow tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="arrow tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="dots tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">. . .</span></a>'}},b=document.querySelector(".box");function S(){b.style.visibility="visible"}function N(){b.style.visibility="hidden"}const L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZVBCsAgDASXvmR/aH/cp1gPHkqRmjRqEDLgRdcMiBogCIKFnGVQkWfdY5bmMi7I5KzZDKOcj0I9uSY7TC7JDJd/rU2Tt+amwJdoibQl/y09sAmEw1ETDpeLcHhOhMMHQkVBTbaLpUkkGEnQt0WzNAgCMTf64Es4we8RJwAAAABJRU5ErkJggg==",h="/filmoteka_2025/assets/no_img02-C_eq9g-1.png";function M({poster_path:e,title:t,popularity:s,vote_average:o,vote_count:a,overview:c,genre_ids:r}){let i=`<img class="img_modal" src="https://image.tmdb.org/t/p/w500${e}" alt="${t}">`;return e||(i=`<img src=${h} alt="No image">`),`<div class="backdrop">
                <div class = "modal">
                        <div class="cross">
                        
                                
                                        <img src=${L} alt="close">
                                        
                        
                        </div>

                                ${i}
                <table>
                           <caption>${t}</caption>
                                <tr>
                                        <td class="table_cell">
                                                <span>Vote / Votes</span>
                                        </td>
                                        
                                      
                                        <td class="table_two">
                                                <span class="orange">${o}</span> / ${a}
                                        </td>

                                        
                                        
                                </tr>

                                <tr>
                                        <td class="table_cell">
                                                <span>Popularity</span>
                                        </td>

                                        <td class="table_two">
                                                ${s}
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
        ${c||"Unfortunately, this film does not have a description yet."}
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
                `}let l=JSON.parse(localStorage.getItem("watched"))??[];function T(e){console.log("orange!"),l.some(t=>t.id===e.id)?l=l.filter(t=>t.id!==e.id):(l.push(e),localStorage.setItem("watched",JSON.stringify(l)),JSON.parse(localStorage.getItem("watched")))}function C(e){console.log("white")}function k(e,t){const s=localStorage.getItem("mess"),a=JSON.parse(s).find(n=>n.id===e);console.log(a),console.log(a.id),t.innerHTML=M(a);const c=document.querySelector("button.arange_button"),r=document.querySelector("button.white_button");c.addEventListener("click",n=>{T(a),n.stopPropagation()}),r.addEventListener("click",n=>{C(),n.stopPropagation()});const i=document.querySelector("div.cross"),d=document.querySelector(".backdrop");d.addEventListener("click",n=>{console.log(n.target),n.target===d&&(console.log("whoa!"),m(t))}),i.addEventListener("click",()=>{m(t),i.removeEventListener("click",()=>{}),window.removeEventListener("keydown",()=>{}),c.removeEventListener("click",()=>{}),r.removeEventListener("click",()=>{})})}function m(e){e.innerHTML=""}const y=document.querySelector(".for_modal"),I=document.querySelector(".gallery"),p=y;console.log(y);class ${constructor({arr:t,noImg:s}){this.arr=t,this.ulContainer=I,this.noImg=s}renderLayout(){const t=this.arr.map(({poster_path:s,id:o,title:a,release_date:c},r)=>{let i=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${s}" alt="${a}">`;return s||(i=`<img class="img_of_card" src=${this.noImg} alt="No image">`),`
                                                            <li class="card" id=${o}>
                                                                ${i}
        <div class="card_box">
            <h1 class="card_title">${a}</h1>
            <h2 class="card_jenre">Drama, Comedy | ${Number.parseInt(c)||"No date"}</h2>
        </div>
                                                            </li>                                              
                                                            `}).join("");this.ulContainer.innerHTML=t}}I.addEventListener("click",B);function B(e){window.addEventListener("keydown",a=>{a.code==="Escape"&&toCloseModal(p)});const s=e.target.closest(".card");console.log(s);const o=Number(s.getAttribute("id"));k(o,p)}const J="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWY1ZmQwYjgzOGJmMmEyNTlmZjA2Y2I3NTk2ODAzNyIsIm5iZiI6MTY3MDIyNjI2NC4xMzIsInN1YiI6IjYzOGRhMTU4MTI4M2U5MDA5NzY3Njg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LbbNBAE2uu7qSjmBFjXYtTYw99nAa-BxDgIdgH9cD08",f="https://api.themoviedb.org/3/",D="trending/movie/day",O="search/movie";async function g(e,t,s,o=1){try{await w.get(`${e}${t}`,{headers:{"Content-Type":"application/json",Authorization:J},params:{query:s,include_adult:!1,page:o}}).then(a=>{localStorage.setItem("mess",JSON.stringify(a.data.results)),a.data&&N(),console.log(a.data.results),new $({arr:a.data.results,noImg:h}).renderLayout();const{results:r,total_results:i,total_pages:d}=a.data;let n=d;o<n&&(u.totalItems=n,u.page=o,new _(E,u).on("afterMove",function(v){o=v.page,g(e,t,s,o)}))})}catch(a){console.log(a)}}g(f,D);const A=document.querySelector(".js_form");A.addEventListener("submit",e=>{e.preventDefault();const t=e.currentTarget.elements.search.value;S(),g(f,O,t),A.reset()});
//# sourceMappingURL=index.js.map
