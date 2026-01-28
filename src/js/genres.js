

export function genres(genreOneObj){
    let newArr = [];
    const genresArr = JSON.parse(localStorage.getItem('genres')) ?? [];
   
    genresArr.map(itm=>{
        genreOneObj.map(idx=>{
        if(itm.id === idx) newArr.push(itm.name)
        })
     
    })
   return newArr;
}
