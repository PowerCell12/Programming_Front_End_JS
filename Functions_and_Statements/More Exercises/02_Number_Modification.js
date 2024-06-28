function num_mod(num){

    const append_nine = function(num1) {
        let result = num1.toString().split("");
        result.push(9);
        result = Number(result.join(""));
        num = result;
    };


    const avrg = function(num) {

        const nums = num.toString().split('').map(x => Number(x))
        const sum = nums.reduce((total, x) => total + x, 0  )
        const avg = ( sum / nums.length);
        
        return avg > 5

    }


    while (!avrg(num)){
        append_nine(num)
    }

    return num
}
