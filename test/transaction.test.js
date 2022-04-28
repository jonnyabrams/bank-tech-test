const Transaction = require('../src/transaction')
const dateMock = require("jest-date-mock");

beforeEach(() => {
  const date = dateMock.advanceTo(new Date(2022, 0, 1, 0, 0, 0));
  transaction = new Transaction({date: date, amount: 100, balance: 100});
});

afterAll(() => {
  dateMock.clear();
});

describe('Transaction', () => {
  it('is an instance of the Transaction class', () => {
    expect(transaction).toBeInstanceOf(Transaction);
  });

  it('stores an amount', () => {
    expect(transaction.amount).toEqual(100);
  });

  it('stores a balance', () => {
    expect(transaction.balance).toEqual(100);
  });

  it('stores a date', () => {
    expect(transaction.date).toEqual(1640995200000);
  });
});