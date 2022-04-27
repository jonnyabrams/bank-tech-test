class Statement {
  constructor() {
    this.transactions = [];
    this.header = 'date || credit || debit || balance\n';
  }

  print() {
    return this.header + this.#formatStatementRows().reverse().join('\n');
  }
 
  #formatStatementRows() {
    return this.transactions.map((transaction) => {
      if (transaction.amount > 0) {
        return `${transaction.date} || £${transaction.amount.toFixed(2)} || || £${transaction.balance.toFixed(2)}`;
      } 
      
      if (transaction.amount < 0) {
        return `${transaction.date} || || £${(transaction.amount * -1).toFixed(2)} || £${transaction.balance.toFixed(2)}`;
      }
    })
  }
}

module.exports = Statement;
