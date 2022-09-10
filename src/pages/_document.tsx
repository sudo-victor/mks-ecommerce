import { Head, Html, Main, NextScript } from "next/document";
import { GlobalStyle } from "../styles/global";

function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <GlobalStyle />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
