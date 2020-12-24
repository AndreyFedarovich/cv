import React, { useContext } from 'react';
import cn from 'classnames';
import { Context } from '../../context';

import { langs } from './data';
import s from './lang.module.scss';

const Lang = () => {
  const { setLang, lang } = useContext(Context);
  return (
    <div className={s.wrap}>
      {langs.map((option) => (
        <button
          key={option}
          tabIndex={option === lang ? '-1' : '0'}
          className={cn({ [s.active]: option === lang })}
          onClick={(e) => {
            e.target.blur();
            setLang(option);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default React.memo(Lang);
