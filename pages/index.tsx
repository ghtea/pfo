import Head from 'next/head';
import Image from 'next/image';
import Header from 'components/Home/Header';
import Main from 'components/Home/Main';
import Footer from 'components/Home/Footer';
import * as S from 'components/Home/index.styled';

import { getDataDict, SkillData, ProjectData } from 'libraries/notes';

export async function getStaticProps() {
  const { skills, projects } = await getDataDict();

  return {
    props: {
      skillDataList: skills,
      projectDataList: projects,
    },
  };
}

type HomeProp = {
  skillDataList: SkillData[];
  projectDataList: ProjectData[];
};

export default function Home({ skillDataList, projectDataList }: HomeProp) {
  return (
    <div>
      <Head>
        <title>Jaehyeon Park</title>
        <meta name='description' content='Portfolio of Jaehyeon Park' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header></Header>
      <Main 
        skillDataList={skillDataList}
        projectDataList={projectDataList}
      ></Main>
      <Footer></Footer>
    </div>
  );
}
