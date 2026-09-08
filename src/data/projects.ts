import { siteMetadata } from "@/data/siteMetaData.mjs";

export type ProjectCaseStudy = {
  problem: string;
  approach: string;
  result: string;
};

export type PortfolioProject = {
  name: string;
  favicon: string;
  imageUrl: string[];
  imageAlt: string;
  description: string;
  sourceCodeHref: string;
  liveWebsiteHref?: string;
  caseStudy?: ProjectCaseStudy;
};

export const PROJECTS_CARD: PortfolioProject[] = [
  {
    name: "Transapp",
    favicon: "/favicon.svg",
    imageUrl: ["/images/projects/covers/transapp.svg"],
    imageAlt:
      "Transapp UI mockup showing offline translation and transcription workspace",
    description:
      "Offline translation, transcription, and briefing platform for air-gapped environments.",
    sourceCodeHref: siteMetadata.github,
    caseStudy: {
      problem:
        "Teams needed multilingual media processing without sending sensitive files to cloud APIs.",
      approach:
        "Built an air-gapped pipeline with NLLB, Whisper, and Tesseract OCR, plus encrypted history and one-pager exports.",
      result:
        "Shipped production translation/transcription workflows that run fully offline across multiple media types.",
    },
  },
  {
    name: "StrataMind",
    favicon: "/favicon.svg",
    imageUrl: ["/images/projects/covers/stratamind.svg"],
    imageAlt:
      "StrataMind UI mockup showing document intelligence chat with citations",
    description:
      "Self-hosted document intelligence (RAG) with hybrid retrieval, citations, and OCR.",
    sourceCodeHref: siteMetadata.github,
    caseStudy: {
      problem:
        "Organizations needed trustworthy answers from private documents without leaking data to third-party LLM hosts.",
      approach:
        "Designed a FastAPI + LangGraph + Next.js stack with hybrid retrieval, OCR ingestion, and offline model caching via Ollama.",
      result:
        "Delivered cited document Q&A suitable for self-hosted and air-gapped deployments.",
    },
  },
  {
    name: "AI Audio Analyst",
    favicon: "/favicon.svg",
    imageUrl: ["/images/projects/covers/audio-analyst.svg"],
    imageAlt:
      "AI Audio Analyst UI mockup showing waveform transcription and export options",
    description:
      "Local speech-to-text and structured analysis with summaries and speaker labeling.",
    sourceCodeHref: siteMetadata.github,
    caseStudy: {
      problem:
        "Audio review required transcription and structured insights without uploading recordings to the cloud.",
      approach:
        "Combined Faster-Whisper and Ollama for local-only transcription, summaries, and export to TXT/SRT/JSON.",
      result:
        "Enabled private audio analysis workflows with portable exports for reporting and review.",
    },
  },
  {
    name: "Portfolio",
    favicon: "/favicon.svg",
    imageUrl: ["/images/projects/covers/portfolio.svg"],
    imageAlt:
      "Portfolio homepage mockup for Muhammad Sawaiz AI Engineer site",
    description:
      "Personal portfolio for AI engineering work in ML, NLP, and offline production systems.",
    sourceCodeHref: siteMetadata.siteRepo,
    liveWebsiteHref: siteMetadata.siteUrl,
  },
];
