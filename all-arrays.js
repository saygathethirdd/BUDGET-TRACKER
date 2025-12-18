
let housingInput=document.getElementById('housing');
let cashInput=document.getElementById('cash');
let shoppingInput=document.getElementById('shopping');
let utilsInput=document.getElementById('utility');
let foodInput=document.getElementById('food');



let foodCategory=document.querySelector('.js-food-item');
let housingCategory=document.querySelector('.js-housing-item');
let shoppingCategory=document.querySelector('.js-shopping-item');
let cashCategory=document.querySelector('.js-cash-item');
let utilityCategory=document.querySelector('.js-utility-item');


let foodButton= document.querySelector('.js-save-food');
let housingButton=document.querySelector('.js-save-housing');
let shoppingButton= document.querySelector('.js-save-shopping');
let cashButton=document.querySelector('.js-save-cash');
let utilityButton=document.querySelector('.js-save-utility');



export const allArrays = [
  { item: foodCategory, button: foodButton, input: foodInput },
  { item: housingCategory, button: housingButton, input: housingInput },
  { item: utilityCategory, button: utilityButton, input: utilsInput },
  { item: shoppingCategory, button: shoppingButton, input: shoppingInput },
  { item: cashCategory, button: cashButton, input: cashInput }
];


/*
let found=allArrays.find(array=>array.allCash);
console.log(found);
console.log(typeof found);

let founded=found

for (let i=0; i<found.length; i++){
  console.log(found[i]);
}*/