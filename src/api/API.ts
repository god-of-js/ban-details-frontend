import defaultClient from "./apollo.instance";
import { DocumentNode } from "apollo-link";
import { GET_TRANSACTION_BY_ID, GET_TRANSACTIONS } from "./queries";
import { Transaction } from "@/types/interfaces";

class API {
  async getTransactionById(id: number): Promise<Transaction> {
    return API._queryGQL<{ id: number }>(GET_TRANSACTION_BY_ID, {
      id,
    }).then((result) => result.transaction);
  }

  async getTransactions(): Promise<Transaction[]> {
    return API._queryGQL(GET_TRANSACTIONS).then(
      (result) => result.transactions
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static _queryGQL<T = any>(query: DocumentNode, data?: T): Promise<any> {
    return defaultClient
      .query({ query, variables: data })
      .then(({ data }) => data)
      .catch((err) => console.log(err));
  }
}

export default API;
