import styled from 'styled-components';
import { Props } from 'styles/GlobalStyle';

export const RootArticle = styled.article`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 180px;
  @media (min-width: ${(p: Props) => p.theme.media.sm}px) {
    width: 40%;
    height: 240px;
  }

  border: 3px solid ${(p: Props) => p.theme.color.basic.s2};
  //background-color: ${(p: Props) => p.theme.color.basic.s1};

  margin: 10px;
  margin-top: 25px;

  /* &:hover > .CoverDiv {
    opacity: 0.8;
  } */

  &.sub {
    width: 80%;
    height: 150px;
    @media (min-width: ${(p: Props) => p.theme.media.sm}px) {
      width: 30%;
      height: 200px;
    }
  }

  & > .TitleSpan {
    font-size: 1.6rem;
  }
  &.sub > .TitleSpan {
    font-size: 1.3rem;
  }
`;

export const ImageButton = styled.button`
  width: 100%;
  height: 100%;

  border: 1px solid ${(p: Props) => p.theme.color.main.s8};
  //filter: blur(1px);
`;

export const TitleSpan = styled.span`
  position: absolute;
  top: -33px;

  letter-spacing: 2px;
  color: ${(p: Props) => p.theme.color.main.s8};

  & > span:nth-child(n + 2) {
    margin-left: 4px;
  }
`;

export const CoverDiv = styled.div`
  display: flex; // grid
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  opacity: 0;
  position: absolute;

  width: 100%;
  height: 100%;

  background-color: ${(p: Props) => p.theme.color.basic.s9};
  color: ${(p: Props) => p.theme.color.basic.s0};

  & > a {
    width: 100%;
    height: 100%;

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    & > * {
      width: 60px;
      height: 60px;
    }
  }
`;

export const ModalBackgroundButton = styled.button`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;

  background-color: ${(p: Props) => p.theme.color.basic.s10};
  opacity: 0.1;
  // color: ${(p: Props) => p.theme.color.basic.s0};
`;
