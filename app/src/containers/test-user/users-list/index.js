import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../../../graphql/query/user';
import s from './users-list.module.scss';

const TestPage = () => {
  const { data: usersData } = useQuery(GET_USERS);

  if (!usersData) return null;
  const { users } = usersData;

  return (!!users.length && (
    <ul className={s.root}>
      {users.map(({ id, name, lastname }) => (
        <li className={s.row} key={id}>
          <span>{id}</span>
          <span>{`${name} ${lastname}`}</span>
        </li>
      ))}
    </ul>
  )
  );
};

TestPage.propTypes = {};

export default TestPage;
