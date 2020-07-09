import React, { FunctionComponent } from 'react';

import { createGlobalStyle, ThemeProvider, theme } from '../../../theme';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Work Sans Light'), local('WorkSans-Light'), url('/static/fonts/WorkSans-Light.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: local('Work Sans ExtraLight'), local('WorkSans-ExtraLight'), url('/static/fonts/WorkSans-ExtraLight.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    src: local('Work Sans SemiBold'), local('WorkSans-SemiBold'), url('/static/fonts/WorkSans-SemiBold.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

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
    font-family: 'Work Sans', sans-serif;
    font-weight: 300;
    background-color: #1b1822;
    background-image: url('/static/layout/background_wqhd.jpg');
    background-size: cover;
  }

  @media (max-width: 1920px) {
    body {
      background-image: url('/static/layout/background_fhd.jpg');
    }
  }

  @media (max-width: 1280px) { 
    body {
      background-image: url('/static/layout/background_hd.jpg');
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 300;
  }

  h3, h4, h5, h6 {
    margin-bottom: 0.5em;
  }

  b, strong {
    font-weight: 600;
  }

  #__next {
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    overflow: hidden;
  }

  a, a:visited { 
    color: #fff;
  }

  a:visited:hover, a:hover {
    color: #ffce90
  }
`;

export const Layout: FunctionComponent = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);
