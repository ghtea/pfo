import Image from 'next/image';
import * as S from './index.styled';
import * as S_Main from '../index.styled';

export default function Profile() {
  return (
    <S.RootSection>
      <div>
        <S_Main.BasicH2 id='profile'><span>Profile</span></S_Main.BasicH2>
        <div>박재현</div>
        <div>소개</div>
        <div>ㅇㄹㅇㄹㅇㅇㅇ ㅇㅇㅇㅇㅇㅇㅇㅇ ㅇㅇㅇㅇㅇㅇㅇㅇㄹㅇㄹㅇㄹ</div>
      </div>
    </S.RootSection>
  );
}
