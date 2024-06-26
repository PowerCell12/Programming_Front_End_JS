function odd_even_sum(number){
  let even = 0;
  let odd = 0;

  function calc_odd_even(number){
  
      for (let p of String(number)){

        if (p % 2 ==0){
            even += Number(p)
        }
        else{
          odd += Number(p)
        }
        
      }
      
  } 

  calc_odd_even(number)

  return `Odd sum = ${odd}, Even sum = ${even}`
    
}
