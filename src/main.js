import { 
            getAPIdata,
            trending,
            BASE_URL,
            search
 }                          from './js/api';
import { footerScaleJS }    from './js/footer';
import { showLoader }       from './js/loader';

// showLoader();
getAPIdata( BASE_URL, trending);
footerScaleJS();

                            const form = document.querySelector('.js_form');
                            form.addEventListener('submit', (evt)=>{
                            evt.preventDefault();
                            const movie = evt.currentTarget.elements.search.value;
                            showLoader();
                            getAPIdata( BASE_URL, search, movie);
                            form.reset();
                            })


