function employees(arr){
  
  let obj = {}


  for (let person of arr){

    obj[person] = person.length;
    
  }


  for (let person1 in obj){

    console.log(`Name: ${person1} -- Personal Number: ${obj[person1]}`)
    
  }

  
}
