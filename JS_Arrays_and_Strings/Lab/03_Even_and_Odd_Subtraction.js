function dif(array){

    let even = 0;
    let odd = 0;


    for (num of array){

        if (num % 2 == 0){
            even += num;
        }
        else{
            odd += num;
        }


    }

    return even - odd;

}
