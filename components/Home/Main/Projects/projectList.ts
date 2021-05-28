export type Project = {
  name: string;
  year: number;
  img: string;
  github: string;
  website?: string;
  level: 'main' | 'sub';
};

const projectList: Project[] = [
  {
    name: 'Chess Note',
    year: 2021,
    img: '',
    github: 'https://github.com/ghtea/chess-note',
    website: 'https://cn.nextwing.me/quiz',
    level: 'main',
  },
  {
    name: 'Portal View',
    year: 2020,
    img: '',
    github: 'https://github.com/ghtea/portal-view',
    website: 'https://pv.nextwing.me',
    level: 'main',
  },
  {
    name: 'Next Storm',
    year: 2020,
    img: '',
    github: 'https://github.com/ghtea/nextstorm',
    website: '',
    level: 'main',
  },
  {
    name: 'Data Scenery',
    year: 2020,
    img: '',
    github: 'https://github.com/ghtea/data-scenery',
    website: 'https://ds.nextwing.me/sports/football',
    level: 'sub',
  },
  {
    name: "STORMSCAPE",
    year: 2020,
    img: '',
    github: 'https://github.com/ghtea/STORMSCAPE',
    website: '',
    level: 'sub',
  },
  {
    name: "mbcat's book",
    year: 2019,
    img: '',
    github: 'https://github.com/ghtea/hots',
    website: 'https://ghtea.github.io/hots/',
    level: 'sub',
  },
  

];

export default projectList;
