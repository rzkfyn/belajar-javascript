const numbers = new Set([1,2,3,2]);

console.log(numbers);
numbers.add(10);
numbers.add(1);
numbers.add(['foo', 'bar']);
console.log(numbers);
console.log(numbers.has(3));
numbers.delete(3);
console.log(numbers.has(3));
console.log(numbers);
