import React from 'react';
import Switch from '../../../../components/switch';
import Lang from '../../../../components/lang';
import Pdf from '../../../../components/pdf';
import s from './panel.module.scss';

const Panel = () => (
  <div className={s.panel}>
    <Switch />
    <Pdf />
    <Lang />
  </div>
);

export default React.memo(Panel);
