const Statement = require('../src/statement');

beforeEach(() => {
  statement = new Statement;
});

describe('Statement', () => {
  it('is an instance of the Statement class', () => {
    expect(statement).toBeInstanceOf(Statement);
  });

  it('has an empty array for storing transactions', () => {
    expect(statement.transactions).toEqual([])
  });
});
