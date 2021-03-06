import { gql } from '@apollo/client';

export const ADD_RESUME = gql`
  mutation addResume(
    $userId: ID
    $name: String
    $lastname: String
    $email: String!
    $phoneNumber: String!
    $position: String!
    $isPublished: Boolean!
  ) {
    addResume(
      userId: $userId
      name: $name
      lastname: $lastname
      email: $email
      phoneNumber: $phoneNumber
      position: $position
      isPublished: $isPublished
    ) {
      id
      userId
      name
      lastname
      email
      phoneNumber
      position
      isPublished
    }
  }
`;

export const UPDATE_RESUME = gql`
  mutation updateResume(
    $id: ID
    $name: String
    $lastname: String
    $email: String
    $phoneNumber: String
    $position: String
    $isPublished: Boolean
  ) {
    updateResume(
      id: $id
      name: $name
      lastname: $lastname
      email: $email
      phoneNumber: $phoneNumber
      position: $position
      isPublished: $isPublished
    ) {
      name
      lastname
      email
      phoneNumber
      position
      isPublished
    }
  }
`;
