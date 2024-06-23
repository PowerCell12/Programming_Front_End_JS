function login(arr){

    let username = arr[0]

    let password = arr[0].split("").reverse().join("")


    let tries = 0;


    let arr_final = arr.slice(1);

    for (let words of arr_final){

        if (words === password){
            return `User ${username} logged in.`
        }


        tries++;

        if (tries === 4){
            return`User ${username} blocked!`
        }

        console.log(`Incorrect password. Try again.`)

    }


}
