function sum_dig(number){

  let num_str = String(number);
  let sum = 0;

  for (num in num_str){

    let nums = Number(num_str[Number(num)]);

    sum += nums;

  }


  console.log(sum);
}
