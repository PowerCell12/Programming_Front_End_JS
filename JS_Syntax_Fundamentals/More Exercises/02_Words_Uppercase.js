function words_upper(text){

    let pattern =  /\w+/gm;
    let result = text.match(pattern)

    let list_results = []

    if (pattern.test(result)){
        for (let result1 of result){

            list_results.push(result1.toUpperCase())

        }


        console.log(list_results.join(', '))
    }

}
