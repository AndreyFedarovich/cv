import React, { useState } from 'react';
import data from './data';
import Switch from '../../components/switch';
import Contacts from '../../components/contacts';
import Stackshare from '../../components/stackshare';
import Experience from '../../components/experience';
import Education from '../../components/education';
import s from './main.module.scss';

const Main = () => {
  const [modeIndex, setModeIndex] = useState(0);

  return (
    <>
      <div className={s.panel}>
        <Switch
          active={modeIndex}
          options={data.mode}
          setActive={setModeIndex}
        />
      </div>
      <div className={s.wrap}>
        <div className={s.line}>
          <h1 className={s.name}>{data.name}</h1>
          <Contacts {...data.contacts} />
        </div>
        <h3 className={s.position}>{data.position}</h3>
        <p className={s.text}>{data.text}</p>
        <Stackshare {...data.stackshare} />
        <Experience {...data.experience} />
        <Education {...data.education} />
      </div>
    </>
  );
};

Main.propTypes = {

};

export default Main;
