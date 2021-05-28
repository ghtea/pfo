import Greeting from './Greeting';
import Profile from './Profile';
import Skills from './Skills';
import Projects from './Projects';
import { SkillData, ProjectData } from 'libraries/notes';

import * as S from './index.styled';

type MainProp = {
  skillDataList: SkillData[];
  projectDataList: ProjectData[];
};

export default function Main({ skillDataList, projectDataList }: MainProp) {
  return (
    <S.RootMain>
      <Greeting></Greeting>
      <Profile></Profile>
      <Skills skillDataList={skillDataList}></Skills>
      <Projects projectDataList={projectDataList}></Projects>
    </S.RootMain>
  );
}
