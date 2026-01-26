import { 
            getAPIdata,

 }                          from './js/api';
import { footerScaleJS }    from './js/footer';
import { showLoader }       from './js/loader';
import { toSwitchToDarkUI } from './js/switch';

const bodyIndex = document.querySelector('body#index');
const containerHead = document.querySelector('.container_head');
const inputText = document.querySelector('input.input_text');
const switchInp = document.querySelector('input.switch');
    console.log(switchInp); 

const BASE_URL = 'https://api.themoviedb.org/3/';
const trending = 'trending/movie/day';
const search   = 'search/movie';
const fullInformation = '';

getAPIdata( BASE_URL, trending);


                let movie = null;

                            const form = document.querySelector('.js_form');
                            form.addEventListener('submit', (evt)=>{
                            evt.preventDefault();
                            movie = evt.currentTarget.elements.search.value;
                            showLoader();
                            getAPIdata(BASE_URL, search, movie);
                            form.reset();
                            });

////// switching UI for the Index page
const ui = JSON.parse(localStorage.getItem('ui'));
if(ui==='dark'){ 
    switchInp.checked = true;
    toSwitchToDarkUI(bodyIndex, containerHead, inputText);
    const sense = switchInp.checked;
    getAPIdata(BASE_URL, trending, null, sense);
    }

    
switchInp.addEventListener('change', (evt)=>{
    // console.log(evt.target.checked);
    console.log(switchInp.checked);
    if(evt.target.checked) localStorage.setItem('ui', JSON.stringify('dark'));
    else localStorage.setItem('ui', JSON.stringify('light'));  
    toSwitchToDarkUI(bodyIndex, containerHead, inputText);
    let sense = evt.target.checked;
    console.log(sense);
    if(movie) getAPIdata(BASE_URL, search, movie, sense);
    else getAPIdata(BASE_URL, trending, null, sense);

})    


