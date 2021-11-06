import { createGlobalStyle } from "styled-components";
import { AppProps } from "next/app";
import Head from "next/head";
import { colors } from "lib/colors";
import NextNProgress from "nextjs-progressbar";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${colors.almond};
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    overflow-y: scroll;
  }
  box-sizing: border-box;
  a {
  color: ${colors.activeSoft};
  display: inline-block;
  position: relative;
  text-decoration: none;
  &:before {
    background-color: ${colors.activeSoft};
    content: '';
    height: 1px;
    position: absolute;
    bottom: -1px;
    transition: width 0.3s ease-in-out;
    width: 0;
  }
  &:hover {
    &:before {
       width: 100%;
    }
  }
  .MuiButton-root {
    &:before {
      background-color: transparent;
    }
  }
}
`;

const theme = createTheme({
  palette: {
    primary: {
      main: colors.white,
    },
    secondary: {
      main: colors.davysGrey,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {" "}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.13.20/dist/katex.min.css"
          integrity="sha384-cRxb1HsKSl8bTfU9fBcGsjktUfQa6w+fwvkYnU8XjFH4Qg8To1+/9OXv5iRzrKX4"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <NextNProgress
          color={colors.activeSoft}
          options={{ showSpinner: false }}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
