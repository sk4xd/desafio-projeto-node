import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, type, value }: Transaction): Transaction {
    // TODO
    const balance = this.transactionsRepository.getBalance();
    let result = 0;
    if (type === 'outcome') {
      result = balance.total - value;
    }
    if (result < 0) {
      throw Error('string');
    }
    const transaction = this.transactionsRepository.create({
      title,
      type,
      value,
    } as Transaction);

    return transaction;
  }
}

export default CreateTransactionService;
