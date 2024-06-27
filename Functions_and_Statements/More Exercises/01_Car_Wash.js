function car_wash(arr){
    let value = 0;

    const soap = () => value += 10;
    const water = () => value += value * 0.20;
    const vaccum_clean = () => value += value * .25;
    const mud = () => value -= value  * 0.10;
    
    
    for (let i of arr){

        if (i == 'soap'){
            soap()
        }
        else if (i == 'water'){
            water()
        }
        else if ( i == 'vacuum cleaner'){
            vaccum_clean()
        }
        else if ( i == 'mud'){
            mud()
        }

    }


    return `The car is ${value.toFixed(2)}% clean.`
}
