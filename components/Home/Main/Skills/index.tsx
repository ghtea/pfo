import Image from 'next/image';
import * as S from './index.styled';
import { MouseEventHandler, useCallback, useMemo } from 'react';
import { SkillData } from 'libraries/notes';
import marked from 'marked';
import SkillSquare from './SkillSquare';
import Icon from 'components/global/Icon';

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
        <S.SkillsBasicH2 id='##skills'>
          <span>Skills</span>
        </S.SkillsBasicH2>
        <div>
          <S.SkillGroup>
            <span>
              <span>
                <Icon
                  identity={['fa', 'star']}
                  kind='solid'
                  width='2rem'
                  height='2rem'
                ></Icon>
                <Icon
                  identity={['fa', 'star']}
                  kind='solid'
                  width='2rem'
                  height='2rem'
                ></Icon>
                <Icon
                  identity={['fa', 'star']}
                  kind='solid'
                  width='2rem'
                  height='2rem'
                ></Icon>
              </span>
              <span>Confident</span>
            </span>
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
            <span>
              <span>
                <Icon
                  identity={['fa', 'star']}
                  kind='solid'
                  width='2rem'
                  height='2rem'
                ></Icon>
                <Icon
                  identity={['fa', 'star']}
                  kind='solid'
                  width='2rem'
                  height='2rem'
                ></Icon>
                <Icon
                  identity={['fa', 'star']}
                  kind='regular'
                  width='2rem'
                  height='2rem'
                ></Icon>
              </span>
              <span>Used Many Times</span>
            </span>
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
            <span>
              <span>
                <Icon
                  identity={['fa', 'star']}
                  kind='solid'
                  width='2rem'
                  height='2rem'
                ></Icon>
                <Icon
                  identity={['fa', 'star']}
                  kind='regular'
                  width='2rem'
                  height='2rem'
                ></Icon>
                <Icon
                  identity={['fa', 'star']}
                  kind='regular'
                  width='2rem'
                  height='2rem'
                ></Icon>
              </span>
              <span>Used A Bit</span>
            </span>
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
          {[
            ...refinedSkillListDict.level3,
            ...refinedSkillListDict.level2,
            ...refinedSkillListDict.level1,
          ].map((eachSkillData, index) => (
            <S.SkillArticle
              id={getArticleId(eachSkillData.id)}
              key={eachSkillData.id}
            >
              <S.SkillContentDiv
                dangerouslySetInnerHTML={{
                  __html: marked(eachSkillData.content || ''),
                }}
              ></S.SkillContentDiv>
            </S.SkillArticle>
          ))}
        </S.DetailDiv>
      </div>
    </S.RootSection>
  );
}
