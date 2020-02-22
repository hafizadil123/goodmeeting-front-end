import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  .page-wrapper{
        min-height: 100vh;
  }
  #app {
    /*background-color: #fafafa;*/
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Biryani,sans-serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
