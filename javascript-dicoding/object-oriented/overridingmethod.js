class Animal {
  constructor(name, food, legs) {
    this.name = name;
    this.food = food;
    this.legs = legs;
  }

  eat() {
    return `${this.name} eats ${this.food}`;
  }
}

class Fish extends Animal {
  /**
   * @override
   */
  constructor(name, food, legs, type) {
    super(name, food, legs);
    this.type = type;
  }

  /**
   * @override
   */
  eat() {
    return `${this.name} is a ${this.type} fish, and ${this.name} eats ${this.food}.`;
  }
}


const nemo = new Fish('Neamo', 'plankton', '-', 'sea');
console.log(nemo.eat());
