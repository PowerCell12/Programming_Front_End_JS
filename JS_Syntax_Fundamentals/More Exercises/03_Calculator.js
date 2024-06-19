function calculator(number, operator, number2){
    let final = 1;

    switch (operator){

        case '+':
            final = number  + number2 
            return `${final.toFixed(2)}`;
            break;

        case '-':
            final = number - number2 
            return `${final.toFixed(2)}`;
            break;


        case '/':
            final = number / number2 
            return `${final.toFixed(2)}`;
            break;
        

        case '*':
            final = number * number2
            return `${final.toFixed(2)}`;
            break;
    }
}
