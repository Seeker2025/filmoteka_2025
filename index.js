/* empty css                      */import{a as u}from"./assets/vendor-CJ4cOYKs.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const a=document.querySelector("div.for_modal");function m(o){const n=localStorage.getItem("mess"),r=JSON.parse(n).find(i=>i.id===o),e=`
        <div class = "modal">
             <h1>${r.title}</h1>
             <h2 class="cross">X</h2>
             <img src="https://image.tmdb.org/t/p/w500${r.poster_path}" width="150" alt="">
        </div>
                `;a.innerHTML=e;const t=document.querySelector("h2.cross"),c=document.querySelector("div.modal");document.body.addEventListener("click",i=>{i.target===c&&(console.log("Whoa!"),d())}),t.addEventListener("click",()=>{d(),t.removeEventListener("click",()=>{}),window.removeEventListener("keydown",()=>{})})}function d(){a.innerHTML=""}const l=document.querySelector(".gallery");document.querySelector(".section");document.querySelector("body");function f(o){const n=o.map(({poster_path:s,id:r},e)=>`
        <li class="card" id=${r}>
            <h2>${r}</h2>
           <img src="https://image.tmdb.org/t/p/w500${s}" width="" alt="">
           
        </li>                                              
        `).join("");l.insertAdjacentHTML("beforeend",n)}l.addEventListener("click",g);function g(o){window.addEventListener("keydown",e=>{e.code==="Escape"&&d()});const s=o.target.closest(".card");console.log(s);const r=Number(s.getAttribute("id"));m(r)}const y="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWY1ZmQwYjgzOGJmMmEyNTlmZjA2Y2I3NTk2ODAzNyIsIm5iZiI6MTY3MDIyNjI2NC4xMzIsInN1YiI6IjYzOGRhMTU4MTI4M2U5MDA5NzY3Njg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LbbNBAE2uu7qSjmBFjXYtTYw99nAa-BxDgIdgH9cD08",h="https://api.themoviedb.org/3/trending/movie/day?language=en-US";async function p(){try{await u.get(h,{headers:{"Content-Type":"application/json",Authorization:y}}).then(o=>{localStorage.setItem("mess",JSON.stringify(o.data.results)),f(o.data.results)})}catch(o){console.log(o)}}p();
//# sourceMappingURL=index.js.map
