function spice(starting_yield){

    let days = 0;
    let sum = 0;


    while (true){

        if (starting_yield < 100){
            sum -= 26;

            if (sum < 0){
                sum = 0
            }


            console.log(days);
            console.log(sum);
            break;
        }

        days++;


        sum += starting_yield - 26; 

        starting_yield -= 10;



    }


}
