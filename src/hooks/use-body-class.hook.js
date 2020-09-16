import { useEffect } from 'react';

const addBodyClass = (className) => document.body.classList.add(className);
const removeBodyClass = (className) => document.body.classList.remove(className);

export default function useBodyClass(className) {
  useEffect(
    () => {
      if (className instanceof Array) {
        className.map(addBodyClass);
        return () => className.map(removeBodyClass);
      }
      addBodyClass(className);
      return () => removeBodyClass(className);
    },
    [className],
  );
}
