import { 
            getAPIdata,
            trending,
            BASE_URL,
            search
 }                          from './js/api';
import { footerScaleJS }    from './js/footer';
import { showLoader }       from './js/loader';
import { toSwitchToDarkUI } from './js/switch';
// console.log(toSwitchToDarkUI);


// import { galleryRef } from './js/render';
// console.log(galleryRef);


// showLoader();
getAPIdata( BASE_URL, trending);
// footerScaleJS();

                            const form = document.querySelector('.js_form');
                            form.addEventListener('submit', (evt)=>{
                            evt.preventDefault();
                            const movie = evt.currentTarget.elements.search.value;
                            showLoader();
                            getAPIdata( BASE_URL, search, movie);
                            form.reset();
                            });



const switchInp = document.querySelector('input.switch');
    console.log(switchInp); 
    
switchInp.addEventListener('change', (evt)=>{
    console.log(evt.target.checked);
    
    toSwitchToDarkUI(evt.target.checked);

})    


