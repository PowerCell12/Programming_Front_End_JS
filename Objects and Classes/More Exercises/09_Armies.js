function Armies(arr){

  let leaders  = {}
  let total = {}
  
  for (let commands of arr){

    let command = commands.split(" ");

    if (command[command.length - 1] === "arrives"){
      let name = command.slice(0, command.length - 1).join(' ');
      leaders[name] = {}
      total[name] = 0;
      continue;
    }

    if (command[command.length - 1] === "defeated"){
      let name = command.slice(0, command.length - 1).join(" ");
      if (leaders.hasOwnProperty(name)){
        delete leaders[name];
        delete total[name];
      }
      
    }

    if (command.includes("+")){

      let com = commands.split(" + ");

      for (let lead in leaders){

        if (leaders[lead].hasOwnProperty(com[0])){
          leaders[lead][com[0]] += Number(com[1])
          total[lead] += Number(com[1])
        }
        
      }      
      
    }

    let command1 = commands.split(": ")

    if (command1.length > 1){
      let leader = command1[0];
      let armies = command1[1].split(', ')
      let arm_name = armies[0];
    
      if (leaders.hasOwnProperty(leader)){
        total[leader]  += Number(armies[1])

        if (leaders[leader].hasOwnProperty(arm_name)){
          leaders[leader][arm_name] += Number(armies[1])
        }
        else{
          leaders[leader][arm_name] = Number(armies[1])
        }


      }
    
    }
    

    
  }



  let leaders_sorted = Object.entries(total).sort((a, b) => b[1] - a[1])
  let leaders_obj = Object.fromEntries(leaders_sorted);


  for (let print in leaders_obj){

    let armies = Object.fromEntries(Object.entries(leaders[print]).sort((a, b) => b[1] - a[1]));

    console.log(`${print}: ${leaders_obj[print]}`);

    for (let army in armies){
      console.log(`>>> ${army} - ${armies[army]}`)
    }

  }


  
}
