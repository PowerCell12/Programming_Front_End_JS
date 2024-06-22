function hash_tag(text){

    let final = text.split(' ')
    let words = [];

    for (let word of final){

        if  (word.substring(0, 1) == "#" && word.length > 1 ){
            if (/^[a-zA-Z]+$/.test(word.substring(1))) {
                words.push(word.substring(1));
            }
        }

    }


    return words.join("\n");

}
