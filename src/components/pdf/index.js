import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../context';
import s from './pdf.module.scss';

const Pdf = ({
  image, alt, hint, content,
}) => {
  const { lang } = useContext(Context);

  return (
    <a
      href={content[lang]}
      download={`${content.title} (${lang})`}
      className={s.wrap}
    >
      <img src={image} alt={alt} />
      <span className={s.hint}>{hint}</span>
    </a>
  );
};

Pdf.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
};

export default Pdf;
