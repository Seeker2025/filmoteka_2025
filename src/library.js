console.log('library');
import { footerScaleJS }    from './js/footer';
import { renderLayout} from './js/render';
// console.log(renderLayout);

const ulLibrary = document.querySelector('.ul_library');
const forModalLib = document.querySelector('.for_modal_lib');
// console.log(forModalLib);



 const kitWatched = JSON.parse(localStorage.getItem("watched"));

console.log(kitWatched);
 renderLayout(kitWatched, ulLibrary, forModalLib);

footerScaleJS();

