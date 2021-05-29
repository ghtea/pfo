import styled from 'styled-components';
import { Props } from 'styles/GlobalStyle';
import { BasicSection } from '../index.styled';
import { spaceColor } from 'components/Home/index.styled';
import { ExplanationUl, BasicH2 } from 'components/Home/Main/index.styled';

export const RootSection = styled(BasicSection)`
  //min-height: ${(p: Props) => p.theme.media.min}px;
`;


export const CollaborationBasicH2 = styled(BasicH2)`
  //min-height: ${(p: Props) => p.theme.media.min}px;
`;

export const CollaborationExplanationUl = styled(ExplanationUl)`
  //min-height: ${(p: Props) => p.theme.media.min}px;
`;