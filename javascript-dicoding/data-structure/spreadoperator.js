// spread operator (...)
const arr1 = [ 1, 3, 'hello'];
const arr2 = [ 1, 4, 5 ];
console.log(arr1);
console.log(...arr1);
const arr3  = [...arr1, ...arr2];
console.log(arr3);

const me = {
  name: 'Ucok',
  age: 17
}

const myGender = {
  gender: 'Male',
  pronouns: 'he/him'
}

const trulyMe = {
  ...me, ...myGender
}

console.log(trulyMe);
