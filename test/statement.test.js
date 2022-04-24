const Statement = require('../src/statement.js');

beforeEach(() => {
  statement = new Statement();
});

describe('Statement', () => {
  it('initializes with an empty array for storing transactions', () => {
  expect(statement.transactions).toEqual([]);
  });

  it('records a transaction from the account', () => {
    const candy1 = { getName: () => 'Crunchie', getPrice: () =>  (1)};
  });
});