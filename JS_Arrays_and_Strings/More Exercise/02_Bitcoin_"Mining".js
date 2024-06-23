function bit_mining(arr){

    let total = 0;
    let bitcoin = 0;
    let first_day = 0;

    let count = 0;

    for (let for_d of arr){
        count++;

        if (count % 3 === 0){
            for_d = for_d * 0.7;            
        }


        total += for_d * 67.51;

        while (total > 11949.16){
            if (first_day === 0){
                first_day = count;
            }
            bitcoin++;
            total -= 11949.16
        }
    }

    console.log(`Bought bitcoins: ${bitcoin}`)
    if (first_day !== 0){
        console.log(`Day of the first purchased bitcoin: ${first_day}`)
    }
    console.log(`Left money: ${total.toFixed(2)} lv.`)

}
