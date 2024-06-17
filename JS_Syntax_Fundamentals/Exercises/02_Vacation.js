function vacation(how_many, type, day){
    let discount = 1;
    let price = 1;

    switch (type){
      

      case 'Students':

        if (how_many >= 30){
            discount = 0.85;
        };
        
        switch (day){

          case 'Friday':
            price = how_many * 8.45 * discount;
            return  `Total price: ${price.toFixed(2)}`
            break;

          case 'Saturday':
            price =  how_many * 9.80 * discount;
            return  `Total price: ${price.toFixed(2)}`
            break;

          case 'Sunday':
            price =  how_many * 10.46 * discount;
            return  `Total price: ${price.toFixed(2)}`
            break;
          
        } 

        
      case 'Business':
            
        if (how_many >= 100){
            how_many -= 10;
        }
        switch (day){


            case 'Friday':
              price = how_many * 10.90;
              return  `Total price: ${price.toFixed(2)}`
              break;

            case 'Saturday':
              price  = how_many * 15.60;
              return  `Total price: ${price.toFixed(2)}`
              break;

            case 'Sunday':
              price  = how_many * 16;
              return  `Total price: ${price.toFixed(2)}`
              break;

        }


      case 'Regular':

        if (how_many >= 10 && how_many <= 20){
            discount = 0.95;
        }


        switch (day){

            case 'Friday':
              price = how_many * 15 * discount;
              return  `Total price: ${price.toFixed(2)}`
              break;


            case 'Saturday':
              price = how_many * 20 * discount;
              return  `Total price: ${price.toFixed(2)}`
              break;

            case 'Sunday':
              price =  how_many * 22.50 * discount;
              return  `Total price: ${price.toFixed(2)}`
              break;

        }
        
    }
  
  
}
