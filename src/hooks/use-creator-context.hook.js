import { useState } from 'react';

export default function useCreatorContext() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
  };

}
