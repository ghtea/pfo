import Image from 'next/image';
import * as S from './index.styled';
import * as S_Main from '../index.styled';
import Icon from 'components/global/Icon';

export default function Profile() {
  return (
    <S.RootSection>
      <S.DeskImageDiv>
        <Image
          src='/images/desk.png'
          alt='Desk of the author'
          layout='fill'
          objectFit='cover'
        />
      </S.DeskImageDiv>

      <div>
        <S_Main.BasicH2 id='##profile'>
          <span>Profile</span>
        </S_Main.BasicH2>

        <S.WebsiteUl>
          <li>
            <a href='https://github.com/ghtea'>
              <Icon
                identity={['fa', 'github']}
                kind='brand'
                width='100%'
                height='100%'
              ></Icon>
            </a>
          </li>
          <li>
            <a href='https://www.notion.so/Development-25af2a3ac82949b3a7ba7d6db9e13778'>
              <Icon
                identity={['custom', 'Notion']}
                kind='brand'
                width='100%'
                height='100%'
              ></Icon>
            </a>
          </li>
        </S.WebsiteUl>

        <S.ExplanationGroup>
          <p>
            <span>2020년부터 프론트엔드</span>를 공부중인 개발자입니다
          </p>
          <p>
            2019.7.~2021.4 <span>군생활중</span> 프론트엔드 공부 시작{' '}
          </p>
          <p>
            2019.4. <span> 일본 치바대학 공학부 디자인학과</span> 졸업
          </p>
          <p>
            2015~2019 대학생활중<span>디자인, 통계, 데이터분석</span>등 여러분야
            공부
          </p>
        </S.ExplanationGroup>
      </div>
    </S.RootSection>
  );
}
