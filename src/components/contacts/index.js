import React from 'react';
import PropTypes from 'prop-types';
import IconLink from '../icon-link';
import s from './contacts.module.scss';

const Contacts = ({ list }) => (
  <div className={s.contacts}>
    {list.map(({ title, image, url }) => (
      <IconLink
        key={title}
        image={image}
        url={url}
        alt={title}
      />
    ))}

  </div>
);

Contacts.propTypes = {
  list: PropTypes.array.isRequired,
};

export default React.memo(Contacts);
