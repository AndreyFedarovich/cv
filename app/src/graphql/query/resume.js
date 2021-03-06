import { gql } from '@apollo/client';

export const GET_RESUME_LIST = gql`
  query resumeList {
    resumeList {
      id
      name
      lastname
    }
  }
`;
