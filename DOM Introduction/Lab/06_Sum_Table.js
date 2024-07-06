function sumTable() {

  let elements = Array.from(document.querySelectorAll('tbody tr td:nth-child(2)'));

  let sum = elements.reduce((total, current) => total += Number(current.textContent), 0);

  let final = document.getElementById("sum");

  final.textContent = sum;
  
}
