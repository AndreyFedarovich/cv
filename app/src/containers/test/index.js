import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../../graphql/query/user';
import UserCreator from './user-creator';

const TestPage = () => {
  const { data: usersData } = useQuery(GET_USERS);

  if (!usersData) return null;
  const { users } = usersData;

  return (
    <>
      <UserCreator />
      <br />
      <br />
      {!!users.length && (
        <ul>
          {users.map(({ id, name, lastname }) => (
            <li key={id}>
              <span>{name}</span>
              <span>{lastname}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

TestPage.propTypes = {};

export default TestPage;
