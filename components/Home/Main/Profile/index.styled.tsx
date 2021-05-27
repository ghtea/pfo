import styled from 'styled-components';
import { Props } from 'styles/GlobalStyle';
import {BasicSection} from '../index.styled'

const spaceColor = 'hsl(51, 27%, 85%)';

export const RootSection = styled(BasicSection)`
  
  //min-height: ${(p: Props) => p.theme.media.min}px;

`;


export const WebsiteUl = styled.ul`
  
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  color: ${(p: Props) => p.theme.color.basic.s8};

`;