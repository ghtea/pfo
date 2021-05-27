import Greeting from './Greeting';
import Profile from './Profile';
import Skills from './Skills';
import Projects from './Projects';
import { SkillData } from 'libraries/notes';

import * as S from './index.styled';

type MainProp = {
  skillDataList: SkillData[];
};

export default function Main({ skillDataList }: MainProp) {
  return (
    <S.RootMain>
      <Greeting></Greeting>
      <Profile></Profile>
      <Skills skillDataList={skillDataList}></Skills>
      <Projects></Projects>
    </S.RootMain>
  );
}
