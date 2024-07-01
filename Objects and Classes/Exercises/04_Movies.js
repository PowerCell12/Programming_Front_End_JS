function movies(arr){

    arr1 = []
    names = [] 
  
    for (let command of arr){
  
      let command_str = command.split(' ');
      let name = command_str.slice(1).join(" ") // add movie
  
  
      if (command_str[0] === "addMovie"){ // done
  
        let obj = {}
  
        obj["name"] = name;
  
        arr1.push(obj);
        names.push(name);
  
      }
  
  
  
      // can the movie be more than one and the director can be more than one 
  
  
      else if (command_str.includes('directedBy')){ // done 
        let index = command_str.indexOf('directedBy');
        let name = command_str.slice(0, index).join(" ");
        let director = command_str.slice(index + 1).join(" ");
  
        for (let f of arr1){
            if (f.name === name){
                f["director"] = director
            }
        }          
      }
  
  
  
  
      else if (command_str.includes('onDate')){
        let index = command_str.indexOf('onDate');
        let name = command_str.slice(0, index).join(" ");
        let date = command_str.slice(index + 1).join(" ");
  
  
        for (let f of arr1){
            if (f.name === name){
                f["date"]= date
            }
        }          
      }
  
  
  
  
  
    }
  
  
  
  
    for (let film of arr1){
  
        if (film.hasOwnProperty('name') && film.hasOwnProperty('date') && film.hasOwnProperty('director')){
            console.log(JSON.stringify(film))
        }
    }    
  
  
  
  }
  
