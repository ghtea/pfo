import Greeting from './Greeting';
import Profile from './Profile';
import Skills from './Skills';
import Projects from './Projects';

import * as S from './index.styled';

export default function Main() {
  return (
    <S.RootMain>
      <Greeting></Greeting>
      <Profile></Profile>
      <Skills></Skills>
      <Projects></Projects>
    </S.RootMain>
  );
}
