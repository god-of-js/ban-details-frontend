import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";
import API from "@/api";
import { Sorter, Transaction } from "@/types/interfaces";

@Module
class TransactionsModule extends VuexModule {
  transactions: Transaction[] = [];
  transaction: Transaction | null = null;
  sortValue: Sorter = null;

  @Mutation
  setTransactions(param: Transaction[]) {
    this.transactions = param;
  }

  @Mutation
  setTransaction(param: Transaction) {
    this.transaction = param;
  }

  @Mutation
  setFilter(value: Sorter) {
    this.sortValue = value;
  }

  get transactionList(): Transaction[] {
    if (this.sortValue === "start") {
      return this.transactions?.slice().sort((first, second) => {
        return (
          new Date(first.createdAt).getTime() -
          new Date(second.createdAt).getTime()
        );
      });
    } else if (this.sortValue === "end") {
      return this.transactions?.slice().sort((first, second) => {
        return (
          new Date(second.createdAt).getTime() -
          new Date(first.createdAt).getTime()
        );
      });
    }
    return this.transactions;
  }

  @Action
  async getTransactionByID(param: number): Promise<void> {
    const transaction = await API.getTransactionById(param);
    this.setTransaction(transaction);
  }

  @Action
  async getTransactions(): Promise<void> {
    const transactions = await API.getTransactions();
    this.setTransactions(transactions);
  }
}

import store from "../index";
export const transactionModule = new TransactionsModule({
  store,
  name: "Transactions",
});
