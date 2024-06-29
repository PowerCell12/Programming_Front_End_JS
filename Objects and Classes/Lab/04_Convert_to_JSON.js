// function person_inf(firstName, lastName, age){

//     return {firstName, lastName, age}

  
// }


// function city(object){


//   for (let param in object){

//     console.log(`${param} -> ${object[param]}`);
    
//   }
  
// }


function convert_obj(name, lastName, hairColor){
  let string = {name, lastName, hairColor}
  
  return  JSON.stringify(string);

  
}
