import {
  SiFastapi,
  SiDjango,
  SiFlask,
  SiNextdotjs,
  SiPytorch,
  SiOpenai,
  SiKubernetes,
  SiNginx,
  SiRabbitmq,
  SiElasticsearch,
  SiDocker,
  SiCelery,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiPython,
  SiHtml5,
  SiCss3,
  SiGit,
  SiPostman,
} from "react-icons/si";
import { FaBrain, FaDatabase, FaMicrophone, FaRobot } from "react-icons/fa";
import { MdTranslate, MdDocumentScanner } from "react-icons/md";
import { HiChip } from "react-icons/hi";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "AI / ML / NLP",
    priority: "core",
    skills: [
      { name: "LLMs & Generative AI", icon: SiOpenai },
      { name: "RAG & Agentic Workflows", icon: FaBrain },
      { name: "PyTorch", icon: SiPytorch },
      { name: "Hugging Face / Transformers", icon: HiChip },
      { name: "Whisper / Faster-Whisper", icon: FaMicrophone },
      { name: "NLLB Translation", icon: MdTranslate },
      { name: "OCR / Document AI", icon: MdDocumentScanner },
      { name: "Ollama", icon: FaRobot },
      { name: "Faiss / ChromaDB", icon: FaDatabase },
    ],
  },
  {
    sectionName: "Backend",
    priority: "core",
    skills: [
      { name: "Django", icon: SiDjango },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Flask", icon: SiFlask },
      { name: "Celery", icon: SiCelery },
      { name: "RabbitMQ", icon: SiRabbitmq },
    ],
  },
  {
    sectionName: "Languages",
    priority: "core",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
    ],
  },
  {
    sectionName: "Frontend",
    priority: "core",
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap 5", icon: SiBootstrap },
    ],
  },
  {
    sectionName: "Databases",
    priority: "supporting",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
      { name: "Elasticsearch", icon: SiElasticsearch },
    ],
  },
  {
    sectionName: "DevOps & Tools",
    priority: "supporting",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Nginx", icon: SiNginx },
      { name: "Git", icon: SiGit },
      { name: "Postman", icon: SiPostman },
    ],
  },
];
