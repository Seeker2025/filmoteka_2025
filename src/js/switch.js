console.log('switch');


// const switchInp = document.querySelector('input.switch');
// console.log(switchInp);

// switchInp.addEventListener('change', (evt)=>{
//     console.log(evt.target.checked);
    

// })

// const bodyIndex = document.querySelector('body#index');
// console.log(bodyIndex);
// const containerHead = document.querySelector('.container_head');
// const card = document.querySelector('li.card_js');
// console.log(card);


 

export function toSwitchToDarkUI(body, head, input){
    
        body.classList.toggle('light');
        head.classList.toggle('con_light');
        input.classList.toggle('input_light');

    
    
    
}