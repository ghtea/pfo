import { ContentDiv } from 'components/Home/Main/index.styled';
import styled from 'styled-components';
import { Props } from 'styles/GlobalStyle';

export const RootArticle = styled.article`
  display: flex; // grid
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  position: fixed;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  left: 50%;
  z-index: 10;
  padding: 10px;

  width: 90%;
  min-width: ${(p: Props) => p.theme.media.min * 0.9}px;
  max-width: ${(p: Props) => p.theme.media.sm}px;

  height: auto;
  max-height: ${(p: Props) => p.theme.media.sm}px;

  border: 2px solid ${(p: Props) => p.theme.color.main.s8};
  background-color: ${(p: Props) => p.theme.color.basic.s0};
  // color: ${(p: Props) => p.theme.color.basic.s0};

  overflow-y: auto;
`;


export const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;

  width: 36px;
  height: 36px;
  color: ${(p: Props) => p.theme.color.basic.s4};
`

export const ProjectContentDiv = styled(ContentDiv)`
  
`;

export const MainButtonUl = styled.ul`
  /* position: absolute;
  top: 0; */

  margin-top: 60px;

  display: flex; // grid
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  li {
    width: 60px;
    height: 60px;

    & > a {
      color: ${(p: Props) => p.theme.color.basic.s5};

      display: inline-flex; // grid
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;

      width: 70%;
      height: 70%;
    }
  }
`;


export const ImageDiv = styled.div`
  
  border: 2px solid ${(p: Props) => p.theme.color.basic.s2};

  &:nth-child(n+2) {
    margin-top: 10px;
  }
`

export const MainImageDiv = styled(ImageDiv)`
  width: 90%;
  height: 180px;
  @media (min-width: ${(p: Props) => p.theme.media.sm}px) {
    height: 240px;
  }
`

export const SkillImageDiv = styled(ImageDiv)`
  width: 90%;
  /* height: auto;
  @media (min-width: ${(p: Props) => p.theme.media.sm}px) {
    height: auto;
  } */
`