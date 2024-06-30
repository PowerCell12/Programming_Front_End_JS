function cats(arr){

  class Cat{

    constructor(name, age){
      this.name = name
      this.age = age
    }

    meow(){
      return `${this.name}, age ${this.age} says Meow`
    }

  }

  for (let cat of arr){

    let cat_f = cat.split(' ');

    let cat1 = new Cat(cat_f[0], Number(cat_f[1]))

    console.log(cat1.meow())
    
  }
  
}
