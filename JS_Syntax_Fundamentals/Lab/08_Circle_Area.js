function circle_area(input){
    
    if (typeof(input) != 'number'){
        return `We can not calculate the circle area, because we receive a ${typeof(input)}.`
    }

    let area =Math.PI * input ** 2 

    return `${area.toFixed(2)}`
}
