import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface BalanceList {
  transactions: Transaction[];
  balance: Balance;
}

class TransactionsRepository {
  private transactions: Transaction[];

  private total: number;

  constructor() {
    this.transactions = [];
    this.total = 0;
  }

  public all(): BalanceList {
    // TODO
    const balanceList = {
      transactions: this.transactions,
      balance: this.getBalance(),
    } as BalanceList;

    return balanceList;
  }

  public getBalance(): Balance {
    // TODO
    const income = this.transactions
      .filter(transaction => transaction.type === 'income')
      .reduce(function (total, transaction: Transaction) {
        return total + transaction.value;
      }, 0);

    const outcome = this.transactions
      .filter(transaction => transaction.type === 'outcome')
      .reduce(function (total, transaction: Transaction) {
        return total + transaction.value;
      }, 0);

    this.total = income - outcome;

    return {
      income,
      outcome,
      total: this.total,
    } as Balance;
  }

  public create({ title, value, type }: Transaction): Transaction {
    // TODO
    const transaction = new Transaction({ title, value, type });
    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
