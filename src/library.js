console.log('library');
import { footerScaleJS }    from './js/footer';
import { renderLayout } from './js/render';
// console.log(renderLayout);

export const ulLibrary = document.querySelector('.ul_library');
export const forModalLib = document.querySelector('.for_modal_lib');
// console.log(forModalLib);
// console.log(ulLibrary);



const kitWatched = JSON.parse(localStorage.getItem("watched"));

console.log(kitWatched);
//  renderLayout(kitWatched, ulLibrary, forModalLib);

footerScaleJS();

