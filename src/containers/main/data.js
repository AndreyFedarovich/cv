/* eslint-disable max-len */
import React from 'react';
import github from '../../assets/images/git.svg';
import linkedin from '../../assets/images/in.svg';
import darkIcon from '../../assets/images/moon.svg';
import lightIcon from '../../assets/images/sun.svg';

import jsLogo from '../../assets/images/js.svg';
import reactLogo from '../../assets/images/react.svg';
import cssModulesLogo from '../../assets/images/css-modules.svg';
import nextLogo from '../../assets/images/next.svg';
import { FLAG_UA } from '../../constatnts/ui.constants';

const data = {
  name: 'Andrey Fedorovich',
  position: 'Front-end developer',
  text:
  <>
    I&apos;m a web developer with over 3 years experiance. I have participated in the development of browser extensions, desktop applications, websites, e-mails. Now living in Kiev <span role="img" aria-label={FLAG_UA}>🇺🇦</span>
  </>,
  mode: [{
    title: 'light',
    element: <img src={lightIcon} alt="" />,
  }, {
    title: 'dark',
    element: <img src={darkIcon} alt="" />,
  }],
  contacts: {
    list: [{
      title: 'github',
      image: github,
      url: 'https://github.com/adFedorovich',
    },
    {
      title: 'linkedin',
      image: linkedin,
      url: 'https://www.linkedin.com/in/afedorovich',
    }],
  },

  stackshare: {
    title: 'Preferred stack',
    stack: [{
      title: 'JavaScript',
      image: jsLogo,
    }, {
      title: 'Next.js',
      image: nextLogo,
    }, {
      title: 'React',
      image: reactLogo,
    }, {
      title: 'CSS Modules',
      image: cssModulesLogo,
    }],
  },

  experience: {
    title: 'Experience',
    places: [{
      title: 'Javascript Developer',
      company: 'PixelPlex',
      location: 'Belarus, Minsk',
      start: {
        date: new Date(2018, 1, 1),
        text: 'Feb 2018',
      },
      end: {
        date: new Date(),
        text: 'Present',
      },
    }],
  },

  education: {
    title: 'Education',
  },
};
export default data;
