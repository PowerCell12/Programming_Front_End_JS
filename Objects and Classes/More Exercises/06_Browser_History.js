function browser_h(object, arr){


  for (let ac of arr){

    let action = ac.split(" ");
    let name = action.slice(1)[0];


    if (ac === "Clear History and Cache"){
      object["Open Tabs"] = [];
      object["Recently Closed"] = [];
      object["Browser Logs"] = [];      
      
      continue;
    }

    if (action[0] === "Close"){

      if (object["Open Tabs"].includes(name)){

        let index = object["Open Tabs"].indexOf(name);
        object["Open Tabs"].splice(index, 1);
        object["Recently Closed"].push(name)
        object["Browser Logs"].push(ac);
        
      }
      
    } 

    if (action[0] === "Open"){

      if (!object['Open Tabs'].includes(name)){
        object["Open Tabs"].push(name);
        object["Browser Logs"].push(ac);
      }
      
    }
    
  }

  console.log(object["Browser Name"]);
  console.log(`Open Tabs: ${object['Open Tabs'].join(', ')}`)
  console.log(`Recently Closed: ${object['Recently Closed'].join(', ')}`);
  console.log(`Browser Logs: ${object['Browser Logs'].join(', ')}`);

}
