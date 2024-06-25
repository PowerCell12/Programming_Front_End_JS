function orders(order, col){
    let money = 0;

    switch (order){
        
        case 'water':
            return `${col.toFixed(2)}`
            
        case 'coffee':
            money = 1.5 * col
            return `${money.toFixed(2)}`

        case 'coke':
            money = 1.4 * col
            return `${money.toFixed(2)}`


        case 'snacks':
            money = 2 * col
            return `${money.toFixed(2)}`
        


    }


}
