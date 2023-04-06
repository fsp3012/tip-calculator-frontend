let small1 = document.getElementById('smallone');
let small2 = document.getElementById('smalltwo');
let form = document.getElementById('formcont');
let inputBill = document.getElementById('bill');
let nop = document.querySelector('.nop')
let billAmount = 0;
let numberOfPeople = 0;
let customValue = 0;
let custom = document.querySelector('.grid-container input');
let tipamount = document.getElementById('tip-person');
let totalperson = document.getElementById('tip-total');
let btn = document.querySelectorAll('button');
let reset = document.getElementById('reset');



small1.style.display = 'none';
small2.style.display = 'none';


form.addEventListener('submit', (e)=>{
    e.preventDefault();
})

inputBill.addEventListener('change', (event) =>{
    billAmount = event.target.value;
})

nop.addEventListener('change', (e)=>{
    numberOfPeople = e.target.value;

});

custom.addEventListener('focusout', (e)=>{
    customValue = e.target.value;
    let finalCustom = (customValue / 100) * billAmount / numberOfPeople;
    tipamount.textContent = finalCustom;
    let customFinal = (billAmount / numberOfPeople) + finalCustom;
    totalperson.textContent = customFinal;
})

 btn[0].addEventListener('click', (e)=>{
    let totalAmount = (billAmount * 0.05) / numberOfPeople;
    console.log(totalAmount);
    tipamount.textContent = totalAmount;
    let totalperperson = (billAmount / numberOfPeople) + totalAmount;
    totalperson.textContent = totalperperson;
 })

 btn[1].addEventListener('click', (e)=>{
    let totalAmount = (billAmount * 0.10) / numberOfPeople;
    console.log(totalAmount);
    tipamount.textContent = totalAmount;
    let totalperperson = (billAmount / numberOfPeople) + totalAmount;
    totalperson.textContent = totalperperson;
 })

 btn[2].addEventListener('click', (e)=>{
    let totalAmount = (billAmount * 0.15) / numberOfPeople;
    console.log(totalAmount);
    tipamount.textContent = totalAmount;
    let totalperperson = (billAmount / numberOfPeople) + totalAmount;
    totalperson.textContent = totalperperson;
 })

 btn[3].addEventListener('click', (e)=>{
    let totalAmount = (billAmount * 0.25) / numberOfPeople;
    console.log(totalAmount);
    tipamount.textContent = totalAmount;
    let totalperperson = (billAmount / numberOfPeople) + totalAmount;
    totalperson.textContent = totalperperson;
 })

 btn[4].addEventListener('click', (e)=>{
    let totalAmount = (billAmount * 0.50) / numberOfPeople;
    console.log(totalAmount);
    tipamount.textContent = totalAmount;
    let totalperperson = (billAmount / numberOfPeople) + totalAmount;
    totalperson.textContent = totalperperson;
 })

 btn[5].addEventListener('click', (e)=>{
    tipamount.textContent = 0;
    totalperson.textContent = 0;
 });
