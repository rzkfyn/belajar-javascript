class Animal {
  constructor(name, food) {
    this.name = name;
    this.food = food;
  }

  eat() {
    return `${this.name} eats ${this.food}`;
  }
}

class Cat extends Animal {
  constructor(name, food) {
    super(name, food);
  }
}

const bob = new Cat('Bob', 'fish');

console.log(bob.eat());
