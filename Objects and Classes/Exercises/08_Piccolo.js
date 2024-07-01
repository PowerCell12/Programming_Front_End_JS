function piccolo(arr){
    let arr1 = []
    
    for (let command of arr){
    
      let c = command.split(", ")
  
      if (c[0] === "IN"){
        if (!arr1.includes(c[1])){
            arr1.push(c[1])
        }
        
      }
      else if (c[0] === 'OUT'){
        let index = arr1.indexOf(c[1])
  
        if (index !== -1){
          arr1.splice(index, 1);
        }
      }
      
    }
  
    arr1.sort()
  
    if (arr1.length > 1){
      console.log(arr1.join('\n'))
    } 
    else{
      console.log('Parking Lot is Empty')
    }
  }

