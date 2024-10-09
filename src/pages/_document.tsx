import { Toaster } from 'react-hot-toast';
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          href="/assets/svgs/favicon.svg"
        />
      </Head>

      <body>
        <Main />

        <NextScript />

        <Toaster
          reverseOrder={false}
          position="bottom-center"
        />
      </body>
    </Html>
  );
}