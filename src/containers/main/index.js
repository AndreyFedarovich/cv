import React, { useState, useEffect } from 'react';
import data from './data';
import Panel from '../../components/panel';
import About from '../../components/about';
import Social from '../../components/social';
import Contacts from '../../components/contacts';
import Stackshare from '../../components/stackshare';
import Experience from '../../components/experience';
import Education from '../../components/education';
import { Context } from '../../context';
import useBodyClass from '../../hooks/use-body-class.hook';
import s from './main.module.scss';

const Main = () => {
  const [mode, setMode] = useState('light');
  const [lang, setLang] = useState('eng');

  const selectLang = (value) => setLang(value);
  const selectMode = (value) => setMode(value);

  useEffect(() => {
    selectLang(localStorage.getItem('lang') || 'eng');
    selectMode(localStorage.getItem('mode') || 'light');
  }, []);

  useBodyClass(mode);

  useEffect(() => {
    localStorage.setItem('mode', mode);
  }, [mode]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const state = {
    lang, mode, selectLang, selectMode,
  };

  return (
    <Context.Provider value={state}>
      <div className={s.wrap}>
        <div className={s.line}>
          <h1 className={s.name}>{data.name[lang]}</h1>
          <div className={s.mobLine}>
            <Social {...data.social} />
            <Panel mode={data.mode} langs={data.langs} />
          </div>
        </div>
        <div className={s.posLine}>
          <h3 className={s.position}>{data.position[lang]}</h3>
          <p className={s.location}>
            <span className={s.separator}>{' '}-{' '}</span>
            <span className={s.locationContent}>{data.location[lang]}</span>
            {data.location.flag}
          </p>
        </div>
        <Contacts {...data.contacts} />
        <About {...data.about} />
        <Stackshare {...data.stackshare} />
        <Experience {...data.experience} />
        <Education {...data.education} />
      </div>
    </Context.Provider>
  );
};

Main.propTypes = {

};

export default Main;
