import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../context';
import s from './education.module.scss';

const Education = ({ title }) => {
  const { lang } = useContext(Context);

  return (
    <>
      <h2 className={s.title}>{title[lang]}</h2>
    </>
  );
};

Education.propTypes = {
  title: PropTypes.object.isRequired,
};

export default React.memo(Education);
