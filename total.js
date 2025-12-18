import { totalExpenseValues} from "./total-expense.js";
import { incomeValue, savingValue } from './values.js';

let totalValues=0;
export function total() {
   totalValues= Number(incomeValue) - Number(savingValue) - totalExpenseValues;
   saveToStorage();
   document.querySelector('.js-total-html').innerHTML=`$${totalValues}`;
}


export function saveToStorage(){
  localStorage.setItem('total', JSON.stringify(totalValues));
  
   localStorage.setItem('income', JSON.stringify(incomeValue));

   localStorage.setItem('saving', JSON.stringify(savingValue));

   localStorage.setItem('expense', JSON.stringify(totalExpenseValues));
}

/*
export function saveToStorageIncome(){
  localStorage.setItem('income', JSON.stringify(incomeValue));
}

export function saveToStorageSaving(){
  localStorage.setItem('saving', JSON.stringify(savingValue));
}
*/
