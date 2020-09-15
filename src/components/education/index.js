import React from 'react';
import PropTypes from 'prop-types';
import s from './education.module.scss';

const Education = ({ title }) => (
  <>
    <h2 className={s.title}>{title}</h2>
  </>
);

Education.propTypes = {
  title: PropTypes.string.isRequired,
};

export default React.memo(Education);
