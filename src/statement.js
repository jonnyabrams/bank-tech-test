class Statement {
  constructor() {
    this.transactions = [];
    this.header = 'date || credit || debit || balance\n';
  }

  print() {
    return this.header + this.formatStatementRows().reverse().join('\n');
  }
 
  formatStatementRows() {
    return this.transactions.map((transaction) => {
      if (transaction[1] > 0) {
        return `${transaction[0]} || £${transaction[1].toFixed(2)} || || £${transaction[2].toFixed(2)}`;
      } 
      
      if (transaction[1] < 0) {
        return `${transaction[0]} || || £${(transaction[1] * -1).toFixed(2)} || £${transaction[2].toFixed(2)}`;
      }
    })
  }
}

module.exports = Statement;