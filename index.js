/* empty css                      */import{a as l}from"./assets/vendor-CJ4cOYKs.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const n=document.querySelector(".gallery");document.querySelector(".section");document.querySelector("body");function a(r){const i=r.map(({poster_path:o},s)=>`
        <li class="card">
            <h2></h2>
           <img src="https://image.tmdb.org/t/p/w500${o}" width="200" alt="">
       
 
                                                      <div class="backdrop">   
                                                            <div class="modal">
                                                                <h3 class="cross">X</h3>
                                                                <h2>Modal</h2>
                                                                <h2>${s}</h2>
           <img src="https://image.tmdb.org/t/p/w500${o}" width="100" alt="">
                                                            </div>
                                                      </div>
        </li>                                              
        `).join("");n.insertAdjacentHTML("beforeend",i)}n.addEventListener("click",d);function d(r){const o=r.target.closest(".card");console.log(o),o.classList.add("border"),o.classList.add("visible");const s=o.querySelector(".cross");console.log(s),s.addEventListener("click",e);function e(){console.log("cross_01"),setTimeout(()=>{o.classList.remove("visible")},2e3),s.removeEventListener("click",e)}}const u="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWY1ZmQwYjgzOGJmMmEyNTlmZjA2Y2I3NTk2ODAzNyIsIm5iZiI6MTY3MDIyNjI2NC4xMzIsInN1YiI6IjYzOGRhMTU4MTI4M2U5MDA5NzY3Njg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LbbNBAE2uu7qSjmBFjXYtTYw99nAa-BxDgIdgH9cD08",m="https://api.themoviedb.org/3/trending/movie/day?language=en-US";async function f(){try{await l.get(m,{headers:{"Content-Type":"application/json",Authorization:u}}).then(r=>{a(r.data.results)})}catch(r){console.log(r)}}f();
//# sourceMappingURL=index.js.map
