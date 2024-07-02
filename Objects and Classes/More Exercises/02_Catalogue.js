function catalogue(arr){

    products = {}


    for (let product of arr){

        let pr = product.split(" : ")

        products[pr[0]] = pr[1]



    }


    let sorted_pr = Object.fromEntries(Object.entries(products).sort((a,b) => a[0].localeCompare(b[0])));


    current_log = null;
    for (let key in sorted_pr){

        let letter = key[0];

        if (current_log  === null){
            current_log = letter;
            console.log(letter);
        }

        if (letter !== current_log){
            console.log(letter);
            current_log = letter
        }

        console.log(`  ${key}: ${sorted_pr[key]}`)
        

    }



}
