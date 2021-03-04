import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($name: String, $lastname: String, $email: String!) {
    addUser(name: $name, lastname: $lastname, email: $email ) {
      name
      lastname
      email
    }
  }
`;
