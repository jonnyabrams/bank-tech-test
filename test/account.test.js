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
    it('records a deposit in the correct format', () => {
      const date = '24/04/2022';
      account.deposit(20, date);
      expect(account.getTransactions()).toEqual(["24/04/2022 || 20 || || £20.00"]);
    });
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
    it('records a withdrawal in the correct format', () => {
      const date = '24/04/2022';
      account.deposit(20, date);
      account.withdraw(10, date);
      expect(account.getTransactions()).toEqual(["24/04/2022 || 20 || || £20.00", "24/04/2022 || || 10 || £10.00"]);
    });
  });
  
  describe('#getBalance', () => {
    it('displays the account balance', () => {
      account.deposit(10.20);
      expect(account.getBalance()).toStrictEqual('10.20');
    });
  });

  describe('#getTransactions', () => {
    it('shows all transactions in the correct format', () => {
      const date = '24/04/2022';
      account.deposit(20, date);
      account.withdraw(10, date);
      expect(account.getStatement()).toEqual("date || credit || debit || balance\n24/04/2022 || 20 || || £20.00\n24/04/2022 || || 10 || £10.00");
    });
  });
});
