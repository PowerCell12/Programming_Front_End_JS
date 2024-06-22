function sorting_nums(arr){

    arr.sort((a, b) => a - b);
    let final = []

    while (arr.length > 0){


        let first_el = arr.shift()
        final.push(first_el)
        

        if (arr.length > 0){
            let last_el = arr.pop()
            final.push(last_el)

        }

    };

    return final
}
