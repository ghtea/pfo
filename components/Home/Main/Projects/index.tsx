import Image from 'next/image';
import * as S from './index.styled';
import * as S_Main from '../index.styled';
import { useMemo } from 'react';

type Project = {
  name: string;
  level: 'convenient' | 'familiar';
};

export default function Projects() {

  const projectList: Project[] = useMemo(() => {
    return [
      { name: 'React', level: 'convenient' },
      { name: 'React', level: 'convenient' },
      { name: 'React', level: 'convenient' },
      { name: 'React', level: 'convenient' },
      { name: 'React', level: 'convenient' },
      { name: 'React', level: 'convenient' },
    ];
  }, []);

  return (
    <S.RootSection>
      <div>
        <S_Main.BasicH2 id='##projects'><span>Projects</span></S_Main.BasicH2>
        
        <div>
          {projectList.map((eachProject, index) => (
            <S.ProjectArticle key={`${index}-${eachProject}`}>
              <div>{eachProject.name}</div>
            </S.ProjectArticle>
          ))}
        </div>

      </div>
    </S.RootSection>
  );
}
