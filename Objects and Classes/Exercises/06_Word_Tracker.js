function words_tr(arr1){
    let arr = arr1[0];
    let sentence = arr1.slice(1)
    let words = arr.split(" ");

    let obj = {}


    for (let word of words){

        obj[word] = 0;

    }


    for (let w of sentence){


        for (let j in obj){

            if (w === j){
                obj[j]++;
            }

        }


    }

    let obj1 = Object.entries(obj).sort((a, b) => b[1] - a[1])

    obj = Object.fromEntries(obj1)
    
    for (let word1 in obj){
        console.log(`${word1} - ${obj[word1]}`)
    }



}

