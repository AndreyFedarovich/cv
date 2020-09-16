import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Context } from '../../context';
import s from './lang.module.scss';

const Lang = ({ options }) => {
  const { selectLang, lang } = useContext(Context);
  return (
    <div className={s.wrap}>
      {options.map((option) => (
        <button
          tabIndex={option === lang ? '-1' : '0'}
          className={cn({ [s.active]: option === lang })}
          onClick={(e) => {
            e.target.blur();
            selectLang(option);
          }}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

Lang.propTypes = {
  options: PropTypes.array.isRequired,
};

export default React.memo(Lang);
