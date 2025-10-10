// import { modal_markup } from './js/modal_markup';
// const isObj = {
//     poster_path:1,
//     title:1,
//     popularity:1,
//     vote_average:1,
//     vote_count:1,
//     overview:1,
//     genre_ids:1,
// };
// console.log(modal_markup(isObj));





import { 
            getAPIdata,
            trending,
            BASE_URL,
            search
 }                          from './js/api';
import { footerScaleJS }    from './js/footer';

getAPIdata( BASE_URL, trending);
footerScaleJS();

                            const form = document.querySelector('.js_form');
                            form.addEventListener('submit', (evt)=>{
                            evt.preventDefault();
                            const movie = evt.currentTarget.elements.search.value
                            getAPIdata( BASE_URL, search, movie);
                            })


