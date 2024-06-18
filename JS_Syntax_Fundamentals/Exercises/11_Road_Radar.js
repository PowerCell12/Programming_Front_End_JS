function road_radar(speed, type){

  switch (type){
  
    case 'motorway':

      if (speed > 130){
          let speeding = speed - 130;
          let status = 'speeding';

          if (20 < speeding  && speeding < 41){
            status = 'excessive speeding'
          }
          else if (speeding > 40){
            status = 'reckless driving'
          }
          console.log(`The speed is ${speeding} km/h faster than the allowed speed of 130 - ${status}`)
      }
      else{
        console.log(`Driving ${speed} km/h in a 130 zone`);
      };

      break;  
      

    case 'interstate':
      if (speed > 90){
        let speeding = speed - 90;
        let status = 'speeding';

        if (20 < speeding && speeding < 41){
          status = 'excessive speeding'
        }
        else if (speeding > 40){
          status = 'reckless driving'
        }
        console.log(`The speed is ${speeding} km/h faster than the allowed speed of 90 - ${status}`)
      }
      else{
      console.log(`Driving ${speed} km/h in a 90 zone`);
      };

      break;

    case 'city':
      if (speed > 50){
        let speeding = speed - 50;
        let status = 'speeding';

        if (20 < speeding && speeding  < 41){
          status = 'excessive speeding'
        }
        else if (speeding > 40){
          status = 'reckless driving'
        }
        console.log(`The speed is ${speeding} km/h faster than the allowed speed of 50 - ${status}`)
      }
      else{
      console.log(`Driving ${speed} km/h in a 50 zone`);
      };

      break;

    case 'residential':
      if (speed > 20){
        let speeding = speed - 20;
        let status = 'speeding';

        if (20 < speeding && speeding  < 41){
          status = 'excessive speeding'
        }
        else if (speeding > 40){
          status = 'reckless driving'
        }
        console.log(`The speed is ${speeding} km/h faster than the allowed speed of 20 - ${status}`)
      }
      else{
      console.log(`Driving ${speed} km/h in a 20 zone`);
      };

      break;
  }
}
