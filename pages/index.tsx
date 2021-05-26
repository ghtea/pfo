import Head from 'next/head';
import Image from 'next/image';
import Header from 'components/Home/Header';
import Main from 'components/Home/Main';
import Footer from 'components/Home/Footer';



export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header></Header>
      <Main></Main>
      <Footer></Footer>

    </div>
  );
}