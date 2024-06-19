function val_checker(x1, y1, x2, y2){


    let distance1 = Math.sqrt((0 - x1) ** 2  + (0 - y1) ** 2);

    let distance2 = Math.sqrt((0 - x2) ** 2  + (0 - y2) ** 2);

    let distance3 = Math.sqrt((x2 - x1) ** 2  + (y2 - y1) ** 2);

    let distance1_final = Number.isInteger(Number(distance1)) ? console.log(`{${x1}, ${y1}} to {0, 0} is valid`) : console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);


    let distance2_final = Number.isInteger(Number(distance2)) ? console.log(`{${x2}, ${y2}} to {0, 0} is valid`) :  console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);

    let distance3_final = Number.isInteger(Number(distance3)) ? console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`) :  console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);




}
