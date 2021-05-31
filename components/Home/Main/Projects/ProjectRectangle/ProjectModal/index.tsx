import Image from 'next/image';
import * as S from './index.styled';
import { ProjectData } from 'libraries/notes';
import {
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from 'react';
import Icon from 'components/global/Icon';
import marked from 'marked';
import useDimensions from 'react-cool-dimensions';

type ProjectModalProp = {
  project: ProjectData;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function ProjectModal({
  project,
  isOpen,
  setIsOpen,
}: ProjectModalProp) {

  const onClickMainButton: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      event.preventDefault();
      const { value } = event.currentTarget;
      if (value === 'close') {
        setIsOpen(false);
      }
    },
    [isOpen, setIsOpen]
  );

  const { observe, width, height } = useDimensions<HTMLDivElement | null>();

  return (
    <S.RootArticle role='dialog'>
      <S.CloseButton value='close' type='button' onClick={onClickMainButton}>
        <Icon identity={['fa', 'times']} kind='solid'></Icon>
      </S.CloseButton>

      <S.ProjectContentDiv
        dangerouslySetInnerHTML={{
          __html: marked(project.content || ''),
        }}
      ></S.ProjectContentDiv>

      <S.OtherInfoDiv>
        <span>{`${project.year}`}</span>
        <span>{`내 역할: ${project.myRole}`}</span>
      </S.OtherInfoDiv>

      <S.MainButtonUl>
        <li>
          <a href={project.github}>
            <Icon identity={['fa', 'github']} kind='brand'></Icon>
          </a>
        </li>
        {project.website && (
          <li>
            <a href={project.website}>
              <Icon identity={['fa', 'globe']} kind='solid'></Icon>
            </a>
          </li>
        )}
      </S.MainButtonUl>

      <S.MainImageDiv>
        <Image
          src={`/images/projects/${project.id}.png`}
          alt={`Picture of the ${project.name}`}
          layout='responsive'
          width='100%'
          height='100%'
        />
      </S.MainImageDiv>

      {project.bonusImageList.includes('skills') && (
        <S.SkillImageDiv ref={observe}>
          <Image
            src={`/images/projects/${project.id} skills.png`}
            alt={`Picture of the skill used in ${project.name}`}
            layout='responsive'
            objectFit='contain'
            width={width}
            height={width * 0.7}
          />
        </S.SkillImageDiv>
      )}
    </S.RootArticle>
  );
}
