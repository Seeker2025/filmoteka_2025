console.log('switch');


// const switchInp = document.querySelector('input.switch');
// console.log(switchInp);

// switchInp.addEventListener('change', (evt)=>{
//     console.log(evt.target.checked);
    

// })

const bodyIndex = document.querySelector('body#index');
console.log(bodyIndex);
const containerHead = document.querySelector('.container_head');
console.log(containerHead);


 

export function toSwitchToDarkUI(mening){
    
        bodyIndex.classList.toggle('light');
        containerHead.classList.toggle('con_light');

    
    
    
}