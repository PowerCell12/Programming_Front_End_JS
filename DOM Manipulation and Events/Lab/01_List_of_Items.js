function addItem() {

 let text = document.getElementById("newItemText").value;   

  let element = document.createElement("li");

  element.textContent = text;

  let parent = document.getElementById("items")

  parent.appendChild(element);


}
