function perf_num(num){

  let arr = []


  for (let i = 1; i <= num / 2; i++){

    if (num % i == 0){
      arr.push(i);
    }
    
  }

  let sum = arr.reduce((a,b) => a = a + b, 0)

  if (num == sum){
      return 'We have a perfect number!'
  }
  else{
    return "It's not so perfect."
  }
  
}
