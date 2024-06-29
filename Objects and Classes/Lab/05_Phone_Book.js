// function person_inf(firstName, lastName, age){

//     return {firstName, lastName, age}

  
// }


// function city(object){


//   for (let param in object){

//     console.log(`${param} -> ${object[param]}`);
    
//   }
  
// }


// function convert_obj(name, lastName, hairColor){
//   let string = {name, lastName, hairColor}
  
//   return  JSON.stringify(string);

  
// }


function phone_book(arr){

  let book = {}


  for (let contact of arr){
  
      let arr_1 = contact.split(' ');

      book[arr_1[0]] = arr_1[1];
  }

  for (let contact1 in book){
    console.log(`${contact1} -> ${book[contact1]}`)
  }
  
}
