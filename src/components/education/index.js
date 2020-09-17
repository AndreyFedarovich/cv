import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../context';
import s from './education.module.scss';

const Education = ({ title, list }) => {
  const { lang } = useContext(Context);

  return (
    <>
      <h2 className={s.title}>{title[lang]}</h2>
      <div>{list.map(({
        title: listTitle, description, field, start, end,
      }) => (
        <div className={s.text} key={listTitle.eng}>
          <p>{listTitle[lang]}</p>
          <p>{description[lang]}</p>
          <p>{field[lang]} <span className={s.period}>({start} - {end})</span></p>
        </div>
      ))}
      </div>
    </>
  );
};

Education.propTypes = {
  title: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
};

export default React.memo(Education);
