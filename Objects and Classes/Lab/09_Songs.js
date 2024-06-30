function songs(arr){

  class Song{

    constructor(typeList, name, time){
      this.typeList = typeList
      this.name = name
      this.time = time
    }


    
  }


  let arr1 = []

  for (let i = 1; i <= Number(arr[0]); i++){
    let arr2 = arr[i].split('_');

    let object = new Song(arr2[0], arr2[1], arr2[2]);
    arr1.push(object);
  }

  let type = arr[arr.length - 1];
  
  if (type == "all"){

    for (let i of arr1){
      console.log(i.name);
    }  
    
  }
  else{


    for (let i of arr1){

      if (i.typeList === type){
        console.log(i.name);
      }
    }  

  }
  
}
