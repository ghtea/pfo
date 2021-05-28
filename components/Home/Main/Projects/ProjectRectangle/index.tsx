import Image from 'next/image';
import * as S from './index.styled';
import { Project } from '../projectList';
import { MouseEventHandler, useCallback, useMemo, useState } from 'react';
import Icon from 'components/global/Icon';
import ProjectModal from './ProjectModal';

type ProjectRectangleProp = {
  project: Project;
};

export default function ProjectRectangle({ project }: ProjectRectangleProp) {
  const [isOpen, setIsOpen] = useState(false);

  const onClickMainButton: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      event.preventDefault();
      const { value } = event.currentTarget;
      if (value === 'image') {
        setIsOpen(!isOpen);
      } else if (value === 'background') {
        setIsOpen(false);
      }
    },
    [isOpen]
  );

  return (
    <S.RootArticle className={project.level}>
      <S.ImageButton
        type='button'
        value='image'
        className='ImageButton'
        onClick={onClickMainButton}
      >
        <Image
          src='/images/projects/PortalView.png'
          alt={`Picture of the ${project.name}`}
          layout='fill'
          objectFit='cover'
        />
      </S.ImageButton>

      <S.TitleSpan
        className='TitleSpan'
      >
        {project.level === 'main' && (
          <span>
            <Icon identity={['fa', 'star']} kind='solid' length='1rem'></Icon>
          </span>
        )}
        <span>{project.name}</span>
      </S.TitleSpan>

      {/* <S.CoverDiv className='CoverDiv'>
        <a href={project.github}>
          <Icon identity={['fa', 'github']} kind='brand'></Icon>
        </a>
        {project.website && (
          <a href={project.website}>
            <Icon identity={['fa', 'globe']} kind='solid'></Icon>
          </a>
        )}
      </S.CoverDiv> */}

      {isOpen && (
        <>
          <S.ModalBackgroundButton
            type='button'
            value='background'
            className='ModalBackgroundButton'
            onClick={onClickMainButton}
          />
          <ProjectModal
            project={project}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          ></ProjectModal>
        </>
      )}
    </S.RootArticle>
  );
}
