import { createGlobalStyle } from 'styled-components';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { colors } from 'lib/colors';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${colors.magnolia};
    color: ${colors.blackCoffee};
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    overflow-y: scroll;

  }
  box-sizing: border-box;
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {' '}
        <title>Sakur Math</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
