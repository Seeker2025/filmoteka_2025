import{r as n,n as y}from"./assets/render-DSDfpURu.js";console.log("library");console.log(n);const f=n;console.log(f);const i=document.querySelector("ul.ul_library"),d=document.querySelector(".for_modal_lib");console.log(d);console.log(i);const m=JSON.parse(localStorage.getItem("watched"));console.log(m);function h(g,c,r){const u=g.map(({poster_path:e,id:l,title:o,release_date:t},a)=>{let s=`<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${e}" alt="${o}">`;return e||(s=`<img class="img_of_card" src=${y} alt="No image">`),`
                                                         <li class="card" id=${l}>
                                                             ${s}
     <div class="card_box">
         <h1 class="card_title">${o}</h1>
         <h2 class="card_jenre">Drama, Comedy | ${Number.parseInt(t)||"No date"}</h2>
     </div>
                                                         </li>                                              
                                                         `}).join("");c.innerHTML=u,c.addEventListener("click",b);function b(e){window.addEventListener("keydown",a=>{a.code==="Escape"&&toCloseModal(r)});const o=e.target.closest(".card"),t=Number(o.getAttribute("id"));toShowModalWin(t,r)}}h(m,i,d);
//# sourceMappingURL=library.js.map
