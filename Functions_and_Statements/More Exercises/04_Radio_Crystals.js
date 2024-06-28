function radio_cr(arr){
    let final = arr[0];
    let numbers = arr.slice(1);

    const cut = num => num / 4;
    const lap = num => num = num * 0.8;
    const grid =  num => num  = num - 20;
    const etch = num => num = num - 2;
    const x_ray = num => num = num + 1; // only once
    const transport = num => num = Math.floor(num); 
    // a function that checks if the method with plus one is the answer
    const x_ray_check = function(num, operation){
        const old = num;
        const operations_com = operation(num);

        if (operations_com + 1 == final){
            Math.ceil(num);
            x_ray(num);
            x_ray1 = true;
            number = final
            return final
        }
        else{
            num = old;
        }


    }

    for (var number of numbers){

        console.log(`Processing chunk ${number} microns`);


        var x_ray1 = false;
        let count_cut = 0;
        let count_lap = 0;
        let count_grind = 0;
        let count_etch = 0;



        while (cut(number) >= final){
            x_ray_check(number, cut);
            count_cut++;
            if (!x_ray1){
                number = cut(number);
            }
        }

        if (count_cut !== 0){
            transport(number);
            console.log(`Cut x${count_cut}`)
            console.log("Transporting and washing")
        }
        if (x_ray1){
            console.log(`X-ray x1`);
            console.log(`Finished crystal ${final} microns`);
            continue;
        }




        while (lap(number) >= final){
            x_ray_check(number, lap);
            count_lap++;
            if (!x_ray1){
                number = lap(number);
            }
        }

        if (count_lap){
            transport(number);
            console.log(`Lap x${count_lap}`)
            console.log("Transporting and washing")
        }
            if (x_ray1){
            console.log(`X-ray x1`);
            console.log(`Finished crystal ${final} microns`);
            continue;
        }





        while (grid(number) >= final){
            x_ray_check(number, grid);
            count_grind++;
            if (!x_ray1){
                number = grid(number);
            }
        }

        if (count_grind !== 0){
            transport(number);
            console.log(`Grind x${count_grind}`)
            console.log("Transporting and washing")
        }
        if (x_ray1){
            console.log(`X-ray x1`);
            console.log(`Finished crystal ${final} microns`);
            continue;
        }




        while (etch(number) >= final || x_ray_check(number, etch)){
            x_ray_check(number, etch);
            count_etch++;
            if (!x_ray1){
                number  = etch(number);
            }
        }

        if (count_etch !== 0){
            transport(number);
            console.log(`Etch x${count_etch}`)
            console.log("Transporting and washing")
        }
        if (x_ray1){
            console.log(`X-ray x1`);
            console.log(`Finished crystal ${final} microns`);
            continue;
        }
        
        console.log(`Finished crystal ${final} microns`);


    }



}
