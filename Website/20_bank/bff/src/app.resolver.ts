import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ObjectType,
  Field,
} from '@nestjs/graphql';

@ObjectType()
class AccountType {
  @Field() name: string;
  @Field() accountNumber: string;
  @Field(() => Int) balance: number;
  @Field() bankName: string;
}

@ObjectType()
class TransactionType {
  @Field() id: string;
  @Field() type: string;
  @Field(() => Int) amount: number;
  @Field() description: string;
  @Field() date: string;
}

@ObjectType()
class TransferResultType {
  @Field() success: boolean;
  @Field() message: string;
}

@Resolver()
export class AppResolver {
  // Mock data (later call Microservices from database)
  private mockAccount = {
    name: 'NOAH TRAN',
    accountNumber: '1903969999',
    balance: 5000000,
    bankName: 'NOAH FAKECOMBANK',
  };

  private mockTransactions = [
    {
      id: 'TX1001',
      type: 'RECEIVED',
      amount: 2000000,
      description: 'Monthly salary',
      date: '2026-07-15 10:30',
    },
    {
      id: 'TX1002',
      type: 'SENT',
      amount: 500000,
      description: 'Dinner',
      date: '2026-07-15 19:15',
    },
    {
      id: 'TX1003',
      type: 'SENT',
      amount: 1500000,
      description: 'Electricity',
      date: '2026-07-14 08:00',
    },
  ];

  @Query(() => AccountType)
  getAccountInfo() {
    return this.mockAccount;
  }

  @Query(() => [TransactionType])
  getTransactionHistory() {
    return this.mockTransactions;
  }

  @Mutation(() => TransferResultType)
  transferMoney(
    @Args('recipient') recipient: string,
    @Args('amount', { type: () => Int }) amount: number,
    @Args('description') description: string,
  ) {
    if (amount > this.mockAccount.balance) {
      return {
        success: false,
        message: 'Insufficient balance to complete transaction!',
      };
    }

    this.mockAccount.balance -= amount;
    const newTransaction = {
      id: `TX${Math.floor(1000 + Math.random() * 9000)}`,
      type: 'SENT',
      amount: amount,
      description: description,
      date: new Date().toISOString().replace('T', ' ').substring(0, 16),
    };
    this.mockTransactions.unshift(newTransaction);

    return { success: true, message: 'Transaction completed!' };
  }
}
