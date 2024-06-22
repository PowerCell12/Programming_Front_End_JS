function reveal_words(strings10, template){
    let strings = strings10.split(", ")

    let template_list = template.split(" ")
    let final = []


    for (let template2 of template_list){
        let word = template2;
        if (template2.includes("*")){

            for (let string of strings){

                if (string.length == template2.length){
                    word = string;
                    break;
                }

            }


        }

        final.push(word)
    }

    return final.join(' ');

}
