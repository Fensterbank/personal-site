import { createGlobalStyle, ThemeProvider, theme } from '../../theme';
import React, { FunctionComponent } from 'react';
import { Footer } from '../Footer';

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: sans-serif;
    background-color: #1b1822;
    background-image: url('/static/layout/background.jpg');
    background-size: cover;
  }

  #__next {
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    overflow: hidden;
  }

  a, a:visited { 
    color: inherit;
  }

  a:visited:hover, a:hover {
    color: #ffce90
  }
`;

export const Layout: FunctionComponent = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      {children}
      <Footer />
    </React.Fragment>
  </ThemeProvider>
)
