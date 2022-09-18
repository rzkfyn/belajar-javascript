const countries = new Map([
  ['Indonesia', 'Jakarta'],
  ['Japan', 'Tokyo'],
  ['Singapore', 'Singapore'],
  [true, false]
]);

console.log(countries);
console.log(countries.get('Indonesia'));
console.log(countries.get(true));
console.log(countries.has('India'));

countries.set('United States Of America', 'Washington DC');
console.log(countries.has('United States Of America'));
console.log(countries);
countries.delete(true);
console.log(countries);