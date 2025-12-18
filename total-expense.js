import { allArrays } from "./all-arrays.js";
import { saveToStorage, total } from "./total.js";

export let totalExpenseValues= JSON.parse(localStorage.getItem('expense')) || 0;
 export function addAllInputValues(){
  for(let i=0; i<allArrays.length; i++){
    totalExpenseValues+=Number(allArrays[i].input.value) || 0 ;
    allArrays[i].input.value='';
  }
  total();
  saveToStorage();
    document.querySelector('.js-total-expense').innerHTML=`$${totalExpenseValues}`;
  }