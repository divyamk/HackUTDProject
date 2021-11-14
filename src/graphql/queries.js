/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStock = /* GraphQL */ `
  query GetStock($id: ID!) {
    getStock(id: $id) {
      id
      sector
      risk
      instrumentType
      companyName
      beta
      lastPrice
      socialScore
      annualReturn
      createdAt
      updatedAt
    }
  }
`;
export const listStocks = /* GraphQL */ `
  query ListStocks(
    $filter: ModelStockFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStocks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sector
        risk
        instrumentType
        companyName
        beta
        lastPrice
        socialScore
        annualReturn
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
