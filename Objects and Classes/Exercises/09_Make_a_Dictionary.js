function dictionary(arr){

    let obj = {}
    let obj_arr = []
  
    for (let objects of arr){
  
      Object.assign(obj, JSON.parse(objects))
      
    }
  
  
    let mid1 = Object.keys(obj)
    
    let mid = mid1.sort((a, b) => a.localeCompare(b));

    const obj2 = Object.fromEntries(mid.map(key => [key, obj[key]]));

  
    for (let b in obj2){
  
      console.log(`Term: ${b} => Definition: ${obj[b]}`);
      
    }
  }
