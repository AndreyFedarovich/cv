import { useEffect, useState } from 'react';
import { storage } from '../helpers/utils.helper';

export default function useGlobalContext() {

  const [mode, setMode] = useState(storage('mode') || 'light');
  const [lang, setLang] = useState(storage('lang') || 'eng');

  const selectMode = (value) => setMode(value);

  useEffect(() => {
    storage('mode', mode);
  }, [mode]);

  useEffect(() => {
    storage('lang', lang);
  }, [lang]);

  return {
    mode,
    selectMode,
    lang,
    setLang,
  };

}
