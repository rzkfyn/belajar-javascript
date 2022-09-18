const wife = {
  name: 'Yoroizuka',
  age: 18,
  gender: 'female'
}

console.log(wife.name);

delete wife.name;

console.log(wife);

wife.name = 'Yoroizuka Mizore';
wife.age = 17;
wife['Best Friend'] = 'Nozomi';

console.log(wife);

delete wife['Best Friend'];

console.log(wife);