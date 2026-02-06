 
import    axios                 from 'axios';
import {  renderLayout               } from './render';
import    Pagination            from  'tui-pagination'; 
import {  options,
          container
                                     } from './pagination.js';
import {  hideLoader                 } from './loader.js';
import {  toForFind                  } from './toForFind.js'
import {  toChangeTxtOnBtn           } from './toChangeText.js';
import {  toSwitchUIforLiCard        } from './switch.js';
import {
          modalMarkup,
          toForButtonCross 
                                     } from './modal_markup.js';
import {  toFun                      } from './toFun.js';
// import{   apiForTrl } from './apiForTrl';

const KEY = 'mess';

const forModal = document.querySelector('.for_modal');
const galleryRef = document.querySelector('.gallery');
const nothing = document.querySelector('.nothing');
const tuiHidden = document.querySelector('.tui-pagination');

let queuedArr = JSON.parse(localStorage.getItem('queued')) ?? [];
 
const bearer = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWY1ZmQwYjgzOGJmMmEyNTlmZjA2Y2I3NTk2ODAzNyIsIm5iZiI6MTY3MDIyNjI2NC4xMzIsInN1YiI6IjYzOGRhMTU4MTI4M2U5MDA5NzY3Njg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LbbNBAE2uu7qSjmBFjXYtTYw99nAa-BxDgIdgH9cD08';

export async function getAPIdata(
                                     main,
                                     part,
                                     whatLookingFor,
                                     sense,
                                     onePage = 1
                                ){
    try{
        await axios.get( `${main}${part}`, {

                        headers: {
                            'Content-Type': 'application/json',
                        Authorization: bearer,
                            },
                            params: {
                            query: whatLookingFor,
                            include_adult: false,
                            page: onePage,
                            
                            }
 })
                .then(response => {
        localStorage.setItem(KEY, JSON.stringify(response.data.results));
        console.log(response.data);
        
                                ///// Loader
                        if(response.data) hideLoader();
                                
                              
                        // if(part === 'search/movie'){                       
                                
                                //console.log(response.data.genres);
                                ///// Search result not successful
                                if(!response.data.results?.length){
                                nothing.classList.add('nothing_vis');
                                tuiHidden.classList.add('tui_hidden');
                                }else{
                                nothing.classList.remove('nothing_vis');
                                tuiHidden.classList.remove('tui_hidden');    
                                }
                                
                                
        renderLayout(response.data.results, galleryRef); 
      
        const cards = document.querySelectorAll('li.card_js');
        // console.log(sense);
        toSwitchUIforLiCard(cards, sense);

        galleryRef.addEventListener('click', (evt)=>{
                if(evt.target.closest('.card_js')){
               
                const oneObj = toForFind(evt.target, KEY);
                // apiForTrl(main, oneObj.id);
                modalMarkup(oneObj, forModal);

    //////smooth appearance of a modal window            
                const modalOpas = document.querySelector('div.modal');
                // console.log(modalOpas);
                setTimeout(() => { modalOpas.classList.add('modal_opas')}, 10);
                
        const btnAddToWatch = document.querySelector('button.arange_button');     
        const btnAddToQueue = document.querySelector('button.white_button'); 

        toChangeTxtOnBtn(
            btnAddToWatch,
            oneObj,
            'watched',
            'REMOVE FROM WATCHED',
            'ADD TO WATCHED'
        ); 

        toChangeTxtOnBtn(
            btnAddToQueue,
            oneObj,
            'queued',
            'REMOVE FROM QUEUE',
            'ADD TO QUEUE'
        );      

        btnAddToWatch.addEventListener('click', (evt)=>{
        let watchedArr = JSON.parse(localStorage.getItem('watched')) ?? [];
                                toFun(
                                                                        watchedArr, 
                                                                        oneObj,
                                                                        'watched'
                                                                        );
        toChangeTxtOnBtn(
            btnAddToWatch,
            oneObj,
            'watched',
            'REMOVE FROM WATCHED',
            'ADD TO WATCHED'
        ); 

                                 evt.stopPropagation();
                                 });
        
        btnAddToQueue.addEventListener('click', (evt)=>{
                                // toQueue(oneObj);
                                 toFun(
                                                                          queuedArr,
                                                                          oneObj,
                                                                          'queued'
                                                                        );
        toChangeTxtOnBtn(
            btnAddToQueue,
            oneObj,
            'queued',
            'REMOVE FROM QUEUE',
            'ADD TO QUEUE'
        );                               
                                 evt.stopPropagation();
                                 });
                toForButtonCross(forModal, btnAddToWatch, btnAddToQueue);

            }
        })
       
                        const { results, total_results, total_pages } = response.data;
                        let totalPages = total_pages;
    if (onePage < totalPages) {
        options.totalItems = totalPages;
        options.page = onePage;
        const pagination = new Pagination(container, options);
        pagination.on('afterMove', function (event) {
        onePage = event.page;
        getAPIdata(main, part,  whatLookingFor, sense, onePage);
    });
    }
}
)
 
    }catch(error){
    console.log(error);
    renderLayout('mistake404', galleryRef); 
    }
}
