import React, { useContext } from 'react';
import { CvPageContext } from '../../context';
import {
  image, alt, hint, content,
} from './data';
import s from './pdf.module.scss';

const Pdf = () => {
  const { lang } = useContext(CvPageContext);

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

export default Pdf;
