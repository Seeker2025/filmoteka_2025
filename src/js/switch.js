console.log('switch');


const switchInp = document.querySelector('input.switch');
console.log(switchInp);

switchInp.addEventListener('change', (evt)=>{
    console.log(evt.target.checked);
    

})