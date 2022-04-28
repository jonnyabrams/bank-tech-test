const Statement = require('./statement');
const Transaction = require('./transaction');

class Account {
  constructor(statement = new Statement(), transaction = Transaction) {
    this.balance = 0;
    this.statement = statement;
    this.transaction = transaction;
  }

  deposit(amount) {
    this.balance += amount;
    this.#recordDeposit(amount);
    return this.getBalance();
  }

  withdraw(amount) {
    if(amount > this.balance) throw new Error('Insufficient funds');
    if(typeof amount !== 'number') throw new Error('Not a number');
  
    this.balance -= amount;
    this.#recordWithdrawal(amount);
    return this.getBalance();
  }

  getBalance() {
    return this.balance;
  }

  getStatement() {
    console.log(this.statement.print());
  }

  #recordDeposit(amount) {
    this.statement.transactions.push(
      new this.transaction({amount: amount, balance: this.balance}));
  }

  #recordWithdrawal(amount) {
    this.statement.transactions.push(
      new this.transaction({amount: amount * -1, balance: this.balance}));
  }
}

module.exports = Account;
