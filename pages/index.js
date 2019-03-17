import Link from 'next/link';
import Head from 'next/head'
import { Layout } from '../components/Layout';
import { Header } from '../components/Header';

const Index = () => (
  <Layout>
      <Head>
        <title>Frédéric Bolvin - IT & Entwicklung</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      </Head>
      <Header />
    <Link href="/about">
      <a>Go to About Page</a>
    </Link>
    <p>Hello Next.js</p>
  </Layout>
)

export default Index;