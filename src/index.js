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
// console.log(switchInp02);

const bodyIndex = document.querySelector('body#index');
const containerHead = document.querySelector('.container_head');
const inputText = document.querySelector('input.input_text');




 console.log(inputText);


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
    
    toSwitchToDarkUI(bodyIndex, containerHead, inputText);

})    


