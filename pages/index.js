import Link from 'next/link';
import Head from 'next/head'
import { Layout } from '../components/Layout';
import { Header } from '../components/Header';
import { SocialLinks } from '../components/SocialLinks';
import { Skillset } from '../components/Skillset';

const Index = () => (
  <Layout>
      <Head>
        <title>Frédéric Bolvin - IT & Entwicklung</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      </Head>
    <Header />
    <Skillset />
  </Layout>
)

export default Index;