const multiply = function(a, b) {
  return a * b;
}

// Default parameter
const greeting = function(lang = 'id') {
  if (lang === 'id') {
    return 'Selamat pagi!';
  } else if (lang === 'en') {
    return 'Good morning!';
  } else {
    return 'Ohayou Gozaimasu';
  }
}

// rest parameter
const sum = function(...numbers) {
  let res = 0;
  for (const number of numbers) res += number
  return res;
}

console.log(multiply(2, 3));
console.log(greeting());
console.log(sum(10,9,8,7));