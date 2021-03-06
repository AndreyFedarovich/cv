import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../../graphql/mutation/user';

const UserUpdater = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [updateUser] = useMutation(UPDATE_USER);

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      updateUser({
        variables: {
          id, name, lastname, email,
        },
      });
      setId('');
      setName('');
      setLastname('');
      setEmail('');
    }}
    >
      <h3>Update User</h3>
      <label htmlFor="userID">
        <h5>ID</h5>
        <input
          onChange={(e) => setId(e.target.value)}
          value={id}
          placeholder="ID"
          name="userID"
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
        <button type="submit">Update User</button>
      </div>
    </form>
  );
};

UserUpdater.propTypes = {};

export default UserUpdater;
