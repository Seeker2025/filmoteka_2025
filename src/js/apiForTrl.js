import    axios                 from 'axios';
const bearer = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWY1ZmQwYjgzOGJmMmEyNTlmZjA2Y2I3NTk2ODAzNyIsIm5iZiI6MTY3MDIyNjI2NC4xMzIsInN1YiI6IjYzOGRhMTU4MTI4M2U5MDA5NzY3Njg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LbbNBAE2uu7qSjmBFjXYtTYw99nAa-BxDgIdgH9cD08';

export async function apiForTrl(main, id){
    // localStorage.removeItem('key');  
         try{
         await axios.get( `${main}movie/${id}/videos`, {

                        headers: {
                            'Content-Type': 'application/json',
                        Authorization: bearer,
                            }
                           
 })
                .then(response => {  
                    console.log(response.data);
                    let key = null;
                    key = response.data.results[0].key;
                    if(!response.data.results?.length){
                        key = null;
                        return key;
                    }
                    return key;
                    // localStorage.removeItem('key'); 
                    // localStorage.setItem('key', JSON.stringify(key));
                                     
        });
    }catch(error){
    console.log(error);
    
    }
}


export function toIframe(videoKey){
    if(videoKey === null) return null;

    return `
            <iframe
            src="https://www.youtube.com/embed/${videoKey}"
            frameborder="0"
            allowfullscreen>
            </iframe>
    
            `;
};


// export async function getTrailer(id) {
//   try {
//     const searchParams = new URLSearchParams({
//       'Content-Type': 'application/json',
//       Authorization: bearer,
//       language: 'en',
//     });
//     const url = `https://api.themoviedb.org/3/movie/${id}/videos?${searchParams}`;
//     const response = await axios.get(url);
//     if (!response) {
//       throw new Error('Something goes wrong');
//     }
//     response.then(response =>console.log(response.data));
//   } catch (error) {
//     console.log(error.message);
//   }
// }
