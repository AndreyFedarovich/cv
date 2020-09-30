import React from 'react';
import PropTypes from 'prop-types';
import IconLink from '../icon-link';
import s from './social.module.scss';

const Social = ({ list }) => (
  <div className={s.wrap}>
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

Social.propTypes = {
  list: PropTypes.array.isRequired,
};

export default React.memo(Social);
