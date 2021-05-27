import styled from 'styled-components';
import { Props } from 'styles/GlobalStyle';

export const RootHeader = styled.header`
  z-index: 500;
`;

export const EntireBar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 56px;

  position: fixed;
  padding: 4px;
`;

export const IconDiv = styled.div`
  width: auto;
`;

export const NavUl = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  font-weight: normal;
  font-size: 1.6rem;
  
  color: ${(p: Props) => p.theme.color.main.s9};
  margin-top: 6px;
  letter-spacing: 2px;
  margin-right: auto;

  @media (min-width: ${(p: Props) => p.theme.media.sm}) {
    margin-right: 70px;
  }

  & > li:nth-child(n+2){
    margin-left: 12px;
  }
`;

//   ${(p: Props) => p.theme.color }
