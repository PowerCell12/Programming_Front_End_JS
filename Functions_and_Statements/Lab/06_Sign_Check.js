function sign_check(num1, num2, num3 ){

    let count = 0


    if (num1  <0){
        count++
    }

    if (num2 < 0){
        count++
    }


    if (num3 < 0){
        count++
    }



    if (count % 2 == 0){
        return 'Positive'
    }
    else{
        return 'Negative'
    }

}
