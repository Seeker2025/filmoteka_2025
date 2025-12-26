export function toForFind(elem){
    const upperLi = elem.closest('.card');
    const id = Number(upperLi.getAttribute('id'));
    const arrAll = JSON.parse(localStorage.getItem('mess'));
    const oneObj = arrAll.find(itm => itm.id === id);
    return oneObj;
};

