/* eslint-disable max-len */
import github from '../../assets/images/git.svg';
import linkedin from '../../assets/images/in.svg';

import jsLogo from '../../assets/images/js.svg';
import reactLogo from '../../assets/images/react.svg';
import cssModulesLogo from '../../assets/images/css-modules.svg';
import nextLogo from '../../assets/images/next.svg';

const data = {
  name: 'Andrey Fedorovich',
  position: 'Front-end developer',
  text: 'I\'m a web developer from Kiev 🇺🇦 , with over 3 years experiance. I have participated in the development of browser extensions, desktop applications, websites, e-mails.',
  git: {
    alt: 'github',
    image: github,
    url: 'https://github.com/adFedorovich',
  },
  in: {
    alt: 'linkedin',
    image: linkedin,
    url: 'https://www.linkedin.com/in/afedorovich',
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
      start: 'Feb 2018',
      end: 'Present',
    }],
  },
};
export default data;
