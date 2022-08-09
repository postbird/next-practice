import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body style={{ backgroundColor: '#eee' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
