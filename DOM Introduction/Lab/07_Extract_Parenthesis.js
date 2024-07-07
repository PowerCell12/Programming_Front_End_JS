function extract(content) {

  let element = document.getElementById(content).textContent;
  let elements = []
  let word = "";
  bool = false;
  
  for (let el of element){

    if (el === "("){
      bool = true
    }  

    if (bool){
      word += el
    }

    if (el === ")"){
      elements.push(word.substring(1, word.length - 1));
      word = ""
      bool = false
    }
  }

  return elements.join('; ')
}
