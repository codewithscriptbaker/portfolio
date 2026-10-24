import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import { Analytics } from "@vercel/analytics/react";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

import MainLayout from "@/layout/main-layout";
import CursorTrailCanvas from "@/components/cursor-trail-canvas";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <DefaultSeo
        defaultTitle={siteMetadata.title}
        description="CleanCraft builds private, air-gapped AI for translation, transcription, and document intelligence."
        openGraph={{
          type: "website",
          locale: siteMetadata.locale,
          url: siteMetadata.siteUrl,
          siteName: siteMetadata.siteName,
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "CleanCraft — Private AI Systems",
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.svg?v=4",
            type: "image/svg+xml",
          },
        ]}
      />
      <ThemeProvider attribute="class" defaultTheme="light">
        <MainLayout>
          <CursorTrailCanvas className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
          <AnimatePresence mode="wait" initial={false}>
            <Component key={router.pathname} {...pageProps} />
          </AnimatePresence>
        </MainLayout>
      </ThemeProvider>
      <Analytics />
    </>
  );
}
