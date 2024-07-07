function subtract() {

  let first = document.getElementById('firstNumber').value;
  let second = document.getElementById('secondNumber').value;

  let final = document.getElementById('result');

  final.textContent = Number(first) - Number(second)
}
