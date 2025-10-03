const iconJS = document.querySelector('svg.icon_js')

                export function footerScaleJS(){
                setInterval(()=>{
                iconJS.classList.toggle('icon_scale');
                }, 800);
                }