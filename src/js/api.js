
import axios from 'axios';
import {  renderLayout } from './render';
import Pagination from  'tui-pagination'; 
import { options,
         container
 } from './pagination.js';
// console.log(container);

// const APIKey = '3af5fd0b838bf2a259ff06cb75968037';
const bearer = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWY1ZmQwYjgzOGJmMmEyNTlmZjA2Y2I3NTk2ODAzNyIsIm5iZiI6MTY3MDIyNjI2NC4xMzIsInN1YiI6IjYzOGRhMTU4MTI4M2U5MDA5NzY3Njg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LbbNBAE2uu7qSjmBFjXYtTYw99nAa-BxDgIdgH9cD08';
const BASE_URL01 = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US&&page=4';
const BASE_URL02 = 'https://api.themoviedb.org/3/trending/movie/day';
// const BASE_URL_people = 'https://api.themoviedb.org/3/trending/person/day?language=en-US';
// const BASE_URL_collections = 'https://api.themoviedb.org/3/collection/collection_id?language=en-US';
const title = 'Pulp fiction';
const title02 = 'Batman';
const BASE_mov=`https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`;
const BASE_mov02 = 'https://api.themoviedb.org/3/search/movie';
export const BASE_URL = 'https://api.themoviedb.org/3/';
export const trending = 'trending/movie/day';
export const search = 'search/movie'

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
        renderLayout(response.data.results);

                                console.log(response.data);
                                const { results, total_results, total_pages }=response.data;
                                console.log(results, total_results, total_pages);
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
