import Document, { Head, Main, NextScript } from 'next/document';
import globalStyles from '../styling/globalStyles';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage();

    return {
      ...page,
      customStyling: {},
      locale: 'sk_SK',
    };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Blogísek</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />

          <style>
            {globalStyles}
          </style>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
