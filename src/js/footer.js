const iconYellowJS = document.querySelector('.icon_yellow_js')
// console.log(iconYellowJS);
                export function footerScaleJS(){
                setInterval(()=>{
                iconYellowJS.classList.toggle('icon_scale');
                }, 600);
                }

                footerScaleJS();