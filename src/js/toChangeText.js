export function toChangeTxtOnBtn(btn, obj, key, txtRem, txtAdd){
     const arr = JSON.parse(localStorage.getItem(key));
                        const present = arr.some(itm => itm.id === obj.id);
                        if(present){
                            btn.textContent = txtRem;
                        } 
                        else{
                            btn.textContent = txtAdd;
                        }
}