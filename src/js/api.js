 
import    axios                 from 'axios';
import {  renderLayout  }       from './render';
import    Pagination            from  'tui-pagination'; 
import {  options,
          container
 }                              from './pagination.js';
import { hideLoader }           from './loader.js';
// import { bigModal } from './toShowModalWin.js';
import { toForFind } from './toForFind.js'
import {  toChangeTxtOnBtn } from './toChangeText.js';

// import { ToRender } from './class.js';
import  noImg  from '../img/no_img02.png';
// import { toShowModalWin } from './madal.js';
import { modalMarkup, toForButtonCross } from './modal_markup.js';
import { toWatch, toQueue } from './toFun.js';

const KEY = 'mess';

 const forModal = document.querySelector('.for_modal');
 const galleryRef = document.querySelector('.gallery');
 console.log(galleryRef);
 console.log(forModal);
 console.log(renderLayout);


const bearer = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWY1ZmQwYjgzOGJmMmEyNTlmZjA2Y2I3NTk2ODAzNyIsIm5iZiI6MTY3MDIyNjI2NC4xMzIsInN1YiI6IjYzOGRhMTU4MTI4M2U5MDA5NzY3Njg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LbbNBAE2uu7qSjmBFjXYtTYw99nAa-BxDgIdgH9cD08';

export const BASE_URL = 'https://api.themoviedb.org/3/';
export const trending = 'trending/movie/day';
export const search   = 'search/movie';

export async function getAPIdata(main, part,  whatLookingFor, onePage = 1){
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
        
                                if(response.data) hideLoader();
                                console.log(response.data.results);
        renderLayout(response.data.results, galleryRef);
        // renderLayout(0, galleryRef);
        galleryRef.addEventListener('click', (evt)=>{
            if(evt.target.closest('.card_js')){
               
                const oneObj = toForFind(evt.target, KEY);
                modalMarkup(oneObj, forModal);
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
                                toWatch(oneObj);
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
                                toQueue(oneObj);
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
       
                        const { results, total_results, total_pages }=response.data;
                        let totalPages = total_pages;
    if (onePage < totalPages) {
        options.totalItems = totalPages;
        options.page = onePage;
        const pagination = new Pagination(container, options);
        pagination.on('afterMove', function (event) {
        onePage = event.page;
        getAPIdata(main, part,  whatLookingFor, onePage);
    });
    }
        }
)
 
    }catch(error){
    console.log(error);
    }
}
