const Account = require('../lib/account');

beforeEach(() => {
  account = new Account();
});

describe('Account', () => {
  it('initializes with a balance of 0', () => {
    expect(account.balance).toEqual(0);
  });
});