import { createGlobalStyle, ThemeProvider, theme } from '../../theme';
import React, { FunctionComponent } from 'react';

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
    background-color: ${(props) => props.theme.similar1};
  }
`;

export const Layout: FunctionComponent = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      {children}
    </React.Fragment>
  </ThemeProvider>
)
