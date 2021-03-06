import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_RESUME } from '../../../graphql/mutation/resume';

const UserCreator = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [addResume] = useMutation(ADD_RESUME);
  const userId = '60432aac9a3c17a8243b4b41';
  return (
    <form onSubmit={async (e) => {
      e.preventDefault();
      const { data } = await addResume({
        variables: {
          userId,
          name,
          lastname,
          email,
          phoneNumber: '',
          position: '',
        },
      });
      console.log(data.addResume.id);
      setName('');
      setLastname('');
      setEmail('');
    }}
    >
      <h3>Create Resume</h3>
      <label htmlFor="name">
        <h5>userId</h5>
        <input
          value={userId}
          placeholder="name"
          name="userName"
          type="text"
        />
      </label>
      <label htmlFor="name">
        <h5>name</h5>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="name"
          name="userName"
          type="text"
        />
      </label>
      <label htmlFor="userLastname">
        <h5>userLastname</h5>
        <input
          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
          placeholder="userLastname"
          name="userLastname"
          type="text"
        />
      </label>
      <label htmlFor="userLastname">
        <h5>email</h5>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="email"
          name="email"
          type="text"
        />
      </label>
      <br />
      <br />
      <div>
        <button type="submit">Add Resume</button>
      </div>
    </form>
  );
};

UserCreator.propTypes = {};

export default UserCreator;
