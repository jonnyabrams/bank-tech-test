# Bank Tech Test

* install Node and Jest (clone repo as instruction for use)

* test-drive Account class, first expecting it to initialize with default balance of 0

* test-drive deposit function, then a withdraw function working on the inverse logic, adding a guard clause that throws an 'insufficient funds' error if withdrawal amount exceeds balance - for this I make a getBalance method that returns the balance with 2 decimal places

* with basic account logic in place it was time to think about storing transactions on a statement - this could get unwieldy so was time for a new class, test-driven of course

* testing a statement initializes with empty array for storing transactions was straightforward, now had to implement the logic for actually storing them - then realised it would probably be helpful to have a separate Transaction class to convert them into the right format, in a single string as per the specification - so I parked the Statement and test-drove Transaction

### Acceptance criteria

Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```