import styled from 'styled-components';
import { Props } from 'styles/GlobalStyle';
import { spaceColor } from '../../index.styled';

export const RootSection = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 400px;

  background-color: ${spaceColor};
  border: 8px solid ${(p: Props) => p.theme.color.main.s8};

  position: relative;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  & > div:nth-child(1) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    width: calc(100% - ${50 * 2}px);
    height: calc(100% - ${50 * 2}px);

    background-color: ${(p: Props) => p.theme.color.main.s8};
  }
`;

export const AboveDiv = styled.div`
  z-index: 1;
`;

export const ImageDiv = styled.div`
  width: auto;
  border: 6px solid ${(p: Props) => p.theme.color.main.s8};
`;

export const PDiv = styled.div`
  color: ${(p: Props) => p.theme.color.basic.s1};
  & > p {
    margin-top: 12px;
    &:nth-child(n + 2) {
      margin-top: 12px;
    }

    //-webkit-text-stroke: 1px ${(p: Props) => p.theme.color.main.s8};
  }
  & > p:nth-child(1) {
    font-size: 2rem;
    @media (min-width: ${(p: Props) => p.theme.media.sm}px) {
      font-size: 2.4rem;
    }
    @media (min-width: ${(p: Props) => p.theme.media.md}px) {
      font-size: 3rem;
    }

    font-weight: lighter;
    background-color: ${(p: Props) => p.theme.color.main.s8};
    padding: 0px 2px 6px 2px;
  }

  & > p:nth-child(2) {
    font-size: 2.5rem;
    @media (min-width: ${(p: Props) => p.theme.media.sm}px) {
      font-size: 3.2rem;
    }
    @media (min-width: ${(p: Props) => p.theme.media.md}px) {
      font-size: 4rem;
    }

    font-weight: lighter;
    background-color: ${(p: Props) => p.theme.color.main.s8};
    padding: 2px 4px 8px 4px;

    span {
      font-weight: bold;
      letter-spacing: 2px;
    }
  }
`;

export const CheeBoardDiv = styled.div`
  position: absolute;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  height: 100%;

  & > div {
    width: 50%;
    height: 50%;
    border: 6px solid ${(p: Props) => p.theme.color.main.s8};
  }
  & > div:nth-child(2),
  & > div:nth-child(3) {
    background-color: ${spaceColor};
  }
`;

export const TopNav = styled.nav`
  position: absolute;
  top: 0px;

  ul {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    font-weight: normal;

    color: ${(p: Props) => p.theme.color.main.s9};

    margin-right: auto;

    margin-top: 16px;
    font-size: 1.2rem;
    letter-spacing: 0.8px;

    & > li:nth-child(n + 2) {
      margin-left: 0.3rem;
    }

    @media (min-width: ${(p: Props) => p.theme.media.sm}px) {
      margin-top: 11px;
      font-size: 1.6rem;
      letter-spacing: 2px;

      & > li:nth-child(n + 2) {
        margin-left: 1rem;
      }
    }
  }
`;

export const BottomButton = styled.button`
  position: absolute;
  bottom: -5px;
  color: ${(p: Props) => p.theme.color.main.s8};
`;
