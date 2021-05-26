import styled from 'styled-components';
import { Props } from 'styles/GlobalStyle';
import { BasicSection } from '../index.styled';

const spaceColor = 'hsl(51, 27%, 85%)';

export const RootSection = styled(BasicSection)`
  //min-height: ${(p: Props) => p.theme.media.min}px;
`;

export const SkillUl = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const SkillLi = styled.li`
  display: inline-flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin: 6px;

  width: 60px;
  height: 60px;

  @media (min-width: ${(p: Props) => p.theme.media.sm}px) {
    width: 80px;
    height: 80px;
  }

  @media (min-width: ${(p: Props) => p.theme.media.md}px) {
    width: 110px;
    height: 110px;
  }

  border-width: 4px;
  border-style: solid;

  &:nth-child(2n + 1) {
    border-color: ${(p: Props) => p.theme.color.main.s8};
  }
  &:nth-child(2n + 2) {
    border-color: ${spaceColor};
  }
`;


export const DetailDiv = styled.div`
  margin-top: 20px;
  width: calc(100% - 40px);
  background-color: ${(p: Props) => p.theme.color.basic.s0};
  border: 2px solid ${spaceColor};
`;
