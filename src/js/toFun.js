let watchedArr = JSON.parse(localStorage.getItem('watched')) ?? [];

export function toWatch(oneObj){
     console.log('orange!');
                    //  watchedArr.some(itm => itm.id === oneObj.id)
                   
                   
                    if(watchedArr.some(itm => itm.id === oneObj.id)){
                       watchedArr = watchedArr.filter(itm=>itm.id!==oneObj.id);
                            // console.log(arr01);
                    //    localStorage.setItem("watched", JSON.stringify(watchedArr));
                    //    let kitWatched = JSON.parse(localStorage.getItem("watched"));
                    //    renderLayout(kitWatched, ulLibrary, forModalLib);     
                    }else{
                       watchedArr.push(oneObj);
                       localStorage.setItem('watched', JSON.stringify(watchedArr));
                       let kitWatched = JSON.parse(localStorage.getItem('watched'));
                    //    renderLayout(kitWatched, ulLibrary, forModalLib);  
                         }
                    

}

export function toQueue(oneObj){
     console.log('white');
}