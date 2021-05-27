import Icon from 'components/global/Icon';
import { useMemo, useContext, useCallback, MouseEventHandler } from 'react';
import { ThemeContext } from 'styled-components';
import * as S from './index.styled';
import { Theme } from 'styles/theme';

export default function Header() {
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

  const navList = useMemo(() => {
    return [
      { name: 'Profile', href: '##profile' },
      { name: 'Skills', href: '##skills' },
      { name: 'Projects', href: '##projects' },
    ];
  }, []);

  return (
    <S.RootHeader>
      <S.EntireBar>
        <S.IconDiv>
          {/* <Icon
            identity={['fa', 'chess-pawn']}
            kind='solid'
            color={theme.color.main.s5}
          /> */}
        </S.IconDiv>
        <nav>
          <S.NavUl>
            {navList.map((e, i) => (
              <li key={`${i}-${e.name}`}>
                <a href={e.href} onClick={onClickAnchor}>
                  {e.name}
                </a>
              </li>
            ))}
          </S.NavUl>
        </nav>
      </S.EntireBar>
    </S.RootHeader>
  );
}

// <Icon identity={['custom', 'Notion']} ></Icon>
