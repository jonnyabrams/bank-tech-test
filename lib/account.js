class Account {
  constructor() {
    this.balance = 0;
  };

  getBalance() {
    return this.balance.toFixed(2);
  };

  deposit(amount) {
    this.balance += amount;
  };

  withdraw(amount) {
    if(amount > this.balance) throw new Error('Insufficient funds');
  
    this.balance -= amount;
  };
};

module.exports = Account;