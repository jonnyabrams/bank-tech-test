const Account = require('../src/account');

beforeEach(() => {
  account = new Account();
});

describe('Account', () => {
  it('initializes with a balance of 0', () => {
    expect(account.balance).toEqual(0);
  });

  describe('#deposit', () => {
    it('deposits money into an account', () => {
      account.deposit(5.50);
      expect(account.balance).toEqual(5.50)
    });
    // it('records the transaction', () => {
    //   const date = '24/04/2022';
    //   account.deposit(20, date);
    //   expect(account.statement.transactions.length()).toEqual(1);
    // });
  });

  describe('#withdraw', () => {
    it('withdraws money from an account', () => {
      account.deposit(5.50);
      account.withdraw(1.50);
      expect(account.balance).toEqual(4.00);
    });
    it('can not withdraw more money than is in the account', () => {
      expect(() => { account.withdraw(1) }).toThrowError('Insufficient funds');
      account.deposit(20);
      expect(() => { account.withdraw(21) }).toThrowError('Insufficient funds');
    });
    // it('records a withdrawal in the correct format', () => {
    //   const date = '24/04/2022';
    //   account.deposit(20, date);
    //   account.withdraw(10, date);
    //   expect(account.transactions).toEqual(["24/04/2022 || 20 || || £20.00", "24/04/2022 || || 10 || £10.00"]);
    // });
  });
  
  describe('#getBalance', () => {
    it('displays the account balance', () => {
      account.deposit(10.20);
      expect(account.getBalance()).toEqual(10.20);
    });
  });

  describe('#getStatement', () => {
    it('shows all transactions in reverse chronological order', () => {
      const date = '24/04/2022';
      account.deposit(20, date);
      account.withdraw(10, date);
      console.log = jest.fn();
      account.getStatement();
      expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance\n' +
      '24/04/2022 || || £10.00 || £10.00\n' +
      '24/04/2022 || £20.00 || || £20.00');
    });
  });
});
