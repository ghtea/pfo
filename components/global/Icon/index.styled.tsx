import styled from 'styled-components';
import {Props} from 'styles/GlobalStyle';

// export const Header = styled.header`
//   position: fixed;
//   padding: 4px;
// `;

type RootDivPorps = Props & {width: string; height: string; color: string};

export const RootDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  width: ${(p: RootDivPorps) => p.width};
  height: ${(p: RootDivPorps) => p.height};

  & > * {
    width: 100%;
    height: 100%;
  }

  color: ${(p: RootDivPorps) => p.color};

`;

//   ${(p: Props) => p.theme.color }
  //border-bottom: 2px solid ${(p: RootDivPorps) => p.theme.color.basic.s5 };
