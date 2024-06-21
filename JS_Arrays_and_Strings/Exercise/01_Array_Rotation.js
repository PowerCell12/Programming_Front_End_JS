function rotation(array, to_move){


    while (to_move >= array.length){

        to_move -= array.length;

    }


    let first = array.slice(to_move, array.length);

    let second = array.slice(0, to_move);

    let final = first + ","  + second

    let final1 = final.split(",");

    return final1.  join(' ')

}
