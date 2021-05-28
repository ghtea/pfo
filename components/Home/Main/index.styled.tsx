import styled from 'styled-components';
import { Props } from 'styles/GlobalStyle';

export const RootMain = styled.main`
  z-index: 100;

  color: ${(p: Props) => p.theme.color.basic.s7};
  background-color: ${(p: Props) => p.theme.color.basic.body};

  padding-bottom: 160px;
`;



export const BasicSection = styled.section`
  margin-top: 50px;

  width: 100%;
  max-width: ${(p: Props) => p.theme.media.md}px;
` 

export const BasicH2 = styled.h2`
  color: ${(p: Props) => p.theme.color.basic.s9};
  font-size: 2.4rem;

  //align-self: flex-start;

  width: 100%;
  max-width: ${(p: Props) => p.theme.media.md}px;

  span {
    font-weight: normal;
    letter-spacing: 1px;
    width: auto;
    background-image: linear-gradient(120deg, ${(p: Props) => p.theme.color.main.s6} 0%, ${(p: Props) => p.theme.color.main.s2} 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.36em;
    background-position: 0 96%;
  }
`;
