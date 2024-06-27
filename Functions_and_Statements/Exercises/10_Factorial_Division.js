function final(num_1, num_2){
   const factorial =  function(fact)  {
    if (fact == 1) {
      return 1
    }

    return (fact * factorial(fact - 1))
  }


    const num1 = factorial(num_1)

    const num2 = factorial(num_2)

    const answer = num1 / num2


    return answer.toFixed(2)
  }

