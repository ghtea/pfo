import Image from 'next/image';
import { useContext } from 'react';
import * as S from './index.styled';
import Icon from 'components/global/Icon';
import { ThemeContext } from 'styled-components';
import { Theme } from 'styles/theme';

export default function Greeting() {
  const theme = useContext<Theme>(ThemeContext);

  return (
    <S.RootSection>
      <div>
        <S.AboveDiv>
          <S.ImageDiv>
            <Image
              src='/profile.png'
              alt='Picture of the author'
              width={200}
              height={200}
              layout='fixed'
            />
          </S.ImageDiv>
          <S.PDiv>
            <p>프론트엔드 개발자</p>
            <p>
              <span>박재현</span>입니다
            </p>
          </S.PDiv>
        </S.AboveDiv>

        <S.CheeBoardDiv>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </S.CheeBoardDiv>
      </div>

      <S.BottomDiv>
        <Icon
          identity={['fa', 'angle-down']}
          kind='solid'
          color={theme.color.main.s8}
          width='60px'
          height='60px'
        />
      </S.BottomDiv>
    </S.RootSection>
  );
}
