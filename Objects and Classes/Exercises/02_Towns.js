function towns(arr){
  
  let obj = {}


  for (let city of arr){
    let sin  = {}
    
    let city_data = city.split(' | ');

    sin['town'] = city_data[0]
    sin['latitude'] = Number(city_data[1]).toFixed(2)
    sin['longitude'] = Number(city_data[2]).toFixed(2)

    obj[city_data[0]] = sin;
    
    
  }

  for (let obj1  in obj){
    console.log(obj[obj1]);
  }

  
}
