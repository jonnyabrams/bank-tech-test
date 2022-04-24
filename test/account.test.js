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
      account.deposit(20);
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
  });
  
  describe('#getBalance', () => {
    it('displays the account balance', () => {
      account.deposit(10.20);
      expect(account.getBalance()).toStrictEqual('10.20');
    });
  });
});
