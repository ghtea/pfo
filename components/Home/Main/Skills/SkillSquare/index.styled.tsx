import styled from 'styled-components';
import { Props } from 'styles/GlobalStyle';
import {spaceColor} from 'components/Home/index.styled'

export const RootLi = styled.li`
  display: inline-flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin: 6px;

  width: 60px;
  height: 60px;

  @media (min-width: ${(p: Props) => p.theme.media.sm}px) {
    width: 75px;
    height: 75px;
  }

  @media (min-width: ${(p: Props) => p.theme.media.md}px) {
    width: 90px;
    height: 90px;
  }

  border-width: 4px;
  border-style: solid;

  border-color: ${spaceColor};

  /* &:nth-child(2n + 1) {
    border-color: ${(p: Props) => p.theme.color.main.s8};
  }
  &:nth-child(2n + 2) {
    border-color: ${spaceColor};
  } */

  & > a {
    display: inline-flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    padding: 8px;

    & > div:nth-child(2) {
      // li 안에 a 있다
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      padding: 5px;
    }

    &:hover {
      & > div:nth-child(2) {
        word-break: break-all;
        color: ${(p: Props) => p.theme.color.main.s0};
        background-color: ${(p: Props) => p.theme.color.main.s7};
        opacity: 1;

        background: ${(p: Props) => p.theme.color.main.s7};
        background: linear-gradient(
          135deg,
          ${(p: Props) => p.theme.color.main.s6} 0%,
          ${(p: Props) => p.theme.color.main.s7} 100%
        );
      }
    }
  }
`;
