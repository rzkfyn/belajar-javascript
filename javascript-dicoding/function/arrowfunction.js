const a = () => 'b';
console.log(a);

const greet = name => `Hello ${name}`;
/* The code above is the same as */
/*
const greet = name => {
  return `Hello ${name}`;
}
*/

console.log(greet('Yoroizuka'));