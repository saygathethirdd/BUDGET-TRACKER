import { totalExpenseValues } from "./total-expense.js";
import { saveToStorage, total } from "./total.js";


export let incomeValue=JSON.parse(localStorage.getItem('income')) || 0;
export let savingValue=JSON.parse(localStorage.getItem('saving')) || 0;


export function allValues(){
  let incomeSpan=document.querySelector('.js-income-html');
  let savingSpan=document.querySelector('.js-saving-html');

  incomeSpan.innerHTML = `$${incomeValue}`;
  savingSpan.innerHTML = `$${savingValue}`;

  document.querySelector('.income-button').addEventListener('click',(event)=>{
    event.preventDefault();
    incomeValue=document.getElementById('income').value;

    incomeSpan.innerHTML=`$${incomeValue}`;
    total();
    saveToStorage();
  });


  document.querySelector('.save-button').addEventListener('click',(event)=>{
    event.preventDefault();
    savingValue=document.getElementById('save').value;

    savingSpan.innerText=`$${savingValue}`;
    total();
    saveToStorage();
})
};

