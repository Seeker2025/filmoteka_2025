export const iconJS = document.querySelector('svg.icon_js')


export function scaleJS(){
    
    setInterval(()=>{
        iconJS.classList.toggle('icon_scale');
        console.log('Hi!');
    }, 800);
}