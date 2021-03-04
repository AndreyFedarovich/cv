import React from 'react';
import Pdf from '../../../pdf';
import s from './panel.module.scss';

const Panel = () => (
  <div className={s.panel}>
    <Pdf />
  </div>
);

export default React.memo(Panel);
