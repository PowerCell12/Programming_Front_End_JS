function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      function calculate(array) {
         var sum = 0;
         for (var i = 0; i < array.length; i++) {
             sum += array[i];
         }
         return sum / array.length;
     }

      let restaurant = document.getElementsByTagName('textarea')[0];
      let restaurant1 = restaurant.value;
      let best_rest = document.querySelector("#bestRestaurant > p");
      let best_workers = document.querySelector("#workers > p");
      let obj = {}
      
      // {kitchen: [{Name: pay}]}


      for (let kitchen of JSON.parse(restaurant1)){

         let obj_kitchen = kitchen.split(" - ")
         let workers =  obj_kitchen[1].split(', ')

         if (!obj.hasOwnProperty(obj_kitchen[0])){
            obj[obj_kitchen[0]] = {}

         }
         for (let worker of workers){
            let worker1 = worker.split(" ")
            obj[obj_kitchen[0]][worker1[0]] = Number(worker1[1]);
         }
      }


      let sorted = Object.entries(obj).sort((a, b) => calculate(Object.values(b[1])) -  calculate(Object.values(a[1])))[0] // maybe wrong 

      let sum = 0
      Object.entries(sorted[1]).forEach(x => sum += x[1]);
      let average = sum / Object.entries(sorted[1]).length;
      let best = Object.entries(sorted[1]).sort((a, b) => b[1] - a[1])[0][1]
      
      //fix
      best_rest.textContent  = `Name: ${sorted[0]} Average Salary: ${average.toFixed(2)} Best Salary: ${best.toFixed(2)}`
      
      let workers = Object.entries(sorted[1]).sort((a, b) => b[1] - a[1])
      let list = []

      for (let worker of workers){

         list.push(`Name: ${worker[0]} With Salary: ${worker[1]}`)

      }

      best_workers.textContent = list.join(" ");

   }
}
