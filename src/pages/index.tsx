import Head from "next/head";
import { useEffect } from "react";

import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import HomeAbout from "@/components/home-about";
import SkillsShowcase from "@/components/skills/skills-showcase";
import HomeProjects from "@/components/home-projects";
import HomeTestimonials from "@/components/home-testimonials";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EDUCATION, EXPERIENCE } from "@/data/experience";
import { SKILLS_DATA } from "@/data/skills";
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
        title={`${siteMetadata.author} | ${siteMetadata.description}`}
        description={`Portfolio of ${siteMetadata.author}, an AI Engineer specializing in machine learning, NLP, document intelligence, and production-ready air-gapped AI systems.`}
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: `${siteMetadata.author} - ${siteMetadata.description}`,
          description: `AI Engineer portfolio featuring RAG systems, multilingual translation, speech transcription, and offline AI deployments by ${siteMetadata.author}.`,
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: `${siteMetadata.author} - Portfolio Image`,
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
              "AI Engineer, Machine Learning, NLP, RAG, Document Intelligence, Whisper, NLLB, FastAPI, Django, Python, Next.js, Portfolio",
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
      <LandingHero />
      <HomeAbout />
      <SkillsShowcase skills={SKILLS_DATA} />
      <HomeProjects />
      <HomeTestimonials />
      <ExperienceShowcaseList
        id="experience"
        title="Experience"
        details={EXPERIENCE}
      />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
