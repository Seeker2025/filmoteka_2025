// console.log('switch');

export function toSwitchToDarkUI(body, head, input){
    
        body.classList.toggle('light');
        head.classList.toggle('con_light');
        if(input) input.classList.toggle('input_light');
        }

export function toSwitchUIforLiCard(cards, sense){
       if(sense){
       cards.forEach(el =>{
       el.classList.toggle('card_light');
       
       }
)
}
}