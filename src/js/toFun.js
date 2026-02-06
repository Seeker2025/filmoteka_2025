export function toFun(arr, oneObj, keyLoc){
                   
                    if(arr.some(itm => itm.id === oneObj.id)){
                       arr = arr.filter(itm=>itm.id!==oneObj.id);
                            console.log(arr);
                       localStorage.setItem(keyLoc, JSON.stringify(arr));
                    //    let kitWatched = JSON.parse(localStorage.getItem("watched"));
                    //    renderLayout(kitWatched, ulLibrary, forModalLib);     
                    }else{
                       arr.push(oneObj);
                       console.log(arr);
                       localStorage.setItem(keyLoc, JSON.stringify(arr));
                    //    let kitWatched = JSON.parse(localStorage.getItem('watched'));
                    //    renderLayout(kitWatched, ulLibrary, forModalLib);  
                         }
                    

}