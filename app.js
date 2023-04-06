console.log("working");

let small1 = document.querySelector(".section1 small");
let small2 = document.querySelector(".section3 small");
let inputBill = document.querySelector(".bill");
let form = document.querySelector(".container");
let nop = document.querySelector(".nop");
let custom = document.querySelector(".custom");
let percentButtons = document.querySelectorAll(".section2 button");
let tipPerPersonDisplay = document.querySelector(".tip-person");
let tipPerTotalDisplay = document.querySelector(".tip-total");
let reset = document.querySelector(".reset");

small1.style.display = "none";
small2.style.display = "none";

let billAmount = null;
let numberOfPeople = null;
let percent = null;
// let customNumber = 0

function calculate() {
  let pricePerPerson = billAmount / numberOfPeople;
  let tipPerPerson = (pricePerPerson * percent) / 100;
  console.log(tipPerPerson);
  let totalPerPerson = pricePerPerson + tipPerPerson;
  tipPerPersonDisplay.textContent = "$" + tipPerPerson;
  tipPerTotalDisplay.textContent = "$" + totalPerPerson;
};

// function required(){
//     if (inputBill.value == 0 || inputBill.value == ''  && nop.value == 0 || nop.value == ''){
//         small1.style.display = 'block';
//         small2.style.display = 'block'; 
//     }else{
//         small1.style.display = 'none'
//         small2.style.display = 'none'
//     }
// }

function checkErrorState(){
  if(billAmount === null){
    small1.style.display = 'block'
  }else{small1.style.display = 'none'
  }
  if(numberOfPeople === null){
    small2.style.display = 'block'
  }else{small2.style.display = 'none'
  }
}

inputBill.addEventListener('focusin', ()=>{
  small1.style.display = 'none'
})
nop.addEventListener('focusin', ()=>{
  small2.style.display = 'none'
})


percentButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    percent = event.target.value;
    console.log(event.target.value);
    // required()
  });
});
 



form.addEventListener("submit", (e) => {
  e.preventDefault();
  // calculate();
  if (billAmount !== null && numberOfPeople !== null && percent !== null){
    calculate()
  }else{
    console.log('not allowed to calculate');
    checkErrorState()
  }
  

  // console.log(billAmount);
  // console.log(numberOfPeople);
});

inputBill.addEventListener("change", (e) => {
  // console.log(e.target.value);
  billAmount = e.target.value;
});
nop.addEventListener("change", (e) => {
  numberOfPeople = e.target.value;
});
custom.addEventListener("change", (e) => {
  percent = e.target.value;
  // console.log(customNumber);
});
custom.addEventListener("focusout", () => {
  calculate();
});

//================reset================
reset.addEventListener("click", () => {
  billAmount = null;
  numberOfPeople = null;
  percent = null;
  tipPerPersonDisplay.textContent = "$0";
  tipPerTotalDisplay.textContent = "$0";
  inputBill.value = "";
  nop.value = "";
});
