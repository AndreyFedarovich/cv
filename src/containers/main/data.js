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
import figmaLogo from '../../assets/images/figma.svg';
import { FLAG_UA } from '../../constatnts/ui.constants';

const data = {
  name: {
    eng: 'Andrey Fedorovich',
    ua: 'Андрій Федорович',
  },
  position: {
    eng: 'Front-end developer',
    ua: 'Front-end розробник',
  },
  location: {
    eng: 'Kiev, Ukraine',
    ua: 'Київ, Україна',
    flag: <span role="img" aria-label={FLAG_UA}>🇺🇦</span>,
  },
  text: {
    ua: 'Я веб-розробник з досвідом роботи понад 3 роки. Я брав участь у розробці розширень браузера, настільних додатків, веб-сайтів, електронних листів. Я добре знаю про розробку UI (доступність, семантика, оптимізація). Мені подобається вчитися та допомагати іншим пізнавати нове.',
    eng: 'I\'m a web developer with over 3 years experiance. I have participated in the development of browser extensions, desktop applications, websites, e-mails. I have strong knowledge about ui development (accessibility, semantic, optimization). I enjoy learning and helping others learn new things.',
  },
  langs: ['eng', 'ua'],
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
    title: {
      eng: 'Preferred stack',
      ua: 'Стек',
    },
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
    }, {
      title: 'Figma',
      image: figmaLogo,
    }],
  },

  experience: {
    title: {
      eng: 'Experience',
      ua: 'Досвід',
    },
    places: [{
      title: {
        eng: 'Javascript Developer',
        ua: 'Javascript розробник',
      },
      company: 'PixelPlex',
      location: {
        eng: 'Belarus, Minsk',
        ua: 'Білорусь, Мінськ',
      },
      start: {
        date: new Date(2018, 1, 1),
        text: {
          eng: 'Feb 2018',
          ua: '2018.03',
        },
      },
      end: {
        date: new Date(),
        text: {
          eng: 'Present',
          ua: 'По нинi',
        },
      },
    }],
  },

  education: {
    title: {
      eng: 'Education',
      ua: 'Освіта',
    },
    list: [{
      title: {
        eng: 'Belarusian State University',
        ua: 'Білоруський державний університет',
      },
      description: {
        eng: 'Bachelor`s degree, faculty of social and cultural communications',
        ua: 'Вища, факультет соціальних та культурних комунікацій',
      },
      field: {
        eng: 'Cultural studies',
        ua: 'Культурологія',
      },
      start: 2011,
      end: 2016,
    }],
  },
};
export default data;
