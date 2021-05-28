import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faChessPawn,
  faAngleDown,
  faStar,
  faGlobe,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

config.autoAddCss = false; // fontawesome 에서 css 입혀주는 기능 사용하지 않기

library.add(faChessPawn, faAngleDown, faGithub, faStar, farStar, faGlobe, faTimes);
