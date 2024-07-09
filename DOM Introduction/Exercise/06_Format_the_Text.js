function solve() {

  let text = document.getElementById("input");

  let output = document.getElementById("output");

  let sentences = text.value.split(".").filter(x => x.length >= 1);


  let count = 0;
  let text_pr = ""

  for (let sentence of sentences){
  
    

    if (count === 3){
      let element = document.createElement("p");
      element.textContent = text_pr;
      output.appendChild(element)
      text_pr = ""
      count = 0;
    }

    text_pr += sentence + ".";


    count++;

  }

  if (text_pr !== ""){
    let element = document.createElement("p");
    element.textContent = text_pr;
    output.appendChild(element)
  
  }

  console.log(sentences)

}
