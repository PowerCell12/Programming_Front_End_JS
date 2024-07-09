function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      let search_input = document.getElementById("searchField").value;

      let search_button = document.getElementById("searchBtn");

      let table = Array.from(document.getElementsByTagName("tr")).slice(2);


      
      for (let row of table){

         let chld = Array.from(row.children);

         row.classList.remove('select')

         for (let r of chld){

            if (r.textContent === search_input || r.textContent.includes(search_input)){
               row.classList.add('select');
               break;
            }

         }


      }




   }
}



