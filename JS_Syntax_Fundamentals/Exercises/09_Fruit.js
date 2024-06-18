function fruit(type, weight, price_kil){

  let kil = weight / 1000;

  let price = kil * price_kil;

  console.log(`I need $${price.toFixed(2)} to buy ${kil.toFixed(2)} kilograms ${type}.`)
}
