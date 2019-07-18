import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export interface IThemeInterface {
  primary: string;
  secondary: string;
  tertiary: string;
  similar1: string,
  similar2: string,
}

export const theme = {
  primary: '#112466',
  secondary: '#0F447D',
  tertiary: '#0E5973',
  similar1: '#140F7D',
  similar2: '#2E0E73',
};

export default styled;
export { css, createGlobalStyle, keyframes, ThemeProvider };