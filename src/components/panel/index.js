import React from 'react';
import PropTypes from 'prop-types';
import Switch from '../switch';
import Lang from '../lang';
import Pdf from '../pdf';
import s from './panel.module.scss';

const Panel = ({ mode, langs, pdf }) => (
  <div className={s.panel}>
    <Switch options={mode} />
    <Pdf {...pdf} />
    <Lang options={langs} />
  </div>
);

Panel.propTypes = {
  mode: PropTypes.array.isRequired,
  langs: PropTypes.array.isRequired,
  pdf: PropTypes.object.isRequired,
};

export default React.memo(Panel);
