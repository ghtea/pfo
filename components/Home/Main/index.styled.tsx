import styled from 'styled-components';
import { Props } from 'styles/GlobalStyle';

export const RootMain = styled.main`
  z-index: 100;

  color: ${(p: Props) => p.theme.color.basic.s7};
  background-color: ${(p: Props) => p.theme.color.basic.body};

  padding-bottom: 160px;
`;



export const BasicSection = styled.section`
  margin-top: 50px;

  width: 100%;
  max-width: ${(p: Props) => p.theme.media.md}px;
` 

export const BasicH2 = styled.h2`
  color: ${(p: Props) => p.theme.color.basic.s9};
  font-size: 2.4rem;

  //align-self: flex-start;

  width: 100%;
  max-width: ${(p: Props) => p.theme.media.md}px;

  span {
    font-weight: normal;
    letter-spacing: 1px;
    width: auto;
    background-image: linear-gradient(120deg, ${(p: Props) => p.theme.color.main.s6} 0%, ${(p: Props) => p.theme.color.main.s2} 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.36em;
    background-position: 0 96%;
  }
`;



// Profile, Collaboration
export const ExplanationUl = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  padding-left: 10px;
  padding-right: 10px;
  
  margin-top: 20px;

  li {
    line-height: 1.6rem;

    display: inline-flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    font-size: 1.2rem;
    &:nth-child(n + 2) {
      margin-top: 16px;
    }

  }

  strong {
    margin-left: 4px;
    margin-right: 4px;

    color: ${(p: Props) => p.theme.color.basic.s9};
    background-image: linear-gradient(
      120deg,
      ${(p: Props) => p.theme.color.main.s4} 0%,
      ${(p: Props) => p.theme.color.main.s1} 100%
    );
    background-repeat: no-repeat;
    background-size: 100% 0.36em;
    background-position: 0 96%;
  }
`;




export const ContentDiv = styled.div`
  width: 100%;
  max-width: ${(p: Props) => p.theme.media.sm - 160}px;
  //margin: auto; => i

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;

  h3 {
    font-size: 2rem;
    font-weight: lighter;
    align-self: center;
    color: ${(p: Props) => p.theme.color.main.s8};
    // margin-bottom: 100px;
  }

  ul {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;

    padding: 0 8px 0 8px;
    li {
      display: inline-flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      align-items: center;

    
      &:nth-child(n + 2) {
        margin-top: 12px;
      }

      strong {
        margin-left: 4px;
        margin-right: 4px;

        color: ${(p: Props) => p.theme.color.basic.s9};
        background-image: linear-gradient(
          120deg,
          ${(p: Props) => p.theme.color.main.s4} 0%,
          ${(p: Props) => p.theme.color.main.s1} 100%
        );
        background-repeat: no-repeat;
        background-size: 100% 0.36em;
        background-position: 0 96%;
      }
    }
  }
`;


/*
margin-left: 2rem;
li
      &::before {
        position: absolute;
        left: -16px;
        bottom: 3px; 
        position: absolute;
        left: -1rem;
        top: 0.3rem;
        content: '■';
        font-size: 0.6rem;
        color: ${(p: Props) => p.theme.color.main.s8};
      }
*/
