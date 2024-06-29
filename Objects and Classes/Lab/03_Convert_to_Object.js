// function person_inf(firstName, lastName, age){

//     return {firstName, lastName, age}

  
// }


// function city(object){


//   for (let param in object){

//     console.log(`${param} -> ${object[param]}`);
    
//   }
  
// }


function convert_obj(string){

  let object = JSON.parse(string);

  for (let row in object){
    console.log(`${row}: ${object[row]}`)
  }
  
}
