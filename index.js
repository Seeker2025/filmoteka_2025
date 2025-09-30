/* empty css                      */import{a as u}from"./assets/vendor-CJ4cOYKs.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l=document.querySelector("div.for_modal");function m(o){const n=localStorage.getItem("mess"),s=JSON.parse(n).find(i=>i.id===o),e=`
        <div class="backdrop">
                <div class = "modal">
                     <h1>${s.title}</h1>
                     <h2 class="cross">X</h2>
                     <img src="https://image.tmdb.org/t/p/w500${s.poster_path}" width="150" alt="">
                </div>
        </div>   
                `;l.innerHTML=e;const t=document.querySelector("h2.cross"),c=document.querySelector(".backdrop");c.addEventListener("click",i=>{console.log(i.target),i.target===c&&(console.log("whoa!"),a())}),t.addEventListener("click",()=>{a(),t.removeEventListener("click",()=>{}),window.removeEventListener("keydown",()=>{})})}function a(){l.innerHTML=""}const d=document.querySelector(".gallery");document.querySelector(".section");document.querySelector("body");function f(o){const n=o.map(({poster_path:r,id:s},e)=>`
        <li class="card" id=${s}>
            <h2>${s}</h2>
           <img src="https://image.tmdb.org/t/p/w500${r}" width="" alt="">
           
        </li>                                              
        `).join("");d.insertAdjacentHTML("beforeend",n)}d.addEventListener("click",g);function g(o){window.addEventListener("keydown",e=>{e.code==="Escape"&&a()});const r=o.target.closest(".card");console.log(r);const s=Number(r.getAttribute("id"));m(s)}const p="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWY1ZmQwYjgzOGJmMmEyNTlmZjA2Y2I3NTk2ODAzNyIsIm5iZiI6MTY3MDIyNjI2NC4xMzIsInN1YiI6IjYzOGRhMTU4MTI4M2U5MDA5NzY3Njg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LbbNBAE2uu7qSjmBFjXYtTYw99nAa-BxDgIdgH9cD08",y="Batman",h="https://api.themoviedb.org/3/",I="trending/movie/day";async function b(o,n){try{await u.get(`${o}${n}`,{headers:{"Content-Type":"application/json",Authorization:p},params:{query:y,include_adult:!1,page:1}}).then(r=>{localStorage.setItem("mess",JSON.stringify(r.data.results)),f(r.data.results)})}catch(r){console.log(r)}}b(h,I);const L=document.querySelector(".js_form");L.addEventListener("submit",o=>{o.preventDefault(),o.currentTarget.elements.search.value,console.log(o.currentTarget.elements.search.value)});
//# sourceMappingURL=index.js.map
