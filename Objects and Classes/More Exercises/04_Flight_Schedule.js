function flight(arr){
  obj = {}
  let flights = arr[0];
  let changes = arr[1];
  let status = arr[2][0];

  for (let flight of flights){
    let flight1 = flight.split(" ")
    obj[flight1[0]] = [flight1[1]];
  }


  for (let change of changes){
      let change1 = change.split(" ");

      if (obj.hasOwnProperty(change1[0])){
       obj[change1[0]].push(change1[1]);
      }

  }


  for (let flight2 in obj){

    if (status === "Cancelled"){

      if (obj[flight2].length > 1){
        console.log({Destination: obj[flight2][0],Status: 'Cancelled'})
      }

    }
    else if (status === "Ready to fly"){
      
      if (obj[flight2].length === 1){
        console.log({Destination: obj[flight2][0],Status: 'Ready to fly'})
      }
        
    }


  }

}
