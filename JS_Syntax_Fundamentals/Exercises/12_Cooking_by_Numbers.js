function cooking(number1, op1, op2, op3, op4, op5){
  let number = Number(number1)

  operations = [op1, op2, op3, op4, op5]

  for (operation in operations){
    let operation1 = operations[Number(operation)]

    switch (operation1){

      case 'chop':
        number = number / 2;
        console.log(number);
        break;
        
      case 'dice':
        number = Math.sqrt(number);
        console.log(number);
        break;
        
      case 'spice':
        number = number + 1;
        console.log(number);
        break;


      case 'bake':
        number = number * 3;
        console.log(number);
        break;

      case 'fillet':
        number = number * 0.8;
        console.log(number);
        break;
        
    }
    
  }
  
}

