  class Storage{

    constructor(capacity){
      this.capacity = capacity;
      this.storage = [];
      this.totalCost = 0;
    }

    addProduct(product){

      if (this.capacity - product.quantity >= 0){
        this.capacity -= product.quantity;
        this.storage.push(product);
        this.totalCost += product.price  * product.quantity
      }

    }

    getProducts(){
      let arr = []
      for (let product of this.storage){
        arr.push(JSON.stringify(product));
      }

      return arr.join("\n");


    }


  }
