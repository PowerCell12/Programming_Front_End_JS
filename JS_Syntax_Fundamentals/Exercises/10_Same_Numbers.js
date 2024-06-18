function same_num(number){

  let same = true;
  let sum = 0;
  let numString = number.toString()
  
  for (num in numString){
    let num1 = numString[Number(num)]


    if (num1 !== numString[0]){
      same = false;
    }

    sum += Number(num1);
    
  }

  console.log(same);
  console.log(sum);
  
  
  
}
