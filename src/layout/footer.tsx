import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { scrollToSection } from "@/hooks/useActiveSection";

export default function Footer() {
  return (
    <footer className="brand-dark relative isolate z-10 border-t border-white/10 px-6 py-10 sm:px-14 md:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 text-center text-sm text-zinc-400 md:flex-row md:text-left">
        <span>
          © {new Date().getFullYear()} CleanCraft. All rights reserved.
        </span>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#top");
            }}
            className="transition-colors hover:text-brand-mint"
          >
            Back to top
          </a>
          <a
            href={`mailto:${siteMetadata.email}`}
            className="transition-colors hover:text-brand-mint"
          >
            {siteMetadata.email}
          </a>
          <div className="flex gap-4">
            <a
              href={siteMetadata.github}
              target="_blank"
              rel="noreferrer"
              className="h-5 w-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-mint"
              aria-label="GitHub"
            >
              <GithubIcon className="text-brand-mint transition-colors duration-150 hover:text-white" />
            </a>
            <a
              href={siteMetadata.twitter}
              target="_blank"
              rel="noreferrer"
              className="h-5 w-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-mint"
              aria-label="Twitter"
            >
              <TwitterIcon className="text-brand-mint transition-colors duration-150 hover:text-white" />
            </a>
            <a
              href={siteMetadata.linkedin}
              target="_blank"
              rel="noreferrer"
              className="h-5 w-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-mint"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="text-brand-mint transition-colors duration-150 hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
