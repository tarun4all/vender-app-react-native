import { gql } from "@apollo/client";

export const LOGIN = gql`
  query customerLogin($email: String!, $password: String!) {
    customerLogin(email: $email, password: $password) {
      token
    }
  }
`;

export const SIGNUP = gql`
  mutation customerSignup(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $gender: Gender!
    $age: Int!
  ) {
    customerSignup(
      firstName: $firstName
      lastName: $lastName
      age: $age
      gender: $gender
      email: $email
      password: $password
    ) {
      _id
      firstName
      lastName
    }
  }
`;
