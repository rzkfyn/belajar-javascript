// OOP JS

// initialization a new class
class Person{
    // constructor funct
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.energy = 10;
    }

    /**
     * 
     * @param {Food} food 
     * @returns 
     */
    eat(food){
        if(food.type !== 'human-food') return `${this.name} can't eat this food`;
        this.energy += food.weight;
        return `${this.name} now have ${this.energy} energy`;
    }
}

class Food{
    constructor(name, weight, type){
        this.name = name;
        this.weight = weight;
        this.type = type;
    }
}

const bacang = new Food('Bacang', 10, 'human-food');
const bambang = new Person('Bambang', 19);
console.log(bambang.eat(bacang));