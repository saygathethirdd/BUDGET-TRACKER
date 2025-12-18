import { allArrays } from "./all-arrays.js";
import { addAllInputValues } from "./total-expense.js";
import { allValues } from "./values.js";


export function wholeCategory2(){
for(let i=0; i<allArrays.length; i++){

allArrays[i].item.addEventListener('click',()=>{
   allArrays[i].item.classList.add('added');
});

}

for(let i=0; i<allArrays.length; i++){
 allArrays[i].button.addEventListener('click', (event)=>{
  event.stopPropagation();
  allArrays[i].item.classList.remove('added');
  addAllInputValues();
});
}
}