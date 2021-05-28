import styled from 'styled-components';
import { Props } from 'styles/GlobalStyle';
import { BasicSection } from '../index.styled';

const spaceColor = 'hsl(51, 27%, 85%)';

export const RootSection = styled(BasicSection)`
  //min-height: ${(p: Props) => p.theme.media.min}px;
`;

export const ProjectGroup = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  &:nth-child(n + 2) {
    margin-top: 20px;
  }
`;