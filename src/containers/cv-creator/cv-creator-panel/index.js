import React from 'react';
import PropTypes from 'prop-types';
import s from './cv-creator-panel.module.scss';

const CvCreatorPanel = ({ setFull }) => (
  <div className={s.wrap}>
    <div className={s.content}>
      <button className={s.expand} onClick={setFull} type="button">Expand</button>
      <button type="submit">Save</button>

    </div>
  </div>
);

CvCreatorPanel.propTypes = {
  setFull: PropTypes.func.isRequired,
};

export default CvCreatorPanel;
