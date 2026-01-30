import    axios                 from 'axios';
const bearer = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWY1ZmQwYjgzOGJmMmEyNTlmZjA2Y2I3NTk2ODAzNyIsIm5iZiI6MTY3MDIyNjI2NC4xMzIsInN1YiI6IjYzOGRhMTU4MTI4M2U5MDA5NzY3Njg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LbbNBAE2uu7qSjmBFjXYtTYw99nAa-BxDgIdgH9cD08';
const genre = 'genre/movie/list';

export async function apiForGen(main, genre){
    // localStorage.removeItem('key');  
         try{
         await axios.get( `${main}${genre}`, {

                        headers: {
                            'Content-Type': 'application/json',
                        Authorization: bearer,
                            }
                           
 })
                .then(response => {  
                    
        localStorage.setItem('genres', JSON.stringify(response.data.genres));
                        
                                     
        });
    }catch(error){
    console.log(error);
    
    }
}
