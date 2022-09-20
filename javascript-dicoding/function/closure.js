// a function that have an access to a variable in a lexical scope

const counter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  }
}

const addCounter = counter();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());
console.log(addCounter());