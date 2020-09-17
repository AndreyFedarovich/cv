import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../context';
import s from './about.module.scss';

const About = ({ title, list }) => {
  const { lang } = useContext(Context);
  return (
    <>
      <h2 className={s.title}>{title[lang]}</h2>
      <ul className={s.list}>
        {list.map((item) => (
          <li className={s.text} key={item.eng}>{item[lang]}</li>
        ))}
      </ul>
    </>
  );
};

About.propTypes = {
  title: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
};

export default React.memo(About);
