import { gql } from "@apollo/client";

export const GET_ALL_ORDERS_QUERY = gql`
  query getOrders {
    getOrders {
      _id
      quantity
      category
      description
      subCategory
      approxOrderValue
      maxOrderValue
    }
  }
`;
