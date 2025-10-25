
import    axios                 from 'axios';
// import {  renderLayout, galleryRef  }        from './render';
import    Pagination            from  'tui-pagination'; 
import {  options,
          container
 }                              from './pagination.js';
import { hideLoader }           from './loader.js';

import { ToRender } from './class.js';


const forModal = document.querySelector('.for_modal');
const galleryRef = document.querySelector('.gallery');
// console.log(forModal);


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
        localStorage.setItem("mess", JSON.stringify(response.data.results));
        
                                if(response.data) hideLoader();
                                console.log(response.data.results);
        // renderLayout(response.data.results, galleryRef, forModal);
        const toRenderInIndex = new ToRender({
                                    arr: response.data.results,
                                    ulContainer: galleryRef,
                                    modalBox: forModal
                                    });
                                toRenderInIndex.renderLayout();
                                const { results, total_results, total_pages }=response.data;
                                // console.log(results, total_results, total_pages);
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
