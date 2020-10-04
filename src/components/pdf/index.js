import React from 'react';
import PropTypes from 'prop-types';
import s from './pdf.module.scss';

const Pdf = ({ image, alt, hint }) => (
  <button onClick={() => window.print()} className={s.wrap}>
    <img src={image} alt={alt} />
    <span className={s.hint}>{hint}</span>
  </button>
);

Pdf.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
};

export default Pdf;
