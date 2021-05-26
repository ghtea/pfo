import { config, library } from '@fortawesome/fontawesome-svg-core';
//import {  } from '@fortawesome/free-brands-svg-icons'
import {
  faChessPawn,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false; // fontawesome 에서 css 입혀주는 기능 사용하지 않기

library.add(faChessPawn, faAngleDown);
