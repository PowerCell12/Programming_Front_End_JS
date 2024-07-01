function inventory(arr){
    let heroes = []

    for (let hero of arr){

        let hero_obj = {}
        let data = hero.split(' / ')

        hero_obj['hero'] = [data[0],data[1], data[2]];
        heroes.push(hero_obj)
    }

    heroes = heroes.sort((a,b) => a.hero[1] - b.hero[1])

    for (let print of heroes){

        for (let print_h in print){

            console.log(`Hero: ${print[print_h][0]}`);
            console.log(`level => ${print[print_h][1]}`);
            console.log(`items => ${print[print_h][2]}`);


        }

    }
}
