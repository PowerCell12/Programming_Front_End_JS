function solve() {
    let text =document.getElementById('text').value;
    let naming = document.getElementById('naming-convention').value;
    let printing = document.getElementById('result');
    printing.innerHTML = ""
    let text1 =  text.split(" ");
    
    if (naming === "Camel Case"){
      let first = text1[0].toLowerCase();
  
      final = ""
  
      final += first;
  
      for (let word of text1){
  
        if (word.toLowerCase() !== first){
          let word1 = word.toLowerCase().substring(0, 1).toUpperCase() + word.toLowerCase().substring(1);
          final  += word1
        }
      }
        let element = document.createElement('span');
        element.textContent += final;
        printing.appendChild(element);
      }
  
  
  
      
    
    else if (naming === "Pascal Case"){
      let final = ""
  
      for (let word of text1){
        let word1 = word.toLowerCase().substring(0, 1).toUpperCase() + word.toLowerCase().substring(1);
        final  += word1
      }
  
      let element = document.createElement('span');
      element.textContent += final;
      printing.appendChild(element);
      
      
    }
    else{
      let element = document.createElement('span');
      element.textContent += "Error!";
      printing.appendChild(element)
  
  
  
    }}
