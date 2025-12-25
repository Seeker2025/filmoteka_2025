export function toForFind(elem){
    const upperLi = elem.closest('.card');
    const selectIDbyClick = Number(upperLi.getAttribute('id'));
    return selectIDbyClick;
};

export function toFindOne(id){
const arrAll = JSON.parse(localStorage.getItem('mess'));
                const oneObj = arrAll.find(itm => itm.id === id);
                forModal.innerHTML = modal_markup(oneObj);
};