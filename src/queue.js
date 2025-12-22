console.log('queue');

import { footerScaleJS }    from './js/footer';
import { renderLayout } from './js/render';

const ulQueue = document.querySelector('ul.ul_queue');
const forModalQue = document.querySelector('.for_modal_queue');
console.log(ulQueue);
console.log(forModalQue);

const kitQueued = JSON.parse(localStorage.getItem('queued'));

renderLayout(kitQueued, ulQueue, forModalQue);
