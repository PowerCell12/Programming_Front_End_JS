function load_bar(percentage){


    const to_fine = percentage / 10;

    if (to_fine === 10){
        console.log('100% Complete!');
        return '[%%%%%%%%%%]'
    }

    console.log(`${percentage}% [${"%".repeat(to_fine)}${".".repeat(10 - to_fine)}]`);
    return "Still loading...";
}
