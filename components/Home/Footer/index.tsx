import Icon from 'components/global/Icon';
import { useMemo, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import * as S from './index.styled';
import { Theme } from 'styles/theme';

export default function Footer() {
  //const theme = useContext<Theme>(ThemeContext);


  return (
    <S.RootFooter>
      <S.UpperBar>---------bar-----------</S.UpperBar>
      <div>기타 정보</div>
    </S.RootFooter>
  );
}

// <Icon identity={['custom', 'Notion']} ></Icon>
