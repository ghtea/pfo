import Image from 'next/image';
import { MouseEventHandler, useCallback, useContext, useMemo } from 'react';
import * as S from './index.styled';
import Icon from 'components/global/Icon';
import { ThemeContext } from 'styled-components';
import { Theme } from 'styles/theme';

export default function Greeting() {
  const theme = useContext<Theme>(ThemeContext);

  const onClickAnchor: MouseEventHandler<HTMLAnchorElement> = useCallback(
    (event) => {
      event.preventDefault();
      const idToGo = event.currentTarget.getAttribute('href');
      //console.warn(idToGo);
      if (idToGo) {
        const h3ToGo = document.getElementById(idToGo);
        if (h3ToGo) {
          h3ToGo.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    []
  );

  const onClickDown: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      event.preventDefault();

      const targetElement = document.getElementById('##profile');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.error(
          'Profile 로 스크롤되도록, Profile 의 요소 아이디를 바르게 입력해야 합니다'
        );
      }
    },
    []
  );

  const navList = useMemo(() => {
    return [
      { name: 'Profile', href: '##profile' },
      { name: 'Skills', href: '##skills' },
      { name: 'Collaboration', href: '##collaboration'},
      { name: 'Projects', href: '##projects' },
    ];
  }, []);

  return (
    <S.RootSection>
      <div>
        <S.AboveDiv>
          <S.ImageDiv>
            <Image
              src='/images/profile.png'
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

      <S.TopNav>
        <ul>
          {navList.map((e, i) => (
            <li key={`${i}-${e.name}`}>
              <a href={e.href} onClick={onClickAnchor}>
                {e.name}
              </a>
            </li>
          ))}
        </ul>
      </S.TopNav>

      <S.BottomButton onClick={onClickDown}>
        <Icon
          identity={['fa', 'angle-down']}
          kind='solid'
          color={theme.color.main.s8}
          width='60px'
          height='60px'
        />
      </S.BottomButton>
    </S.RootSection>
  );
}
