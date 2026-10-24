import Head from "next/head";
import { useEffect } from "react";

import { NextSeo } from "next-seo";

import AboutSection from "@/components/company/about-section";
import CompanyHero from "@/components/company/company-hero";
import ContactSection from "@/components/company/contact-section";
import FaqSection from "@/components/company/faq-section";
import PricingSection from "@/components/company/pricing-section";
import ProcessSection from "@/components/company/process-section";
import ServicesSection from "@/components/company/services-section";
import TechSection from "@/components/company/tech-section";
import TrustedBy from "@/components/company/trusted-by";
import WhySection from "@/components/company/why-section";
import WorkSection from "@/components/company/work-section";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { scrollToSection } from "@/hooks/useActiveSection";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      window.setTimeout(() => scrollToSection(hash), 100);
    }
  }, []);

  return (
    <>
      <NextSeo
        title={siteMetadata.title}
        description="CleanCraft builds private, air-gapped AI: offline translation, transcription and document intelligence for organizations that can’t rely on public cloud."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: siteMetadata.title,
          description:
            "Private, offline-ready AI for translation, transcription, and document intelligence — deployed on your infrastructure.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "CleanCraft — Private AI Systems",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "CleanCraft, Private AI, Offline AI, Air-gapped, RAG, Document Intelligence, Whisper, NLLB, FastAPI, Django, NLP",
          },
        ]}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      <CompanyHero />
      <TrustedBy />
      <ServicesSection />
      <WhySection />
      <WorkSection />
      <ProcessSection />
      <PricingSection />
      <TechSection />
      <AboutSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
