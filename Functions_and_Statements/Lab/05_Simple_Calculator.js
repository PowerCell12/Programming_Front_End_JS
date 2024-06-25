function final(num1, num2, operator){

let function1 = (num1, num2, operator) =>  {

    switch(operator){

        case 'divide':
            return num1 / num2

        case 'add':
            return num1 + num2 

        case 'subtract':
            return num1 - num2 

        case 'multiply':
            return num1 * num2 

    }
}

return function1(num1, num2, operator)
}

