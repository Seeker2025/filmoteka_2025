let watchedArr = JSON.parse(localStorage.getItem('watched')) ?? [];
let queuedArr = JSON.parse(localStorage.getItem('queued')) ?? [];

export function toWatch(oneObj){
                   
                    if(watchedArr.some(itm => itm.id === oneObj.id)){
                       watchedArr = watchedArr.filter(itm=>itm.id!==oneObj.id);
                            // console.log(arr01);
                       localStorage.setItem('watched', JSON.stringify(watchedArr));
                    //    let kitWatched = JSON.parse(localStorage.getItem("watched"));
                    //    renderLayout(kitWatched, ulLibrary, forModalLib);     
                    }else{
                       watchedArr.push(oneObj);
                       localStorage.setItem('watched', JSON.stringify(watchedArr));
                    //    let kitWatched = JSON.parse(localStorage.getItem('watched'));
                    //    renderLayout(kitWatched, ulLibrary, forModalLib);  
                         }
                    

}

export function toQueue(oneObj){
                    
                     if(queuedArr.some(itm => itm.id === oneObj.id)){
                           queuedArr = queuedArr.filter(itm=>itm.id!==oneObj.id);
                           localStorage.setItem('queued', JSON.stringify(queuedArr));
                     }else{
                          queuedArr.push(oneObj);
                          localStorage.setItem('queued', JSON.stringify(queuedArr));

                      }
                      
}