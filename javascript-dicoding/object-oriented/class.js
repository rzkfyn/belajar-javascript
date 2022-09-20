// class with function syntax
// function Mail() {
//   // property
//   this.from = 'rzkfyn@gmail.com';
// }
// //method
// Mail.prototype.sendMessage = function(to) {
//   return `You send a message to ${to}`
// }

// const mail1 = new Mail()

// class with class syntax
class Mail {
  constructor() {
    // property
    this.from = 'rzkfyn@gmail.com';
  }

  sendMessage(to) {
    return `You send a message to ${to}`;
  }
}

const mail = new Mail();

console.log(mail.from);
console.log(mail.sendMessage('rzkfyn@rzkfyn.me'));
