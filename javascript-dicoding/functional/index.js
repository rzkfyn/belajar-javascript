/* Pure Function */
const luasLingkaran = (r) => {
  return 3.15 * r * r;
}

/* Higher Order Function */
const addTwo = (number, callback) => {
  setTimeout(() => callback(number + 2), 5000);
}

addTwo(2, (res) => console.log(res));

/* Immutability */
const changeLastname = (user, newLastName) => {
  return { ...user, lastName: newLastName };
}

const user1 = { firstName: 'Rizki', lastName: 'Softyan' };
const changedUserLastname = changeLastname(user1, 'Sofyan');
console.log(changedUserLastname);