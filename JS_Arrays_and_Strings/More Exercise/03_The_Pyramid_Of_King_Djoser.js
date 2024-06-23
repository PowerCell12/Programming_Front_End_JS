function pyramid_dj(base,increment){

    let stone = 0;
    let marble = 0;
    let lapiz = 0;
    let gold = 0;
    let height = 0;

    while(base !== 0){

        if (base === 2 || base === 1){
            height++;
            gold += base * base
            break;
        }

        let stone_mult = base - 2

        height++;

        stone +=  stone_mult * stone_mult;

        let required = (base * base ) - (stone_mult * stone_mult)

        if (height % 5 == 0){
            lapiz += required 
        }
        else{
            marble += required;
        }




        base -= 2


    }

    console.log(`Stone required: ${Math.ceil(stone  * increment)}`);
    console.log(`Marble required: ${Math.ceil(marble * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapiz * increment)}`)
    console.log(`Gold required: ${Math.ceil(gold * increment)}`);
    return `Final pyramid height: ${ Math.floor(height * increment)}`;
}
