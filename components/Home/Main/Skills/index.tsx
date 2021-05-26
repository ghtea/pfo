import Image from 'next/image';
import * as S from './index.styled';
import * as S_Main from '../index.styled';
import { useMemo } from 'react';

type Skill = {
  name: string;
  level: 'convenient' | 'familiar';
};

export default function Skills() {
  const skillList: Skill[] = useMemo(() => {
    return [
      { name: 'React', level: 'convenient' },
      { name: 'React', level: 'convenient' },
      { name: 'React', level: 'convenient' },
      { name: 'React', level: 'convenient' },
      { name: 'React', level: 'convenient' },
      { name: 'React', level: 'convenient' },
      { name: 'React', level: 'convenient' },
      { name: 'React', level: 'convenient' },
      { name: 'React', level: 'convenient' },
      { name: 'React', level: 'convenient' },
      { name: 'React', level: 'convenient' },
    ];
  }, []);

  return (
    <S.RootSection>
      <div>
        <S_Main.BasicH2 id='skills'>
          <span>Skills</span>
        </S_Main.BasicH2>
        <S.SkillUl>
          {skillList.map((eachSkill, index) => (
            <S.SkillLi key={`${index}-${eachSkill}`}>
              <div>{eachSkill.name}</div>
            </S.SkillLi>
          ))}
        </S.SkillUl>
        <S.DetailDiv>
          <p>dfdfd3f dfddfdfd fdfdfddfdfd3f</p>
          <p>dfddfdfd3fddfdfdfdf dfd f</p>
          <p>dfdfd fdfddff dfdfdfdf  df</p>
        </S.DetailDiv>
      </div>
    </S.RootSection>
  );
}
