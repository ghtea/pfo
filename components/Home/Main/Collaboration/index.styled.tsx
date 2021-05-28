import styled from 'styled-components';
import { Props } from 'styles/GlobalStyle';
import { BasicSection } from '../index.styled';
import { spaceColor } from 'components/Home/index.styled';

export const RootSection = styled(BasicSection)`
  //min-height: ${(p: Props) => p.theme.media.min}px;
`;

export const ExplanationUl = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  margin-top: 20px;

  li {
    display: inline-flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    font-size: 1.2rem;
    &:nth-child(n + 2) {
      margin-top: 16px;
    }

  }

  strong {
    margin-left: 4px;
    margin-right: 4px;

    color: ${(p: Props) => p.theme.color.basic.s9};
    background-image: linear-gradient(
      120deg,
      ${(p: Props) => p.theme.color.main.s6} 0%,
      ${(p: Props) => p.theme.color.main.s2} 100%
    );
    background-repeat: no-repeat;
    background-size: 100% 0.36em;
    background-position: 0 96%;
  }
`;
