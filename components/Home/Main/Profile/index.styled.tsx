import styled from 'styled-components';
import { Props } from 'styles/GlobalStyle';
import { BasicSection } from '../index.styled';
import { spaceColor } from 'components/Home/index.styled';
import { ExplanationUl } from 'components/Home/Main/index.styled';

export const RootSection = styled(BasicSection)`
  //min-height: ${(p: Props) => p.theme.media.min}px;
`;

export const DeskImageDiv = styled.div`
  //position: absolute;
  height: 320px;
`;

export const ProfileExplanationUl = styled(ExplanationUl)`
  //min-height: ${(p: Props) => p.theme.media.min}px;
`;

export const WebsiteUl = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  & > li {
    &:nth-child(n + 2) {
      margin-left: 10px;
    }

    width: 50px;
    height: 50px;
    & > a {
      width: 100%;
      height: 100%;
    }

    color: ${(p: Props) => p.theme.color.basic.s8};
    /* &:nth-child(n+1) {
      color: ${spaceColor};
      background-color: ${(p: Props) => p.theme.color.main.s8};
    }
    &:nth-child(2n) {
      color: ${(p: Props) => p.theme.color.main.s8};
      background-color: ${spaceColor};
    } */
  }
`;
