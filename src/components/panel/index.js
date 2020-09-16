import React from 'react';
import PropTypes from 'prop-types';
import Switch from '../switch';
import Lang from '../lang';

import s from './panel.module.scss';

const Panel = ({ mode, langs }) => (
  <div className={s.panel}>
    <Switch options={mode} />
    <Lang options={langs} />
  </div>
);

Panel.propTypes = {
  mode: PropTypes.array.isRequired,
  langs: PropTypes.array.isRequired,
};

export default React.memo(Panel);
