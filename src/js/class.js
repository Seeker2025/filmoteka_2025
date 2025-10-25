export class ToRender{
    constructor({arr, ulContainer, modalBox}){
        this.arr = arr;
        this.ulContainer = ulContainer;
        this.modalBox = modalBox;


    }
    // renderLayout(arr, ulContainer, modalBox)
    renderLayout(){
        const ren = this.arr.map(({poster_path, id, title, release_date}, idx) =>{
        let imgMainPath = `<img class="img_of_card" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">`    
        if(!poster_path){
            imgMainPath = `<img class="img_of_card" src=${noImg} alt="No image">`
        }
                                                        return `
                                                            <li class="card" id=${id}>
                                                                ${imgMainPath}
        <div class="card_box">
            <h1 class="card_title">${title}</h1>
            <h2 class="card_jenre">Drama, Comedy | ${Number.parseInt(release_date)||'No date'}</h2>
        </div>
                                                            </li>                                              
                                                            `
    }).join('');
    
        this.ulContainer.innerHTML = ren;
    
        this.ulContainer.addEventListener('click', modalShow);
                                                        function modalShow(evt){
                                                            window.addEventListener('keydown', (evt)=>{
                                                            if(evt.code === 'Escape'){
                                                            toCloseModal(this.modalBox);
                                                            }
                                                        });
       const nestedElem = evt.target;
       const upperLi = nestedElem.closest('.card');
       console.log(upperLi);
       const selectIDbyClick = Number(upperLi.getAttribute('id'));
       toShowModalWin(selectIDbyClick, this.modalBox);
    }
    }
}