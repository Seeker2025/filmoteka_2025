import    axios                 from 'axios';
const bearer = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWY1ZmQwYjgzOGJmMmEyNTlmZjA2Y2I3NTk2ODAzNyIsIm5iZiI6MTY3MDIyNjI2NC4xMzIsInN1YiI6IjYzOGRhMTU4MTI4M2U5MDA5NzY3Njg3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LbbNBAE2uu7qSjmBFjXYtTYw99nAa-BxDgIdgH9cD08';

export async function apiForTrl(main, id){
         try{
         const response = await axios.get( `${main}movie/${id}/videos`, {

                        headers: {
                            'Content-Type': 'application/json',
                        Authorization: bearer,
                            }
                           
 });
    console.log(response.data);
    console.log(response.data.results[0]?.official);
    
    return response.data;
            
    }catch(error){
    console.log(error);
    
    }
}


export function toIframe(div, videoKey){
    
    div.innerHTML = `
            <iframe  class="iframe"
            src="https://www.youtube.com/embed/${videoKey}?autoplay=1"
            frameborder="0"
            allowfullscreen>
            </iframe>
                   `;
    
};

