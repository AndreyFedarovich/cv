import React from 'react';
import IconLink from '../../../../components/icon-link';

import { list } from './data';
import s from './social.module.scss';

const Social = () => (
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

export default React.memo(Social);
