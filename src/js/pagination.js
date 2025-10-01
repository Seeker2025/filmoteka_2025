export const container = document.querySelector('.tui-pagination');
export const options = {
    totalItems: 20,
     itemsPerPage: 10,
     visiblePages: 5,
    page: 1,
     centerAlign: false,
     firstItemClassName: 'tui-first-child',
     lastItemClassName: 'tui-last-child',
     template: {
         page: '<a href="#" class="buttons_other tui-page-btn">{{page}}</a>',
         currentPage: '<strong class="button_orange tui-page-btn tui-is-selected">{{page}}</strong>',
         moveButton:
             '<a href="#" class="arrow tui-page-btn tui-{{type}}">' +
                 '<span class="tui-ico-{{type}}">{{type}}</span>' +
             '</a>',
         disabledMoveButton:
             '<span class="arrow tui-page-btn tui-is-disabled tui-{{type}}">' +
                 '<span class="tui-ico-{{type}}">{{type}}</span>' +
             '</span>',
         moreButton:
             '<a href="#" class="dots tui-page-btn tui-{{type}}-is-ellip">' +
                 '<span class="tui-ico-ellip">. . .</span>' +
             '</a>'
     }
    };