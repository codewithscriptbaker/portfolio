import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg?v=4" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg?v=4" />
        <meta name="theme-color" content="#B44E22" />
      </Head>
      <body className="bg-background text-zinc-950 antialiased selection:bg-accent selection:text-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
