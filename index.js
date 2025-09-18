/* empty css                      */import{a as d}from"./assets/vendor-CJ4cOYKs.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const i=document.querySelector("div.for_modal");function u(o){const n=localStorage.getItem("mess"),s=JSON.parse(n);console.log(s),console.log(o);const r=s.find(c=>c.id===o);console.log(r);const e=`
        <div class = "modal">
             <h1>${r.title}</h1>
             <h2 class="cross">X</h2>
             <img src="https://image.tmdb.org/t/p/w500${r.poster_path}" width="150" alt="">
        </div>
                `;i.innerHTML=e;const t=document.querySelector(".cross");console.log(t),t.addEventListener("click",()=>{l(),t.removeEventListener("click",()=>{})})}function l(){i.innerHTML=""}const a=document.querySelector(".gallery");document.querySelector(".section");document.querySelector("body");function m(o){const n=o.map(({poster_path:s,id:r},e)=>`
        <li class="card" id=${r}>
            <h2>${r}</h2>
           <img src="https://image.tmdb.org/t/p/w500${s}" width="200" alt="">
           
        </li>                                              
        `).join("");a.insertAdjacentHTML("beforeend",n)}a.addEventListener("click",f);function f(o){const s=o.target.closest(".card"),r=Number(s.getAttribute("id"));console.log(r),u(r)}const g="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWY1ZmQwYjgzOGJmMmEyNTlmZjA2Y2I3NTk2ODAzNyIsIm5iZiI6MTY3MDIyNjI2NC4xMzIsInN1YiI6IjYzOGRhMTU4MTI4M2U5MDA5NzY3Njg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LbbNBAE2uu7qSjmBFjXYtTYw99nAa-BxDgIdgH9cD08",y="https://api.themoviedb.org/3/trending/movie/day?language=en-US";async function h(){try{await d.get(y,{headers:{"Content-Type":"application/json",Authorization:g}}).then(o=>{localStorage.setItem("mess",JSON.stringify(o.data.results)),m(o.data.results)})}catch(o){console.log(o)}}h();window.addEventListener("keydown",p);function p(o){o.code==="Escape"&&l()}
//# sourceMappingURL=index.js.map
