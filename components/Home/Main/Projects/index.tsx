import Image from 'next/image';
import * as S from './index.styled';
import * as S_Main from '../index.styled';
import projectList from './projectList';
import { useMemo } from 'react';
import ProjectRectangle from './ProjectRectangle';

export default function Projects() {
  const mainProjectList = useMemo(() => {
    return projectList.filter((eachProject) => eachProject.level === 'main');
  }, [projectList]);

  const subProjectList = useMemo(() => {
    return projectList.filter((eachProject) => eachProject.level === 'sub');
  }, [projectList]);

  return (
    <S.RootSection>
      <div>
        <S_Main.BasicH2 id='##projects'>
          <span>Projects</span>
        </S_Main.BasicH2>

        <S.ProjectGroup>
          {mainProjectList.map((eachProject, index) => (
            <ProjectRectangle project={eachProject} key={`${eachProject.name}`} />
          ))}
        </S.ProjectGroup>

        <S.ProjectGroup>
          {subProjectList.map((eachProject, index) => (
            <ProjectRectangle project={eachProject} key={`${eachProject.name}`} />
          ))}
        </S.ProjectGroup>
      </div>
    </S.RootSection>
  );
}
