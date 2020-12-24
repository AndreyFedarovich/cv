import React from 'react';
import Switch from '../switch';
import Lang from '../lang';
import Pdf from '../pdf';
import s from './panel.module.scss';

const Panel = () => (
  <div className={s.panel}>
    <Switch />
    <Pdf />
    <Lang />
  </div>
);

export default React.memo(Panel);
