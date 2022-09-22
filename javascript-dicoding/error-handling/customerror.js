class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

const response = '{ "age": 9 }';

try {
  const user = JSON.parse(response);
  if (!user.name) throw new ValidationError('field `name` is requied');
} catch (e) {
  console.log(e.message, e instanceof ValidationError);
}