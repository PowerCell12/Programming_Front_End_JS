function store_pr(arr1, arr2){
  
  let obj = {}


  for (let i = 0; i < arr1.length; i+=2){
  
    obj[arr1[i]] = Number(arr1[i + 1]);
    
  }


  for (let i = 0; i < arr2.length; i+=2){
    let local = arr2[i]
    if (obj.hasOwnProperty(local)){
      obj[local] += Number(arr2[i + 1]);      
    }
    else{
      obj[local] = Number(arr2[i + 1]);
    }
    
  }


  for (let product_p in obj){
    console.log(`${product_p} -> ${obj[product_p]}`)
  }
  
}
