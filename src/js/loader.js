const loader = document.querySelector('.box');

export function showLoader(){
   loader.style.visibility = 'visible';
}

export function hideLoader(){
   loader.style.visibility = 'hidden';
}