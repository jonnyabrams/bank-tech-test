const Account = require('../src/account');
const dateMock = require("jest-date-mock");

beforeEach(() => {
  account = new Account();
  dateMock.advanceTo(new Date(2022, 0, 1, 0, 0, 0))
});

afterAll(() => {
  dateMock.clear();
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

    it('records the transaction', () => {
      account.deposit(20);
      expect(account.statement.transactions.length).toEqual(1);
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

    it('records the transaction', () => {
      account.deposit(20);
      account.withdraw(10);
      expect(account.statement.transactions.length).toEqual(2);
    });
  });
  
  describe('#getBalance', () => {
    it('displays the account balance', () => {
      account.deposit(10.20);
      expect(account.getBalance()).toEqual(10.20);
    });
  });

  describe('#getStatement', () => {
    it('shows all transactions in reverse chronological order', () => {
      account.deposit(20);
      account.withdraw(10);
      console.log = jest.fn();
      account.getStatement();
      expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance\n' +
      '01/01/2022 || || £10.00 || £10.00\n' +
      '01/01/2022 || £20.00 || || £20.00');
    });
  });
});
