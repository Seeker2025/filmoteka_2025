export function toForFind(elem, key){
    const upperLi = elem.closest('.card');
    const id = Number(upperLi.getAttribute('id'));
    const arrAll = JSON.parse(localStorage.getItem(key));
    const oneObj = arrAll.find(itm => itm.id === id);
    return oneObj;
};

