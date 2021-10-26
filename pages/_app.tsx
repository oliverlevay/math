import { createGlobalStyle } from 'styled-components';
import { AppProps } from 'next/app';
import { colors } from 'lib/colors';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${colors.magnolia};
    color: ${colors.blackCoffee};
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
  }
  box-sizing: border-box;
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
