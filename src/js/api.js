import axios from 'axios';
import {  renderLayout } from './render.js';
// console.log(renderLayout);

// const APIKey = '3af5fd0b838bf2a259ff06cb75968037';
const bearer = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWY1ZmQwYjgzOGJmMmEyNTlmZjA2Y2I3NTk2ODAzNyIsIm5iZiI6MTY3MDIyNjI2NC4xMzIsInN1YiI6IjYzOGRhMTU4MTI4M2U5MDA5NzY3Njg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LbbNBAE2uu7qSjmBFjXYtTYw99nAa-BxDgIdgH9cD08';
const BASE_URL = 'https://api.themoviedb.org/3/account/16273990';

export async function getAPIdata(){
    try{
        await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US', {
                          headers: {
                            'Content-Type': 'application/json',
                            Authorization: bearer,
                                    }
 })
                  .then(response => {
                      console.log(response.data.results)
                      renderLayout(response.data.results);
                    }
)
 
    }catch(error){
    console.log(error);
    }
}


// it works
// export async function getAPIdata(){
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWY1ZmQwYjgzOGJmMmEyNTlmZjA2Y2I3NTk2ODAzNyIsIm5iZiI6MTY3MDIyNjI2NC4xMzIsInN1YiI6IjYzOGRhMTU4MTI4M2U5MDA5NzY3Njg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LbbNBAE2uu7qSjmBFjXYtTYw99nAa-BxDgIdgH9cD08',
//   }
// };

// fetch(BASE_URL, options)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
// }