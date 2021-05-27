import type { AppProps } from 'next/app';
import '../styles/globals.css';
import 'libraries/fontawesome';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyle';
import themeDict from 'styles/theme';
import 'libraries/animations';

import smoothscroll from 'smoothscroll-polyfill';
import { useEffect } from 'react';
 
function MyApp({ Component, pageProps }: AppProps) {

  useEffect(()=>{
    smoothscroll.polyfill();
  },[]);
  
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={themeDict['light']}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
