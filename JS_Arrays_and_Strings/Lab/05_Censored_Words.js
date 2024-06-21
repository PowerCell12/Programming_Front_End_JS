function cens_words(text, word){
    let  text1 = text;
    let text_final = text;
    let count =0;

    while (true){

        if (text1 === text_final && count != 0){
            break;
        }
        count++;
        text1 = text_final

        text_final = text_final.replace(word, '*'.repeat(word.length))


    }


    return text_final
}
