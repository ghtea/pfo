import Image from 'next/image';
import * as S from './index.styled';
import * as S_Main from '../index.styled';
import { MouseEventHandler, useCallback, useMemo } from 'react';
import { SkillData } from 'libraries/notes';
import marked from 'marked';
import SkillSquare from './SkillSquare';

export const getArticleId = (skillId: string) => `##skills-###${skillId}`;

type SkillsProp = {
  skillDataList: SkillData[];
};

export default function Skills({ skillDataList }: SkillsProp) {
  const refinedSkillListDict = useMemo(() => {
    const dict = {
      level3: [] as SkillData[],
      level2: [] as SkillData[],
      level1: [] as SkillData[],
    };
    dict.level3 =
      skillDataList.filter((eachSkill) => eachSkill.level === 3) || [];
    dict.level2 =
      skillDataList.filter((eachSkill) => eachSkill.level === 2) || [];
    dict.level1 =
      skillDataList.filter((eachSkill) => eachSkill.level === 1) || [];

    return dict;
  }, [skillDataList]);

  return (
    <S.RootSection>
      <div>
        <S_Main.BasicH2 id='##skills'>
          <span>Skills</span>
        </S_Main.BasicH2>
        <div>
          <S.SkillGroup>
            <span>Level 3: Confident </span>
            <S.SkillUl>
              {refinedSkillListDict.level3.map((eachSkillData, index) => (
                <SkillSquare
                  skillData={eachSkillData}
                  key={`skillSquare-level3-${eachSkillData.id}`}
                />
              ))}
            </S.SkillUl>
          </S.SkillGroup>
          <S.SkillGroup>
          <span>Level 2: Used Many Times </span>
            <S.SkillUl>
              {refinedSkillListDict.level2.map((eachSkillData, index) => (
                <SkillSquare
                  skillData={eachSkillData}
                  key={`skillSquare-level2-${eachSkillData.id}`}
                />
              ))}
            </S.SkillUl>
          </S.SkillGroup>
          <S.SkillGroup>
          <span>Level 1: Used a Bit </span>
            <S.SkillUl>
              {refinedSkillListDict.level1.map((eachSkillData, index) => (
                <SkillSquare
                  skillData={eachSkillData}
                  key={`skillSquare-level1-${eachSkillData.id}`}
                />
              ))}
            </S.SkillUl>
          </S.SkillGroup>
        </div>
        <S.DetailDiv id={'##skills-detail'}>
          {skillDataList.map((eachSkillData, index) => (
            <S.SkillArticle
              id={getArticleId(eachSkillData.id)}
              key={eachSkillData.id}
              dangerouslySetInnerHTML={{
                __html: marked(eachSkillData.content || ''),
              }}
            ></S.SkillArticle>
          ))}
        </S.DetailDiv>
      </div>
    </S.RootSection>
  );
}
