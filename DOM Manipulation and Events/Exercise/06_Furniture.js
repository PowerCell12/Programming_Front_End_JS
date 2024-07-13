function solve() {
  let gen_but = document.getElementsByTagName("button")[0];
  let buy_but = document.getElementsByTagName("button")[1];


  gen_but.addEventListener("click", () => {
    let objects = document.getElementsByTagName("textarea")[0];
    let obj_value = JSON.parse(objects.value)

    let table = document.getElementsByTagName("tbody")[0]; // table
    for (let str_obj of obj_value){


      let row = document.createElement("tr");

      let img_td = document.createElement("td");
      let img_tag = document.createElement("img");
      img_tag.setAttribute("src", str_obj["img"]);

      img_td.appendChild(img_tag);

      row.appendChild(img_td)


      let name_td = document.createElement("td");
      let name_tag = document.createElement("p");
      name_tag.textContent = str_obj["name"];

      name_td.appendChild(name_tag)

      row.appendChild(name_td);


      let price_td = document.createElement("td");
      let price_tag = document.createElement("p");
      price_tag.textContent = str_obj["price"]
      
      price_td.appendChild(price_tag);

      row.appendChild(price_td)


      let dec_td = document.createElement("td");
      let dec_tag = document.createElement("p");
      dec_tag.textContent = str_obj["decFactor"]

      dec_td.appendChild(dec_tag)

      row.appendChild(dec_td)


      let input_td = document.createElement("td");
      let input_tag = document.createElement("input")
      input_tag.setAttribute("type", "checkbox");

      input_td.appendChild(input_tag)

      row.appendChild(input_td);


      table.appendChild(row);
    }


  })


  buy_but.addEventListener("click", () => {

    let price = 0
    let valid = []
    let dec_sum = 0
    let dec_count = 0
    let table = document.getElementsByTagName("tbody")[0]; // table
    let print = document.getElementsByTagName("textarea")[1];

    let tr  = table.children;

    for (let tr1 of tr){
      let checkbox = tr1.querySelector("input")
      let [product, price1, factor] = tr1.querySelectorAll("p");

      if (checkbox.checked === true)
      {
        console.log(factor)
        valid.push(product.textContent)
        price += Number(price1.textContent);
        dec_sum +=  Number(factor.textContent);
        dec_count++
      } 

    }

    let avg = dec_sum / dec_count;
    console.log(dec_sum, dec_count)

    string = ""
    string += `Bought furniture: ${valid.join(', ')}\n`
    string += `Total price: ${price.toFixed(2)}\n`
    string += `Average decoration factor: ${avg}`

    if (valid.length > 0){
      print.value = string;
    }



  })



}
