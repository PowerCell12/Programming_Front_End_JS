function solve() {
   
   let textarea = document.getElementsByTagName("textarea")[0];

   let buttons_add = document.getElementsByClassName("add-product");
   let buttons_complete = document.getElementsByClassName("checkout")[0];
   let names = []
   let total = 0

   for (let button of buttons_add){

      button.addEventListener("click", () => {
         let name = button.parentElement.parentElement.children[1].children[0].textContent;
         let money = button.parentElement.parentElement.children[3].textContent;

         textarea.value += `Added ${name} for ${Number(money).toFixed(2)} to the cart.\n`
         names.push(name);
         total += Number(money)

      })

   
   }


   buttons_complete.addEventListener("click", () => {
      let set = [...new Set(names)];

      textarea.value += `You bought ${set.join(", ")} for ${total.toFixed(2)}.`

      buttons_complete.disabled = true;
      for (let button of buttons_add){
         button.disabled = true;
      }
   })




}
