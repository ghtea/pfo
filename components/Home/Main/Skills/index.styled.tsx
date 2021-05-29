import styled from 'styled-components';
import { Props } from 'styles/GlobalStyle';
import { BasicH2, ContentDiv, BasicSection } from 'components/Home/Main/index.styled'

const spaceColor = 'hsl(51, 27%, 85%)';

export const RootSection = styled(BasicSection)`
  //min-height: ${(p: Props) => p.theme.media.min}px;
`;

export const SkillsBasicH2 = styled(BasicH2)`
  //min-height: ${(p: Props) => p.theme.media.min}px;
`;

export const SkillGroup = styled.div`
  margin-top: 12px;
  & > span {
    & > span:nth-child(1) {
      color: ${(p: Props) => p.theme.color.main.s8};
    }
    & > span:nth-child(2) {
      font-size: 1.4rem;
      margin-left: 10px;
    }
  }

  &:nth-child(1) > span {
    font-weight: lighter;
  }
  &:nth-child(2) > span {
    font-weight: lighter;
  }
  &:nth-child(3) > span {
    font-weight: lighter;
  }
`;

export const SkillUl = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const DetailDiv = styled.div`
  margin-top: 20px;

  width: calc(100% - 40px);
  max-width: ${(p: Props) => p.theme.media.sm}px;

  height: 100%;
  min-height: 200px;
  max-height: 300px;
  overflow: auto;

  padding: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  background-color: ${(p: Props) => p.theme.color.basic.s0};
  border: 2px solid ${spaceColor};
`;


export const SkillArticle = styled.div`
  &:nth-child(n + 2) {
    margin-top: 100px;
  }
`

export const SkillContentDiv = styled(ContentDiv)`
  

`;
