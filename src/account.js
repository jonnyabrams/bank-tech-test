class Account {
  constructor() {
    this.balance = 0;
    this.transactions = []
  }

  getBalance() {
    return this.balance.toFixed(2);
  }

  getStatement() {
    return "date || credit || debit || balance\n" + this.transactions.join("\n");
  }

  deposit(amount, date = new Date().toLocaleDateString('en-GB')) {
    this.balance += amount;
    this._recordDeposit(amount, date);
  }

  withdraw(amount, date = new Date().toLocaleDateString('en-GB')) {
    if(amount > this.balance) throw new Error('Insufficient funds');
  
    this.balance -= amount;
    this._recordWithdrawal(amount, date);
  }

  _recordDeposit(amount, date) {
    this.transactions.push(`${date} || ${amount} || || £${this.getBalance()}`);
  }

  _recordWithdrawal(amount, date) {
    this.transactions.push(`${date} || || ${amount} || £${this.getBalance()}`);
  }
}

module.exports = Account;
