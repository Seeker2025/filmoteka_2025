/* empty css                      */import{a as u}from"./assets/vendor-CJ4cOYKs.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const l=document.querySelector("div.for_modal");function m(t){const s=localStorage.getItem("mess"),r=JSON.parse(s).find(i=>i.id===t),e=`
        <div class="backdrop">
                <div class = "modal">
                     <h1>${r.title}</h1>
                     <h2 class="cross">X</h2>
                     <img src="https://image.tmdb.org/t/p/w500${r.poster_path}" width="150" alt="">
                </div>
        </div>   
                `;l.innerHTML=e;const o=document.querySelector("h2.cross"),c=document.querySelector(".backdrop");c.addEventListener("click",i=>{console.log(i.target),i.target===c&&(console.log("whoa!"),a())}),o.addEventListener("click",()=>{a(),o.removeEventListener("click",()=>{}),window.removeEventListener("keydown",()=>{})})}function a(){l.innerHTML=""}const d=document.querySelector(".gallery");document.querySelector(".section");document.querySelector("body");function f(t){const s=t.map(({poster_path:n,id:r},e)=>`
        <li class="card" id=${r}>
            <h2>${r}</h2>
           <img src="https://image.tmdb.org/t/p/w500${n}" width="" alt="">
           
        </li>                                              
        `).join("");d.insertAdjacentHTML("beforeend",s)}d.addEventListener("click",p);function p(t){window.addEventListener("keydown",e=>{e.code==="Escape"&&a()});const n=t.target.closest(".card");console.log(n);const r=Number(n.getAttribute("id"));m(r)}const g="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWY1ZmQwYjgzOGJmMmEyNTlmZjA2Y2I3NTk2ODAzNyIsIm5iZiI6MTY3MDIyNjI2NC4xMzIsInN1YiI6IjYzOGRhMTU4MTI4M2U5MDA5NzY3Njg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LbbNBAE2uu7qSjmBFjXYtTYw99nAa-BxDgIdgH9cD08",h="Pulp fiction",y="https://api.themoviedb.org/3/search/movie";async function I(){try{await u.get(y,{headers:{"Content-Type":"application/json",Authorization:g},params:{query:h}}).then(t=>{localStorage.setItem("mess",JSON.stringify(t.data.results)),f(t.data.results)})}catch(t){console.log(t)}}I();const b=document.querySelector(".js_form");b.addEventListener("submit",t=>{t.preventDefault(),console.log(t.currentTarget.elements.search.value)});
//# sourceMappingURL=index.js.map
