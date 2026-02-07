export function toFun(oneObj, keyLoc){
    let arr = JSON.parse(localStorage.getItem(keyLoc)) ?? [];
                   
                    if(arr.some(itm => itm.id === oneObj.id)){
                       arr = arr.filter(itm=>itm.id!==oneObj.id);
                       localStorage.setItem(keyLoc, JSON.stringify(arr));
                    }else{
                       arr.push(oneObj);
                       localStorage.setItem(keyLoc, JSON.stringify(arr));
                    }
}