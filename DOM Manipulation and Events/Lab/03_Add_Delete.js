function addItem() {

    let text = document.getElementById("newItemText").value;   
   
    let element = document.createElement("li");
    let delete_le = document.createElement('a');
    delete_le.textContent  = "[Delete]"



    delete_le.setAttribute("href", "#")
    element.textContent = text;

    element.appendChild(delete_le);

    let parent = document.getElementById("items")
   
    parent.appendChild(element);

    delete_le.addEventListener("click", (event) => {
      delete_le.parentElement.remove();
    })
 
   
}
