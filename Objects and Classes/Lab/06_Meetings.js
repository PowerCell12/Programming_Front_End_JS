function meetings(arr){
  let obj = {}
  
  for (let appoint of arr){
      let appoint_f = appoint.split(' ');
    
      if (!obj.hasOwnProperty(appoint_f[0])){
        obj[appoint_f[0]] = appoint_f[1]
        console.log(`Scheduled for ${appoint_f[0]}`)
      }
      else{
        console.log(`Conflict on ${appoint_f[0]}!`);
      }
  }

  for (let appointments in obj){
    console.log(`${appointments} -> ${obj[appointments]}`);
  }
  
  
}
