export function to(arr, oneObj, keyLoc){
                   
                    if(arr.some(itm => itm.id === oneObj.id)){
                       arr = arr.filter(itm=>itm.id!==oneObj.id);
                            // console.log(arr01);
                       localStorage.setItem(keyLoc, JSON.stringify(arr));
                    //    let kitWatched = JSON.parse(localStorage.getItem("watched"));
                    //    renderLayout(kitWatched, ulLibrary, forModalLib);     
                    }else{
                       watchedArr.push(oneObj);
                       localStorage.setItem(keyLoc, JSON.stringify(arr));
                    //    let kitWatched = JSON.parse(localStorage.getItem('watched'));
                    //    renderLayout(kitWatched, ulLibrary, forModalLib);  
                         }
                    

}