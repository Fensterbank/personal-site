import React from 'react';
import App, { Container } from 'next/app';
import { Layout } from '../components/Layout';
import styled from '../theme';

const Page = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  overflow-y: auto;
  padding: 0 3em;
  color: #a1a1a1;
  font-size: 0.8em;
  margin: 2em 0;
`;

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Layout>
          <Page>
            <Component {...pageProps} />
          </Page>
        </Layout>
      </Container>
    )
  }
}

export default MyApp