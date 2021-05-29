import Image from 'next/image';
import * as S from './index.styled';
import { useMemo } from 'react';
import ProjectRectangle from './ProjectRectangle';
import { ProjectData } from 'libraries/notes';

type ProjectsProp = {
  projectDataList: ProjectData[];
};

export default function Projects({ projectDataList }: ProjectsProp) {
  const mainProjectList = useMemo(() => {
    return projectDataList.filter(
      (eachProject) => eachProject.level === 'main'
    );
  }, [projectDataList]);

  const subProjectList = useMemo(() => {
    return projectDataList.filter(
      (eachProject) => eachProject.level === 'sub'
    );
  }, [projectDataList]);

  return (
    <S.RootSection>
      <div>
        <S.ProjectBasicH2 id='##projects'>
          <span>Projects</span>
        </S.ProjectBasicH2>

        <S.ProjectGroup>
          {mainProjectList.map((eachProject, index) => (
            <ProjectRectangle
              project={eachProject}
              key={`${eachProject.name}`}
            />
          ))}
        </S.ProjectGroup>

        <S.ProjectGroup>
          {subProjectList.map((eachProject, index) => (
            <ProjectRectangle
              project={eachProject}
              key={`${eachProject.name}`}
            />
          ))}
        </S.ProjectGroup>
      </div>
    </S.RootSection>
  );
}
