function substring(word, text){



    let textar = text.split(' ')
    let bool = false;

    for (words of textar){

        if (words.toLowerCase() === word.toLowerCase()){
            console.log(word);
            bool = true;
        }

    }


    if (!bool){
        console.log(`${word} not found!`)
    }

}
