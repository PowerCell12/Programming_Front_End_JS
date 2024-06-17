function print_sum(num1, num2){ 

  let sum = 0;
  let list = []

  for (let i = num1; i  <= num2; i++){

    sum += i;

    list.push(i);



  }

  console.log(list.join(' '))


  console.log(`Sum: ${sum}`);



}
