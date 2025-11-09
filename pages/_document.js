import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fa" dir="rtl">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Chainary - پلتفرم فارسی قراردادهای هوشمند و ابزارهای بلاکچین" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
