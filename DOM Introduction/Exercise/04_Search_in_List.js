function search() {

   let elements = Array.from(document.getElementById("towns").children);
   for (let word of elements){
      word.style.textDecoration = "none";
      word.style.fontWeight = "normal"
   }

   let search_word = document.getElementById('searchText').value;

   let result = document.getElementById('result')

   let count = 0;

   
   for (let word of elements){
     
     
      if (word.textContent.includes(search_word)){
         count++;
         word.style.textDecoration = "underline";
         word.style.fontWeight = "bold"
      }      

   }

   result.textContent = `${count} matches found`   



}
