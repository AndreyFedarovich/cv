import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_RESUME_LIST } from '../../../graphql/query/resume';
import s from './users-list.module.scss';

const TestPage = () => {
  const { data: usersData } = useQuery(GET_RESUME_LIST);

  if (!usersData) return null;
  const { resumeList } = usersData;

  return (!!resumeList.length && (
    <ul className={s.root}>
      {resumeList.map(({ id, name, lastname }) => (
        <li className={s.row} key={id}>
          <span> {id} </span>
          <span>{`${name} ${lastname}`}</span>
        </li>
      ))}
    </ul>
  )
  );
};

TestPage.propTypes = {};

export default TestPage;
