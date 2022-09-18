/* destructuring object */
const waifu = {
  name: 'Yoroizuka Mizore',
  age: 18
}

const { name, age } = waifu;
console.log(`My wife's name is ${name} and she is ${age} years old.`);

const fooBar = {
  foo: 'foo',
  bar: 'bar'
}

let foo = 'bar';
let bar = 'foo';

console.log(foo, bar);

({ foo, bar } = fooBar);

console.log(foo, bar);

// assign to other local var
const me = {
  nickName: 'Fyn',
  pp: '18 cm'
}
const { nickName: pp, pp: nickName } = me;

console.log(`Hello my name is Sofyan and my nick name is ${pp} and my pp is ${nickName} long.`);

/* destructuring array */
const fruits = [ 'Apple', 'Banana', 'Orange', 'Grape' ];
const [ firstFruit, secondFruit ] = fruits;
console.log(firstFruit, secondFruit);
const [ , , thirdFruit ] = fruits;
console.log(thirdFruit);

let foo1 = 'bar';
let bar1 = 'foo';

[ bar1, foo1 ] = [ foo1, bar1 ];
console.log(foo1, bar1);

const [ , , , , , , , , , , tf = 'Dragon Fruit' ] = fruits;
console.log(tf);