export function wholeCategory(){
let foodCategory=document.querySelector('.js-food-item');

foodCategory.addEventListener('click',()=>{
   foodCategory.classList.add('added');
});

document.querySelector('.js-save-food').addEventListener('click', (event)=>{
  event.stopPropagation();
  foodCategory.classList.remove('added');
});




let housingCategory=document.querySelector('.js-housing-item');

housingCategory.addEventListener('click',()=>{
   housingCategory.classList.add('added');
});

document.querySelector('.js-save-housing').addEventListener('click', (event)=>{
  event.stopPropagation();
  housingCategory.classList.remove('added');
});


let shoppingCategory=document.querySelector('.js-shopping-item');

shoppingCategory.addEventListener('click',()=>{
   shoppingCategory.classList.add('added');
});

document.querySelector('.js-save-shopping').addEventListener('click', (event)=>{
  event.stopPropagation();
  shoppingCategory.classList.remove('added');
});


let cashCategory=document.querySelector('.js-cash-item');

cashCategory.addEventListener('click',()=>{
   cashCategory.classList.add('added');
});

document.querySelector('.js-save-cash').addEventListener('click', (event)=>{
  event.stopPropagation();
  cashCategory.classList.remove('added');
});


let utilityCategory=document.querySelector('.js-utility-item');

utilityCategory.addEventListener('click',()=>{
   utilityCategory.classList.add('added');
});

document.querySelector('.js-save-utility').addEventListener('click', (event)=>{
  event.stopPropagation();
  utilityCategory.classList.remove('added');
});
}