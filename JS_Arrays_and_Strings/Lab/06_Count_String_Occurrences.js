function count_string(text, word){
    let count = 0;
    let text1 = text.split(" ")

    for (t of text1){

        if (t === word){
            count++;
        }

    }



    return count;

}
