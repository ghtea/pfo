import Image from 'next/image';
import * as S from './index.styled';
import { MouseEventHandler, useCallback, useMemo } from 'react';
import { SkillData } from 'libraries/notes';
import { getArticleId } from '..';

type SkillSquareProp = {
  skillData: SkillData;
};

export default function SkillSquare({ skillData }: SkillSquareProp) {
  const onClickAnchor: MouseEventHandler<HTMLAnchorElement> = useCallback(
    (event) => {
      event.preventDefault();
      const idToGo = event.currentTarget.getAttribute('href');
      if (idToGo) {
        const container = document.getElementById('##skills-detail');
        const elementToGo = document.getElementById(idToGo);
        if (container && elementToGo) {
          container.scrollTo({
            top: elementToGo.offsetTop,
            behavior: 'smooth',
          });
        }
      }
    },
    []
  );

  return (
    <S.RootLi >
      <a href={getArticleId(skillData.id)} onClick={onClickAnchor}>
        <Image
          src={`/images/skills/${skillData.id}.png`}
          alt={skillData.id}
          width={'100%'}
          height={'100%'}
          objectFit='contain'
        />
        <div>{skillData.id}</div>
      </a>
    </S.RootLi>
  );
}
