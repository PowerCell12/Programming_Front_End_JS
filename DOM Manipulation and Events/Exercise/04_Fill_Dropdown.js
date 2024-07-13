function addItem() {

    let text = document.getElementById("newItemText");
    let value1 = document.getElementById("newItemValue");

    let op = document.createElement("option")
    op.textContent = text.value;
    op.value = value1.value;

    let select = document.getElementById("menu")

    select.appendChild(op);

    text.value = "";
    value1.value = "";


}

