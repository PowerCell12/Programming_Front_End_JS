function points_val(arr){


    const first_p  = function(x1, y1 ){
        let x_f = (0 - x1) ** 2;
        let y_f = (0 - y1) ** 2;

        return Math.sqrt(x_f + y_f)
    }


    const second_p  = function(x2, y2 ){
        let x_f = (x2 - 0) ** 2;
        let y_f = (y2 - 0) ** 2;

        return Math.sqrt(x_f + y_f)
    }


    const third_p = function(x1, y1, x2, y2){
        let x_f = (x2 - x1) ** 2;
        let y_f = (y2 - y1) ** 2;

        return Math.sqrt(x_f + y_f)
    }


    const final_1 = function(func){

        let answer = func(arr[0], arr[1]);

        if (Number.isInteger(answer)){
            return `{${arr[0]}, ${arr[1]}} to {0, 0} is valid`
        }
        else{
            return `{${arr[0]}, ${arr[1]}} to {0, 0} is invalid`
        }

    }


    const final_2 = function(func){

        let answer = func(arr[2], arr[3]);

        if (Number.isInteger(answer)){
            return `{${arr[2]}, ${arr[3]}} to {0, 0} is valid`
        }
        else{
            return `{${arr[2]}, ${arr[3]}} to {0, 0} is invalid`
        }

    }


    const final_3 = function(func){

        let answer = func(arr[0], arr[1], arr[2], arr[3]);

        if (Number.isInteger(answer)){
            return `{${arr[0]}, ${arr[1]}} to {${arr[2]}, ${arr[3]}} is valid`
        }
        else{
            return `{${arr[0]}, ${arr[1]}} to {${arr[2]}, ${arr[3]}} is invalid`
        }

    }



    console.log(final_1(first_p));
    console.log(final_2(second_p));
    console.log(final_3(third_p));
}
