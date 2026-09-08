import { type ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";

export const EXPERIENCE: ExperienceShowcaseListItemProps[] = [
  {
    title: "Artificial Intelligence Engineer",
    organisation: {
      name: "Horizon Tech Services Pvt. Ltd.",
      href: "https://horizontechservices.com/",
    },
    date: "July 2022 - Present",
    location: "Onsite",
    description:
      "Led 3+ AI products for translation and media processing. Built pipelines handling 1,000+ concurrent requests (30% faster), fine-tuned LLMs with 25–40% metric gains, and shipped RAG systems with 95%+ retrieval accuracy for production and air-gapped deployments.",
  },
  {
    title: "WordPress Developer",
    organisation: {
      name: "Deviance Technology",
      href: "https://www.linkedin.com/in/muhammad-sawaiz-668976246",
    },
    date: "August 2020 - July 2022",
    location: "Remote",
    description:
      "Customized 15+ WordPress themes and plugins. Delivered 10+ SEO-optimized websites with payment integrations and client-focused feature work.",
  },
];

export const EDUCATION: ExperienceShowcaseListItemProps[] = [
  {
    title: "MS in Computer Science",
    organisation: {
      name: "Riphah International University",
      href: "https://www.riphah.edu.pk/",
    },
    date: "2021",
    location: "Pakistan",
    description:
      "Graduate studies in computer science with focus on software systems and applied computing.",
  },
  {
    title: "BS in Computer Science",
    organisation: {
      name: "University of Sargodha",
      href: "https://su.edu.pk/",
    },
    date: "2017",
    location: "Sargodha, Pakistan",
    description:
      "Undergraduate foundation in algorithms, software engineering, and computer systems.",
  },
];
