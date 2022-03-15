import gql from "graphql-tag";

const GET_TRANSACTION_BY_ID = gql`
  query Transaction($id: Int!) {
    transaction(id: $id) {
      id
      uid
      account
      amount
      currency
      updatedAt
      description
    }
  }
`;

const GET_TRANSACTIONS = gql`
  query {
    transactions {
      id
      account
      amount
      currency
      updatedAt
      createdAt
      description
    }
  }
`;

export { GET_TRANSACTION_BY_ID, GET_TRANSACTIONS };
