import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />

          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;800&display=swap"
            rel="stylesheet preload"
          />

          <meta name="description" content="Criamos este teste para avaliar seus conhecimentos e habilidades frontend (HTML, CSS e JavaScript)." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;