import Head from 'next/head';
import Image from 'next/image';
import Header from 'components/Home/Header';
import Main from 'components/Home/Main';
import Footer from 'components/Home/Footer';
import { getSkillDataList, SkillData } from 'libraries/notes';

export async function getStaticProps() {
  const skillDataList = getSkillDataList();
  return {
    props: {
      skillDataList,
    },
  };
}

type HomeProp = {
  skillDataList: SkillData[];
};

export default function Home({ skillDataList }: HomeProp) {
  return (
    <div>
      <Head>
        <title>Jaehyeon Park</title>
        <meta name='description' content='Portfolio of Jaehyeon Park' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header></Header>
      <Main skillDataList={skillDataList}></Main>
      <Footer></Footer>
    </div>
  );
}
