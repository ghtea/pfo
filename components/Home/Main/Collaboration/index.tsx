import Image from 'next/image';
import * as S from './index.styled';
import * as S_Main from '../index.styled';
import Icon from 'components/global/Icon';

export default function Collaboration() {
  return (
    <S.RootSection>
      <S_Main.BasicH2 id='##collaboration'>
        <span>Collaboration</span>
      </S_Main.BasicH2>

      <S.CollaborationExplanationUl>
        <li>
          <strong> 변수명 </strong> 짓는 규칙을 정한 뒤 준수하며 코딩하고 있습니다
        </li>
        <li>
          <strong> 폴더 시스템 </strong> 을 항상 고민해서 체계적이고 효율적인 방식을 찾고자 노력합니다
        </li>
        <li>
          <strong> git commit 메시지 </strong> 컨벤션을 사용합니다
        </li>
        <li>
          <strong>git flow</strong> 를 공부하고 스터디에서 연습한 경험이 있습니다
        </li>
        <li>
          항상 <strong>팀원의 입장에서 생각하고 배려 </strong>하고자 노력합니다
        </li>
        <li>
          대학교 시절 전공으로 <strong>디자인 </strong>에 대한 경험이 있고 UI, UX, 레퍼런스 찾아보기에 관심이 있습니다
        </li>
        <li>
          대학교 시절 논문작성, 별도 공부로 <strong>데이터 분석 </strong>에 대한 경험이 있습니다
        </li>
        <li>
          여러가지 툴을 시도해보는 것을 좋아합니다 주로 <strong> Notion, draw.io </strong> 와 각종 커뮤니케이션 서비스를 이용합니다
        </li>
      </S.CollaborationExplanationUl>
    </S.RootSection>
  );
}
