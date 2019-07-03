import React from 'react';
import App, { Container } from 'next/app';
import { Layout } from '../components/Layout';
import { Fading } from '../components/Fading';
import styled from '../theme';
import { config } from 'react-spring';

const Page = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  overflow-y: auto;
  padding: 0 3em;
  color: #a1a1a1;
  font-size: 1.1em;
  margin: 0 0 2em 0;

  @media (max-width: 400px) { 
    padding: 0 1em;
  }
`;

const PageContent = styled.div`
  width: 60%;
  margin: 0 auto;
  height: 100%;

  @media (max-width: 1200px) { 
    width: 80%;
  }

  @media (max-width: 800px) { 
    width: 80%;
  }

  @media (max-width: 500px) { 
    width: 100%;
  }

  & > div {
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    height: 100%;
  }
`;

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Layout>
          <Page>
            <PageContent>
              <Fading delay={1800} springConfig={config.default}>
                <Component {...pageProps} />
              </Fading>
            </PageContent>
          </Page>
        </Layout>
      </Container>
    )
  }
}

export default MyApp