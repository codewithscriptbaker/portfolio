export const COMPANY = {
  name: "CleanCraft",
  eyebrow: "Private AI engineering studio",
  headline: "AI that runs where your data lives, not in someone else’s cloud.",
  lead: "CleanCraft designs, builds and deploys offline-ready AI for translation, transcription and document intelligence. Built for teams that can’t send sensitive data to public APIs.",
  about:
    "CleanCraft grew out of hands-on work shipping offline translation, transcription and document AI for environments where the cloud wasn’t an option. We keep the team senior and the systems simple, so what we hand over is something your people can run.",
  sectors: ["government", "healthcare", "media"],
  responseTime: "24 hours",
};

export const STATS = [
  { value: 3, suffix: "+", label: "Production AI products shipped" },
  { value: 4, suffix: "+ yrs", label: "Building and running AI systems" },
  { value: 95, suffix: "%+", label: "RAG retrieval accuracy in production" },
  {
    value: 25,
    suffix: "%",
    label: "LLM metric gains from fine-tuning",
    rangeEnd: 40,
  },
] as const;

export const SERVICES = [
  {
    num: "01",
    title: "Offline Translation & Transcription",
    body: "Multilingual translation and speech-to-text that run fully on your hardware, including Urdu and Punjabi.",
  },
  {
    num: "02",
    title: "Private RAG & Document Intelligence",
    body: "Search and question your documents with hybrid retrieval and OCR. Every answer comes with its source.",
  },
  {
    num: "03",
    title: "Custom LLM Fine-tuning",
    body: "Adapt open models to your domain, then measure the gain against your own benchmarks.",
  },
  {
    num: "04",
    title: "Air-gapped AI Deployment",
    body: "Packaging, installation and hardening for networks with no internet connection at all.",
  },
  {
    num: "05",
    title: "AI Integration & Backends",
    body: "APIs, queues and dashboards in Django and FastAPI so models fit into your real workflows.",
  },
  {
    num: "06",
    title: "Audio & Media Analysis",
    body: "Transcripts, speaker labels, summaries and structured reports from recordings, processed locally.",
  },
] as const;

export const WHY_US = [
  {
    title: "Your data never leaves",
    body: "Processing stays inside your network. No third-party APIs, no training on your content.",
  },
  {
    title: "No cloud dependency",
    body: "Self-hosted models keep running when the internet doesn’t, and your costs don’t scale with usage fees.",
  },
  {
    title: "On-premise support",
    body: "We install, document and train your team on site, then stay available after launch.",
  },
  {
    title: "Local-language expertise",
    body: "Hands-on experience with English, Urdu and Punjabi, where generic tools tend to fall short.",
  },
] as const;

export const CASE_STUDIES = [
  {
    code: "TRANSAPP",
    title: "Offline translation and briefing platform",
    problem:
      "Teams in air-gapped environments had no safe way to translate, transcribe and brief on foreign-language material.",
    solution:
      "One offline workspace combining NLLB translation, Whisper transcription and automatic briefings.",
    result: "1,000+ concurrent requests, 30% faster",
  },
  {
    code: "STRATAMIND",
    title: "Self-hosted document intelligence",
    problem:
      "Critical knowledge sat in scanned, mixed-format files, and public AI tools weren’t allowed.",
    solution:
      "Private RAG with hybrid retrieval, OCR and citations on every answer.",
    result: "95%+ retrieval accuracy",
  },
  {
    code: "AI AUDIO ANALYST",
    title: "Local speech analysis",
    problem: "Hours of recordings and no time to listen to them.",
    solution:
      "Local speech-to-text with summaries, speaker labeling and structured exports.",
    result: "Private audio review without cloud uploads",
  },
] as const;

export const PROCESS = [
  {
    step: "STEP 1",
    title: "Discover",
    body: "We map your data, constraints and goals, then agree on scope and success measures.",
  },
  {
    step: "STEP 2",
    title: "Design",
    body: "Architecture, model choices and hardware plan, shared for your sign-off before we build.",
  },
  {
    step: "STEP 3",
    title: "Build",
    body: "Iterative delivery with working demos on your data, not slideware.",
  },
  {
    step: "STEP 4",
    title: "Deploy & Support",
    body: "Installation in your environment, documentation, team training and ongoing support.",
  },
] as const;

export const ENGAGEMENT = [
  {
    title: "Fixed-scope project",
    body: "A defined system, timeline and price. Best for a first deployment or proof of concept.",
    price: "Scoped after discovery",
  },
  {
    title: "Dedicated team",
    body: "AI engineers embedded with your team for ongoing builds and roadmap work.",
    price: "Monthly retainer",
  },
  {
    title: "Support & maintenance",
    body: "Updates, monitoring, model refreshes and priority help for systems already live.",
    price: "Monthly retainer",
  },
] as const;

export const TECH_STACK = [
  "Python",
  "PyTorch",
  "Hugging Face",
  "Whisper / Faster-Whisper",
  "NLLB",
  "Ollama",
  "FAISS",
  "ChromaDB",
  "Django",
  "FastAPI",
  "Celery",
  "RabbitMQ",
  "Next.js",
] as const;

export const FAQ = [
  {
    q: "Can the system run with no internet at all?",
    a: "Yes. Models, search indexes and the application are installed inside your network and run without any external connection.",
  },
  {
    q: "Which languages do you support?",
    a: "English, Urdu and Punjabi are our core strengths. Translation and transcription cover many more through open multilingual models.",
  },
  {
    q: "What hardware do we need?",
    a: "It depends on the models and the number of users. We size this in the Design step and can work with existing servers or advise on new ones.",
  },
  {
    q: "Who owns the code and models?",
    a: "By default, you receive the deployed system, source for custom components and full documentation.",
  },
  {
    q: "How long does a project take?",
    a: "A focused pilot typically takes 4–12 weeks. We give a firm timeline after the Discover step.",
  },
] as const;

export const SERVICE_OPTIONS = [
  "Offline translation & transcription",
  "Private RAG / document intelligence",
  "LLM fine-tuning",
  "Air-gapped deployment",
  "AI integration",
  "Not sure yet",
] as const;
