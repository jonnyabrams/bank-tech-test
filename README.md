# Bank Tech Test

## Description

As a tech test while attending the Makers Academy boot camp, I built this interactive bank account program intended only for use in the Node REPL. It lets you create a new account, desposit and withdraw funds, and view a statement in a specified format.

The instructed output format was as follows:

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Instructions for Use

* Clone this repo
* Install nvm and Node
* Move into the project directory
* Run the command `node` to initiate the REPL and then load the application with `.load src/account.js`
* To run the tests, install Jest with `npm install jest` and then run simply `jest`
* To see test coverage, run `jest --coverage`

## Example of Use in Node REPL

```
> account = new Account
Account {
  balance: 0,
  statement: Statement {
    transactions: [],
    header: 'date || credit || debit || balance\n'
  },
  transaction: [class Transaction]
}
> account.deposit(50)
50
> account.withdraw(30.50)
19.5
> account.withdraw(20)
Uncaught Error: Insufficient funds
    at Account.withdraw (REPL4:18:71)
> account.withdraw(12.25)
7.25
> account.deposit(54.80)
62.05
> account.getStatement()
date || credit || debit || balance
28/04/2022 || £54.80 || || £62.05
28/04/2022 || || £12.25 || £7.25
28/04/2022 || || £30.50 || £19.50
28/04/2022 || £50.00 || || £50.00
```

* Here I create a new account, which initializes with an empty balance and statement

* I then deposit £50, withdraw £30.50 and check my balance, which is now £19.50

* Then I try to withdraw £20, prompting an 'insufficient funds' error message

* After a couple of further transactions, I print my statement

## My Approach

1. Test-driving an Account class, first expecting it to initialize with a balance of 0

2. Test-driving a deposit function, followed by a withdraw function working on the inverse logic, giving the latter a guard clause that throws an 'insufficient funds' error if the withdrawal amount exceeds the existing balance - for this I made a getBalance method that returns the balance to 2 decimal places

3. Creating private functions for recording deposits and withdrawals and using them to create new instances of the Transaction class, which in turn get stored in the transactions array of the Statement class

4. Formatting the transactions correctly in the Statement class and printing them in reverse chronological order under a header alongside the date of the transaction

## Improvements I Would Like to Implement

* With more time, I would have liked to add more guard clauses that prohibit a user from trying to deposit or withdraw non-numeric amounts

* A snazzy user interface would be nice, but that wasn't part of the specification

[Jonny Abrams](https://github.com/jonnyabrams)