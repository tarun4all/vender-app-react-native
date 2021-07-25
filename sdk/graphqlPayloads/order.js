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
      created_at
    }
  }
`;

export const CREATE_ORDER = gql`
  mutation createOrder(
    $category: String!
    $subCategory: String!
    $description: String!
    $quantity: Int!
    $approxOrderValue: String!
    $maxOrderValue: String!
  ) {
    createOrder(
      category: $category
      subCategory: $subCategory
      description: $description
      quantity: $quantity
      approxOrderValue: $approxOrderValue
      maxOrderValue: $maxOrderValue
    ) {
      _id
      quantity
      category
      subCategory
      approxOrderValue
      maxOrderValue
    }
  }
`;
