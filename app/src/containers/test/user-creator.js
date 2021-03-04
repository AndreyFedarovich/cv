import React, { useState } from 'react';
// import PropTypes from 'prop-types';

const UserCreator = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');

  return (
    <>
      <h3>Create User</h3>
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
        <button>Create user</button>
      </div>
    </>
  );
};

UserCreator.propTypes = {};

export default UserCreator;
