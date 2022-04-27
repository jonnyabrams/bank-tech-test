const Statement = require('./statement');

class Account {
  constructor() {
    this.balance = 0;
    this.statement = new Statement();
  }

  deposit(amount, date = new Date().toLocaleDateString('en-GB')) {
    this.balance += amount;
    this.#recordDeposit(amount, date);
    return this.getBalance();
  }

  withdraw(amount, date = new Date().toLocaleDateString('en-GB')) {
    if(amount > this.balance) throw new Error('Insufficient funds');
  
    this.balance -= amount;
    this.#recordWithdrawal(amount, date);
    return this.getBalance();
  }

  getBalance() {
    return this.balance;
  }

  getStatement() {
    console.log(this.statement.print());
  }

  #recordDeposit(amount, date) {
    this.statement.transactions.push([date, amount, this.balance]);
  }

  #recordWithdrawal(amount, date) {
    this.statement.transactions.push([date, amount * -1, this.balance]);
  }
}

module.exports = Account;
