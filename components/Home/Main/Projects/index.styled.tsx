import styled from 'styled-components';
import { Props } from 'styles/GlobalStyle';
import {BasicSection} from '../index.styled'

const spaceColor = 'hsl(51, 27%, 85%)';

export const RootSection = styled(BasicSection)`
  
  //min-height: ${(p: Props) => p.theme.media.min}px;

`;



export const ProjectArticle = styled.article`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 40px;
  
  background-color: ${(p: Props) => p.theme.color.basic.s1};
  border: 2px solid ${(p: Props) => p.theme.color.main.s8};

  &:nth-child(n+2) {
    margin-top: 20px;
  }
`;

