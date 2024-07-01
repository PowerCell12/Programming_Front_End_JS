function odd_occur(string){

    obj = {}
    let arr = string.split(" ")

    for (let word of arr){

        if (obj.hasOwnProperty(word.toLowerCase())){
            obj[word.toLowerCase()]++;
        }
        else{
            let word1 = word.toLowerCase()
            obj[word1] = 1;
        }

    }


    let arr1 = []
    for (let word1 in obj){

        if (obj[word1] % 2 !== 0){
            arr1.push( `${word1}`)
        }

    }

    return arr1.join(' ')


}

