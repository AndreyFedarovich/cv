import React from 'react';
import PropTypes from 'prop-types';
import s from './about.module.scss';

const About = ({ summary }) => (
  <>
    <h2 className={s.title}>About</h2>
    <ul className={s.list}>
      {summary?.map(({ text }, idx) => (
        // TODO: Use an id instead of idx
        <li className={s.text} key={idx}>{text}</li>
      ))}
    </ul>
  </>
);

About.propTypes = {
  summary: PropTypes.array.isRequired,
};

export default React.memo(About);
