let note500 = document.getElementById("moneyInput");
let note200 = document.getElementById("moneyInput2");
let note100 = document.getElementById("moneyInput3");
let note50 = document.getElementById("moneyInput4");
let note20 = document.getElementById("moneyInput5");
let note10 = document.getElementById("moneyInput6");
let result = document.getElementById("result");

function calculateTotal() {
  let total = (note500.value * 500) +
              (note200.value * 200) +
              (note100.value * 100) +
              (note50.value * 50) +
              (note20.value * 20) +
              (note10.value * 10);

  result.textContent = "Total amount is: ₹" + total;
}
