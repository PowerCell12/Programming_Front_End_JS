function gladiator(list_fights, helm_price, sword_price, shield_price, armor_price){
    let sum = 0;
    let shield_broken = false;
    let count = 0;

    for (let i = 1; i <= list_fights; i++){

        if (i % 2 ==0){
            sum += helm_price;
        }

        if (i % 3 == 0){
            sum += sword_price;

        }    

        if (i % 3 == 0 && i % 2 ==0){
            sum += shield_price;
            count++;

            if (count % 2 == 0){
                shield_broken = true;
            }
        }

        if (shield_broken){
            sum += armor_price;
            shield_broken = false;
        }
    }


    return `Gladiator expenses: ${sum.toFixed(2)} aureus`;
}

