import Image from 'next/image';
import * as S from './index.styled';
import * as S_Main from '../index.styled';
import Icon from 'components/global/Icon';

export default function Profile() {
  return (
    <S.RootSection>
      <div>
        <S_Main.BasicH2 id='##profile'>
          <span>Profile</span>
        </S_Main.BasicH2>
        <div>박재현</div>
        <div>
          <p>2020년 부터 프론트엔드를 공부중인 개발자입니다</p>
          <p>2020년 부터 프론트엔드를 공부중인 개발자입니다</p>
          <p>2020년 부터 프론트엔드를 공부중인 개발자입니다</p>
        </div>


        <S.WebsiteUl>
          <li>
            <a href='https://github.com/ghtea'>
              <Icon
                identity={['fa', 'github']}
                kind='brand'
                width='40px'
                height='40px'
              ></Icon>
            </a>
          </li>
          <li>
            <a href='https://www.notion.so/Development-25af2a3ac82949b3a7ba7d6db9e13778'>
              <Icon
                identity={['custom', 'Notion']}
                kind='brand'
                width='40px'
                height='40px'
              ></Icon>
            </a>
          </li>
        </S.WebsiteUl>
      </div>
    </S.RootSection>
  );
}
