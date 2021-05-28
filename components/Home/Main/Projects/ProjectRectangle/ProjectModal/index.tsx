import Image from 'next/image';
import * as S from './index.styled';
import { Project } from '../../projectList';
import {
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from 'react';
import Icon from 'components/global/Icon';

type ProjectModalProp = {
  project: Project;
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
      if (value === 'image') {
        setIsOpen(!isOpen);
      } else if (value === 'background') {
        setIsOpen(false);
      }
    },
    [isOpen]
  );

  return (
    <S.RootArticle>
      <h4>{project.name}</h4>

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
        <li>
          <button value='close' type='button'>
            <Icon identity={['fa', 'times']} kind='solid'></Icon>
          </button>
        </li>
      </S.MainButtonUl>

      <div>
        
      </div>


    </S.RootArticle>
  );
}
