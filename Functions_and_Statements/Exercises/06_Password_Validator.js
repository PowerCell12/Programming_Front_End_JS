function pass_val(pass){
  let pattern = /^[A-Za-z0-9]+$/
  const len1 = pass => pass.length > 5 && pass.length < 11
  const dig_let = pass => pattern.test(pass)
  const count1 = pass => pass.split('').filter(x =>!isNaN(parseInt(x))).length > 1;


  if (len1(pass) && dig_let(pass) && count1(pass)){
    return 'Password is valid'
  }
  else{

    if (!len1(pass)){
      console.log('Password must be between 6 and 10 characters');
    }

    if (!dig_let(pass)){
      console.log('Password must consist only of letters and digits');
    }

    if (!count1(pass)){
      console.log('Password must have at least 2 digits');
    }
  
    
  }
  
}
