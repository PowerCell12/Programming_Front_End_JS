function pascal_case(text){


    let final = text.split(/(?=[A-Z])/);

    console.log(final.join(', '))

}
