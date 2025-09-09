/* empty css                      */import{a}from"./assets/vendor-CJ4cOYKs.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const s=document.querySelector(".gallery"),l=document.querySelector(".section");function d(o){const r=o.map(({poster_path:n})=>`
        <li class="card">
            <h2></h2>
           <img src="https://image.tmdb.org/t/p/w500${n}" width="200" alt="">
        </li>
    `).join("");s.insertAdjacentHTML("beforeend",r)}s.addEventListener("click",u);function u(o){o.target,m()}function m(o){l.insertAdjacentHTML("beforeend",`
                                                      <div class="background">   
                                                            <div class="modal">
                                                            <h3 class="cross">X</h3>
                                                            <h2>Modal</h2>
                                                            </div>
                                                         
                                                        </div>
                                                        `);const n=document.querySelector(".cross");document.querySelector(".background"),document.querySelector(".modal"),n.addEventListener("click",f)}function f(){console.log("Hi!")}const y="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWY1ZmQwYjgzOGJmMmEyNTlmZjA2Y2I3NTk2ODAzNyIsIm5iZiI6MTY3MDIyNjI2NC4xMzIsInN1YiI6IjYzOGRhMTU4MTI4M2U5MDA5NzY3Njg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LbbNBAE2uu7qSjmBFjXYtTYw99nAa-BxDgIdgH9cD08",g="https://api.themoviedb.org/3/trending/movie/day?language=en-US";async function h(){try{await a.get(g,{headers:{"Content-Type":"application/json",Authorization:y}}).then(o=>{console.log(o.data.results[0]),d(o.data.results)})}catch(o){console.log(o)}}h();
//# sourceMappingURL=index.js.map
