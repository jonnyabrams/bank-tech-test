const Account = require('../lib/account');

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
  });

  describe('#withdraw', () => {
    it('withdraws money from an account', () => {
      account.deposit(5.50);
      account.withdraw(1.50);
      expect(account.balance).toEqual(4.00);
    });
  });
});