export function toForFind(elem, key){
    
    
    const upperLi = elem.closest('.card');
    const id = Number(upperLi.getAttribute('id'));
    // console.log(id);
    const arrAll = JSON.parse(localStorage.getItem(key))
    if(!arrAll) return;
    const oneObj = arrAll.find(itm => itm.id === id);
    return oneObj;
};

