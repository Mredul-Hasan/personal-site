import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faSkype } from '@fortawesome/free-brands-svg-icons/faSkype';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faBitbucket } from '@fortawesome/free-brands-svg-icons/faBitbucket';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/Mredul-Hasan',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.facebook.com/mredul.hasan38/',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'https://web.skype.com/live:mredulhasan93',
    label: 'Skype',
    icon: faSkype,
  },
  {
    link: 'https://www.linkedin.com/in/mredul-hasan-1581b0115/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://bitbucket.org/mredul_hasan/',
    label: 'Bit Bucket',
    icon: faBitbucket,
  },
  // {
  //   link: 'https://twitter.com/dangelosaurus',
  //   label: 'Twitter',
  //   icon: faTwitter,
  // },
  {
    link: 'mailto:mredulhasan93@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
