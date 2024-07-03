function Garage(arr){

  let garages = {}

  for (let car of arr){

    let garag = car.split(' - ')

    if (!garages.hasOwnProperty(garag[0])){
        garages[garag[0]] = []
    }
    
    let car_obj = {}

    let key_value = garag[1].split(', ');

    key_value.forEach(x => {
  
      let [key, value] = x.split(": ");
      car_obj[key] = value
      
    })

    garages[garag[0]].push(car_obj)
  }

  for (let pr in garages){

    console.log(`Garage № ${pr}`);

    for (let garage of garages[pr]){
      let arr = []
      for (key in garage){
        arr.push(`${key} - ${garage[key]}`);
      }

      console.log(`--- ${arr.join(', ')}`);

    }
    
  }

  
}
