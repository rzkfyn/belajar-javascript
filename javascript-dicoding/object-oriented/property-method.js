class Mail {
  // private property
  /**@type {string[]} */
  #contacts = [];

  /**
   * 
   * @param {string} from 
   */
  constructor(from) {
    /**@type {string} */
    this.from = from;
  }

  sendMessage = (message, to) => {
    this.#contacts.push(to);
    return `You send '${message}' to ${to}`;
  }

  get contacts() {
    return this.#contacts;
  }

  // static method
  /**
   * 
   * @param {string} email 
   */
  static isEmail(email) {
    let isContainsAt = false;
    for (const char of email.split('')) {
      if (char === '@') isContainsAt = true
    }
    return isContainsAt;
  }
}

const mail = new Mail('rzkfyn@gmail.com');
console.log(Mail.isEmail('rzkfyn@digits.id'));
console.log(mail.sendMessage('Hello', 'rzkfyn@rzkfyn.me'));
console.log(mail.contacts);
