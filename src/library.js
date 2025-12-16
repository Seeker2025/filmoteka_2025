console.log('library');
import { footerScaleJS }    from './js/footer';
import { renderLayout } from './js/render';
// console.log(renderLayout);

export const ulLibrary = document.querySelector('.ul_library');
export const forModalLib = document.querySelector('.for_modal_lib');
console.log(forModalLib);
console.log(ulLibrary);

////// Class
import { ToRender } from './js/class';
// console.log(ToRender);



const kitWatched = JSON.parse(localStorage.getItem("watched"));

console.log(kitWatched);
//const toRender = new ToRender({arr: kitWatched,  ulContainer: ulLibrary, modalBox: forModalLib});
//toRender.renderLayout();
//  renderLayout(kitWatched, ulLibrary, forModalLib);

// footerScaleJS();

