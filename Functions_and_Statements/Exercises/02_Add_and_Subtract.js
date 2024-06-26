function add_sub(num1, num2, num3){

    const sum = (num1, num2) => num1  + num2;

    const subtract = (num2, num3) => num2 - num3;


    return subtract(sum(num1, num2), num3)
    
}
