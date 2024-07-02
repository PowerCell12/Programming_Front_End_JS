// function dictionary(arr){

//   let obj = {}
//   let obj_arr = []

//   for (let objects of arr){

//     Object.assign(obj, JSON.parse(objects))
    
//   }

//   let obj1 = Object.entries(obj);

//   obj = Object.fromEntries(obj1.sort((a,b) => a - b))


//   for (let b in obj){

//     console.log(`Term: ${b} => Definition: ${obj[b]}`);
    
//   }
// }




  class Vehicle{

    constructor(type, model, parts, fuel){
      this.type = type;
      this.model = model;
      this.parts = {...parts, quality: parts['engine'] * parts['power']};
      this.fuel = fuel
    }

    drive(loss){
      this.fuel -= loss;
    }
    
  }

