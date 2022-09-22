const response = '{"name": null, "age": 9}';

try {
  const user = JSON.parse(response);

  ucok;

  if (!user.name) throw new SyntaxError('field `name` is required.');

  console.log(`The user is ${user.name} and ${user.name} is ${user.age} years old.`);
} catch (e) {
  if (e instanceof ReferenceError) {
    console.log(e.message);
  } else {
    console.log(e.message);
  }
}