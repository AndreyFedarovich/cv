import React from 'react';
import data from './data';
import Stackshare from '../../components/stackshare';
import Experience from '../../components/experience';
import IconLink from '../../components/icon-link';
import s from './main.module.scss';

const Main = () => (
  <div className={s.wrap}>
    <div className={s.line}>
      <h1 className={s.name}>{data.name}</h1>
      <div className={s.contacts}>
        <IconLink
          title={data.in.title}
          image={data.in.image}
          url={data.in.url}
          alt={data.in.alt}
        />
        <IconLink
          title={data.git.title}
          image={data.git.image}
          url={data.git.url}
          alt={data.git.alt}
        />
      </div>
    </div>
    <h3 className={s.position}>{data.position}</h3>
    <p className={s.text}>{data.text}</p>
    <Stackshare {...data.stackshare} />
    <Experience {...data.experience} />
  </div>
);

Main.propTypes = {

};

export default Main;
