function palindrome(arr){


  const func = num => num === num.split("").reverse().join('');

  for (let num of arr){

    console.log(func(String(num)));

    
  }
}
