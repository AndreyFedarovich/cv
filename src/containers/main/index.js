import React from 'react';
import Panel from '../../components/panel';
import About from '../../components/about';
import Social from '../../components/social';
import Contacts from '../../components/contacts';
import Stackshare from '../../components/stackshare';
import Experience from '../../components/experience';
import Education from '../../components/education';
import { Context } from '../../context';
import useBodyClass from '../../hooks/use-body-class.hook';
import useGlobalContext from '../../hooks/use-global-context.hook';
import { name, position, location } from './data';
import s from './main.module.scss';

const cvDetails = () => {
  const state = useGlobalContext();

  const { mode, lang } = state;

  useBodyClass(mode);

  return (
    <div className={s.wrap}>
      <Context.Provider value={state}>
        <div className={s.line}>
          <h1 className={s.name}>{name[lang]}</h1>
          <div className={s.mobLine}>
            <Social />
            <Panel />
          </div>
        </div>
        <div className={s.posLine}>
          <h3 className={s.position}>{position[lang]}</h3>
          <p className={s.location}>
            <span className={s.separator}>{' '}-{' '}</span>
            <span className={s.locationContent}>{location[lang]}</span>
            {location.flag}
          </p>
        </div>
        <Contacts />
        <About />
        <Stackshare />
        <Experience />
        <Education />
      </Context.Provider>
    </div>
  );
};

export default cvDetails;
