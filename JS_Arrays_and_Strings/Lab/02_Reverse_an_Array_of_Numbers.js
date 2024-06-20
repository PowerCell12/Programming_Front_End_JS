function reverse_array(number, list){
    let array = [];

    for (let i =0; i < number; i++){
        array.push(list[i]);
    }

    let array_rev = array.reverse();

    return array_rev.join(" ")
}
