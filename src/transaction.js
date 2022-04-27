class Transaction {
  constructor ({date = new Date().toLocaleDateString('en-UK'), amount, balance}) {
    this.date = date;
    this.amount = amount;
    this.balance = balance;
  }
}

module.exports = Transaction;
