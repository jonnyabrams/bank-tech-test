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
    this.#recordDeposit(amount, date);
    return this.getBalance();
  }

  withdraw(amount, date = new Date().toLocaleDateString('en-GB')) {
    if(amount > this.balance) throw new Error('Insufficient funds');
  
    this.balance -= amount;
    this.#recordWithdrawal(amount, date);
    return this.getBalance();
  }

  #recordDeposit(amount, date) {
    this.transactions.push(`${date} || ${amount} || || £${this.getBalance()}`);
  }

  #recordWithdrawal(amount, date) {
    this.transactions.push(`${date} || || ${amount} || £${this.getBalance()}`);
  }
}

module.exports = Account;
