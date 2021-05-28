import styled from 'styled-components';
import { Props } from 'styles/GlobalStyle';

export const RootArticle = styled.article`
  display: flex; // grid
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  left: 50%;
  z-index: 10;

  width: 90%;
  max-width: ${(p: Props) => p.theme.media.sm}px;

  height: 90%;
  max-height: ${(p: Props) => p.theme.media.sm}px;

  border: 2px solid ${(p: Props) => p.theme.color.main.s8};
  background-color: ${(p: Props) => p.theme.color.basic.s0};
  // color: ${(p: Props) => p.theme.color.basic.s0};

  h4 {
    font-size: 2rem;
    font-weight: lighter;
  }
`;

export const MainButtonUl = styled.ul`
  display: flex; // grid
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  li {
    width: 60px;
    height: 60px;

    & > * {
      color: ${(p: Props) => p.theme.color.basic.s5};

      display: inline-flex; // grid
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;

      width: 70%;
      height: 70%;
    }
    &:nth-last-child(1) > * {
      width: 40%;
      height: 40%;
    }
  }
`;
