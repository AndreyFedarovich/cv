import { useEffect, useState } from 'react';
import { storage } from '../helpers/utils.helper';

export default function useCvContext() {

  const [mode, setMode] = useState(storage('mode') || 'light');
  const [lang, setLang] = useState(storage('lang') || 'eng');

  useEffect(() => {
    storage('mode', mode);
  }, [mode]);

  useEffect(() => {
    storage('lang', lang);
  }, [lang]);

  return {
    mode,
    setMode,
    lang,
    setLang,
  };

}
