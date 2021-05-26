import styled from 'styled-components';
import { Props } from 'styles/GlobalStyle';
import {spaceColor} from 'components/Home/index.styled'

export const RootFooter = styled.footer`
  z-index: 200;
`;

export const UpperBar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 70px;

  border-top: 4px solid ${(p: Props) => p.theme.color.main.s8};
  background-color: ${spaceColor};
`;
