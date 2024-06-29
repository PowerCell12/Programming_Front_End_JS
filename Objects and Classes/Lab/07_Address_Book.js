function address_book(arr){
    let obj = {}
  
    for (let names of arr){

      let arr1 = names.split(":")

      obj[arr1[0]] = arr1[1];
      
    }


    let obj2 = Object.fromEntries(Object.entries(obj).sort());

    for (let names1 in obj2){
      console.log(`${names1} -> ${obj2[names1]}`);
    }

  
  
}
