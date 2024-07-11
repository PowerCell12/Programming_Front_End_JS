function create(words) {
  let final = document.getElementById("content")

  for (let st of words){

    let div = document.createElement("div");

    let parag = document.createElement("p");
    parag.textContent = st;
    parag.style.display = "none"
    
    div.appendChild(parag)

    div.addEventListener("click", () => {
  
      parag.style.display = "block";  
      
    })
  
    final.appendChild(div);
  }


  



}
