import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_RESUME } from '../../../graphql/mutation/resume';

const ResumeUpdater = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [updateUser] = useMutation(UPDATE_RESUME);

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
      <h3>Update Resume</h3>
      <label htmlFor="resumeID">
        <h5>resumeID</h5>
        <input
          onChange={(e) => setId(e.target.value)}
          value={id}
          placeholder="ID"
          name="resumeID"
          type="text"
        />
      </label>
      <label htmlFor="name">
        <h5>Name</h5>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="name"
          name="userName"
          type="text"
        />
      </label>
      <label htmlFor="userLastname">
        <h5>Lastname</h5>
        <input
          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
          placeholder="userLastname"
          name="userLastname"
          type="text"
        />
      </label>
      <label htmlFor="userLastname">
        <h5>Email</h5>
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
        <button type="submit">Update Resume</button>
      </div>
    </form>
  );
};

ResumeUpdater.propTypes = {};

export default ResumeUpdater;
